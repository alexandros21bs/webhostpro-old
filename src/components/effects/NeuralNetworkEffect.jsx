import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

const palettes = [
  [0x667eea, 0x764ba2, 0xf093fb, 0x9d50bb, 0x6e48aa],
  [0xf857a6, 0xff5858, 0xfeca57, 0xff6348, 0xff9068],
  [0x4facfe, 0x00f2fe, 0x43e97b, 0x38f9d7, 0x4484ce],
]

function makeColor(value) {
  return new THREE.Color(value)
}

function makeFormation(formation, density) {
  const nodes = []
  const links = []
  const count = Math.max(70, Math.floor(220 * density))

  if (formation === 0) {
    for (let i = 0; i < count; i += 1) {
      const phi = Math.acos(1 - 2 * ((i + 0.5) / count))
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const r = 3 + 10 * Math.sin((i / count) * Math.PI)
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      )
    }
  } else if (formation === 1) {
    for (let i = 0; i < count; i += 1) {
      const t = i / count
      const angle = t * Math.PI * 14
      const radius = 2 + 9 * (0.35 + 0.65 * Math.sin(t * Math.PI))
      nodes.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          (t - 0.5) * 20,
          Math.sin(angle) * radius
        )
      )
    }
  } else {
    const baseBranches = 6
    nodes.push(new THREE.Vector3(0, 0, 0))
    for (let b = 0; b < baseBranches; b += 1) {
      const baseTheta = (b / baseBranches) * Math.PI * 2
      const dir = new THREE.Vector3(Math.cos(baseTheta), THREE.MathUtils.randFloatSpread(0.5), Math.sin(baseTheta)).normalize()
      let parent = new THREE.Vector3(0, 0, 0)
      for (let s = 0; s < Math.floor(count / baseBranches); s += 1) {
        const jitter = new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(0.9),
          THREE.MathUtils.randFloatSpread(0.9),
          THREE.MathUtils.randFloatSpread(0.9)
        )
        const next = parent.clone().add(dir.clone().multiplyScalar(1.3 + Math.random() * 0.8)).add(jitter)
        nodes.push(next)
        parent = next
      }
    }
  }

  for (let i = 0; i < nodes.length; i += 1) {
    const nearest = []
    for (let j = 0; j < nodes.length; j += 1) {
      if (i === j) continue
      const d = nodes[i].distanceToSquared(nodes[j])
      nearest.push([j, d])
    }
    nearest.sort((a, b) => a[1] - b[1])
    const maxLinks = formation === 1 ? 3 : 4
    for (let k = 0; k < maxLinks; k += 1) {
      const idx = nearest[k][0]
      if (idx > i) links.push([i, idx])
    }
  }

  return { nodes, links }
}

export default function NeuralNetworkEffect({ mode = 'panel' }) {
  const isBackground = mode === 'background'
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  const [themeIndex, setThemeIndex] = useState(0)
  const [density, setDensity] = useState(100)
  const [paused, setPaused] = useState(false)
  const [formation, setFormation] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  const runtimeRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    composer: null,
    clock: null,
    group: null,
    starField: null,
    pointUniforms: null,
    points: null,
    lines: null,
    pulseIndex: 0,
    animationId: null,
    onResize: null,
  })

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return undefined

    const current = runtimeRef.current
    const rect = containerRef.current.getBoundingClientRect()

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, isBackground ? 0.0022 : 0.008)

    const camera = new THREE.PerspectiveCamera(62, rect.width / rect.height, 0.1, 500)
    camera.position.set(0, isBackground ? 8 : 7, isBackground ? 28 : 24)

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(rect.width, rect.height)
    renderer.setClearColor(isBackground ? 0x000000 : 0x050508, 1)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = isBackground ? 0.24 : 0.2
    controls.minDistance = isBackground ? 8 : 12
    controls.maxDistance = isBackground ? 80 : 48

    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(rect.width, rect.height),
      isBackground ? 2.25 : 1.3,
      isBackground ? 0.74 : 0.45,
      isBackground ? 0.58 : 0.7
    )
    composer.addPass(bloom)

    const group = new THREE.Group()
    scene.add(group)

    const starGeo = new THREE.BufferGeometry()
    const starCount = isBackground ? 7200 : 1700
    const starPositions = []
    for (let i = 0; i < starCount; i += 1) {
      const radius = THREE.MathUtils.randFloat(45, 120)
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2))
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2)
      starPositions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      )
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
    const starMat = new THREE.PointsMaterial({
      color: 0xb7d5ff,
      size: isBackground ? 0.24 : 0.23,
      transparent: true,
      opacity: isBackground ? 0.92 : 0.78,
      depthWrite: false,
    })
    const starField = new THREE.Points(starGeo, starMat)
    scene.add(starField)

    const pointUniforms = {
      uTime: { value: 0 },
      uPulsePositions: { value: [new THREE.Vector3(1000, 1000, 1000), new THREE.Vector3(1000, 1000, 1000), new THREE.Vector3(1000, 1000, 1000)] },
      uPulseTimes: { value: [-1000, -1000, -1000] },
      uPulseColor: { value: makeColor(palettes[0][0]) },
    }

    function rebuildNetwork() {
      if (current.points) {
        group.remove(current.points)
        current.points.geometry.dispose()
        current.points.material.dispose()
      }
      if (current.lines) {
        group.remove(current.lines)
        current.lines.geometry.dispose()
        current.lines.material.dispose()
      }

      const palette = palettes[themeIndex].map((c) => makeColor(c))
      const data = makeFormation(formation, isBackground ? 0.4 : density / 100)

      const baseNodes = isBackground
        ? data.nodes.map((node) => node.clone().multiplyScalar(2.05))
        : data.nodes

      const clusterOffsets = isBackground
        ? [
          new THREE.Vector3(-74, 18, -58),
          new THREE.Vector3(0, -10, 0),
          new THREE.Vector3(82, -24, 64),
        ]
        : [new THREE.Vector3(0, 0, 0)]

      const nodesForRender = []
      const linksForRender = []

      clusterOffsets.forEach((offset, clusterIndex) => {
        const startIndex = nodesForRender.length

        baseNodes.forEach((node) => {
          nodesForRender.push(node.clone().add(offset))
        })

        data.links.forEach(([a, b], linkIndex) => {
          if (isBackground && linkIndex % 3 !== 0) return
          linksForRender.push([startIndex + a, startIndex + b, a, b, clusterIndex])
        })
      })

      const nodeGeo = new THREE.BufferGeometry()
      const nodePos = []
      const nodeColor = []
      const nodeSize = []
      nodesForRender.forEach((node, idx) => {
        nodePos.push(node.x, node.y, node.z)
        const pick = palette[idx % palette.length].clone().offsetHSL(THREE.MathUtils.randFloatSpread(0.03), 0, THREE.MathUtils.randFloatSpread(0.06))
        nodeColor.push(pick.r, pick.g, pick.b)
        nodeSize.push(
          isBackground
            ? THREE.MathUtils.randFloat(0.5, 0.92)
            : THREE.MathUtils.randFloat(0.9, 1.6)
        )
      })
      nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePos, 3))
      nodeGeo.setAttribute('nodeColor', new THREE.Float32BufferAttribute(nodeColor, 3))
      nodeGeo.setAttribute('nodeSize', new THREE.Float32BufferAttribute(nodeSize, 1))

      const pointsMat = new THREE.ShaderMaterial({
        uniforms: pointUniforms,
        vertexShader: `
          attribute vec3 nodeColor;
          attribute float nodeSize;
          varying vec3 vColor;
          varying float vPulse;
          uniform float uTime;
          uniform vec3 uPulsePositions[3];
          uniform float uPulseTimes[3];
          float pulseAt(vec3 worldPos, vec3 pulsePos, float pulseTime, float t) {
            if (pulseTime < -900.0) return 0.0;
            float age = t - pulseTime;
            if (age < 0.0 || age > 4.0) return 0.0;
            float ring = age * 16.0;
            float d = distance(worldPos, pulsePos);
            float hit = 1.0 - smoothstep(0.0, 2.4, abs(d - ring));
            return hit * smoothstep(4.0, 0.0, age);
          }
          void main() {
            vColor = nodeColor;
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            float p = 0.0;
            for (int i = 0; i < 3; i++) {
              p += pulseAt(worldPos.xyz, uPulsePositions[i], uPulseTimes[i], uTime);
            }
            vPulse = min(1.0, p);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float pulseScale = 1.0 + vPulse * 1.8;
            gl_PointSize = nodeSize * pulseScale * (${isBackground ? '320.0' : '420.0'} / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vPulse;
          uniform vec3 uPulseColor;
          void main() {
            vec2 c = gl_PointCoord - 0.5;
            float d = length(c);
            if (d > 0.5) discard;
            float glow = 1.0 - smoothstep(0.0, 0.5, d);
            vec3 colorOut = mix(vColor, uPulseColor * 1.2, vPulse * 0.8);
            colorOut += vec3(1.0) * (0.18 + vPulse * 0.3) * glow;
            gl_FragColor = vec4(colorOut, glow * 0.95);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      const points = new THREE.Points(nodeGeo, pointsMat)
      group.add(points)
      current.points = points

      const lineGeo = new THREE.BufferGeometry()
      const linePos = []
      const lineCol = []
      linksForRender.forEach(([aGlobal, bGlobal, aLocal, bLocal, clusterIndex]) => {
        const p1 = nodesForRender[aGlobal]
        const p2 = nodesForRender[bGlobal]
        linePos.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
        const c = palette[(aLocal + bLocal + clusterIndex) % palette.length]
        lineCol.push(c.r, c.g, c.b, c.r, c.g, c.b)
      })
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3))
      lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineCol, 3))
      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: isBackground ? 0.24 : 0.34,
        blending: THREE.AdditiveBlending,
      })
      const lines = new THREE.LineSegments(lineGeo, lineMat)
      group.add(lines)
      current.lines = lines

      pointUniforms.uPulseColor.value = palette[0]
    }

    function triggerPulse(clientX, clientY) {
      const local = containerRef.current.getBoundingClientRect()
      const mouse = new THREE.Vector2(
        ((clientX - local.left) / local.width) * 2 - 1,
        -(((clientY - local.top) / local.height) * 2 - 1)
      )
      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera)
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      const point = new THREE.Vector3()
      if (raycaster.ray.intersectPlane(plane, point)) {
        const idx = (current.pulseIndex + 1) % 3
        current.pulseIndex = idx
        pointUniforms.uPulsePositions.value[idx].copy(point)
        pointUniforms.uPulseTimes.value[idx] = current.clock.getElapsed()
        pointUniforms.uPulseColor.value = makeColor(
          palettes[themeIndex][Math.floor(Math.random() * palettes[themeIndex].length)]
        )
      }
    }

    const clickHandler = (event) => {
      if (isBackground) return
      if (event.target.closest('.neural-panel') || event.target.closest('.neural-controls')) return
      if (!pausedRef.current) triggerPulse(event.clientX, event.clientY)
    }
    renderer.domElement.addEventListener('click', clickHandler)

    const clock = new THREE.Timer()
    clock.connect(document)

    const onResize = () => {
      if (isBackground) {
        const width = window.innerWidth
        const height = window.innerHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
        composer.setSize(width, height)
        return
      }

      if (!containerRef.current) return
      const size = containerRef.current.getBoundingClientRect()
      camera.aspect = size.width / size.height
      camera.updateProjectionMatrix()
      renderer.setSize(size.width, size.height)
      composer.setSize(size.width, size.height)
    }

    window.addEventListener('resize', onResize)

    current.scene = scene
    current.camera = camera
    current.renderer = renderer
    current.controls = controls
    current.composer = composer
    current.clock = clock
    current.group = group
    current.starField = starField
    current.pointUniforms = pointUniforms
    current.onResize = onResize

    rebuildNetwork()

    const animate = () => {
      current.animationId = requestAnimationFrame(animate)
      clock.update()
      const t = clock.getElapsed()
      pointUniforms.uTime.value = t

      if (!pausedRef.current) {
        group.rotation.y = Math.sin(t * (isBackground ? 0.04 : 0.08)) * (isBackground ? 0.05 : 0.08)
        starField.rotation.y += isBackground ? 0.00028 : 0.0003

        if (isBackground) {
          const shimmer = 0.84 + Math.sin(t * 1.9) * 0.14
          starField.material.opacity = shimmer
        }
      }

      controls.autoRotate = !pausedRef.current
      controls.update()
      composer.render()
    }

    animate()

    return () => {
      renderer.domElement.removeEventListener('click', clickHandler)
      if (current.animationId) cancelAnimationFrame(current.animationId)
      window.removeEventListener('resize', onResize)

      if (current.points) {
        current.points.geometry.dispose()
        current.points.material.dispose()
      }
      if (current.lines) {
        current.lines.geometry.dispose()
        current.lines.material.dispose()
      }
      starGeo.dispose()
      starMat.dispose()
      controls.dispose()
      clock.dispose()
      renderer.dispose()
    }
  }, [density, themeIndex, formation, isBackground])

  const handleMorph = () => {
    setFormation((prev) => (prev + 1) % 3)
  }

  const handleReset = () => {
    if (!runtimeRef.current.controls) return
    runtimeRef.current.controls.reset()
  }

  return (
    <div
      ref={containerRef}
      className={isBackground ? 'neural-shell neural-shell-bg' : 'neural-shell'}
    >
      <canvas
        ref={canvasRef}
        className={isBackground ? 'neural-canvas neural-canvas-bg' : 'neural-canvas'}
      />

      {!isBackground && (
        <>
          <div className="neural-panel neural-instructions">
            <div className="neural-title">Quantum Neural Network</div>
            <p className="neural-text">Click για pulse. Drag για explore. Subtle agency-grade motion στο hero.</p>
          </div>

          <div className="neural-panel neural-theme-panel">
            <div className="neural-block">
              <p className="neural-label">Crystal Theme</p>
              <div className="neural-theme-grid">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`neural-theme-button ${themeIndex === idx ? 'is-active' : ''}`}
                    onClick={() => setThemeIndex(idx)}
                    aria-label={`theme-${idx + 1}`}
                    style={{
                      background:
                        idx === 0
                          ? 'radial-gradient(circle at 30% 30%, #a78bfa, #4c1d95)'
                          : idx === 1
                            ? 'radial-gradient(circle at 30% 30%, #fb7185, #9f1239)'
                            : 'radial-gradient(circle at 30% 30%, #38bdf8, #0c4a6e)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="neural-block neural-density-wrap">
              <div className="neural-density-head">
                <span>Density</span>
                <span>{density}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="100"
                value={density}
                className="neural-density-slider"
                onChange={(event) => setDensity(Number(event.target.value))}
              />
            </div>
          </div>

          <div className="neural-controls">
            <button type="button" className="neural-control-button" onClick={handleMorph}>Morph</button>
            <button type="button" className="neural-control-button" onClick={() => setPaused((prev) => !prev)}>
              {paused ? 'Play' : 'Freeze'}
            </button>
            <button type="button" className="neural-control-button" onClick={handleReset}>Reset</button>
          </div>
        </>
      )}
    </div>
  )
}