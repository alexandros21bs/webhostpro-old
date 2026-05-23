import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react'

const MESSAGES = {
  liveNoteDefault:
    'Αν κάποιο site δεν εμφανιστεί εδώ, άνοιξέ το από το κουμπί "Δείτε το site".',
  liveLoading: 'Φόρτωση live προεπισκόπησης...',
  liveBlocked:
    'Το live preview δεν φόρτωσε σωστά. Δοκίμασε ξανά ή χρησιμοποίησε Screenshot mode.',
  liveReady:
    'Live preview ενεργό: μπορείς να σκρολάρεις κανονικά μέσα στο παράθυρο.',
}

const LIVE_TIMEOUT_MS = 12000

export default function ProjectPreviewLightbox({
  projects,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const isOpen = activeIndex !== null && activeIndex >= 0
  const project = isOpen ? projects[activeIndex] : null

  const [mode, setMode] = useState('live')
  const [liveNote, setLiveNote] = useState(MESSAGES.liveNoteDefault)
  const iframeRef = useRef(null)
  const timerRef = useRef(null)
  const liveConfirmedRef = useRef(false)
  const activeUrlRef = useRef('')

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startLivePreview = useCallback(
    (url) => {
      if (!iframeRef.current || !url) return

      clearTimer()
      liveConfirmedRef.current = false
      activeUrlRef.current = url
      setLiveNote(MESSAGES.liveLoading)
      iframeRef.current.src = url

      timerRef.current = window.setTimeout(() => {
        if (!liveConfirmedRef.current) setLiveNote(MESSAGES.liveBlocked)
      }, LIVE_TIMEOUT_MS)
    },
    [clearTimer],
  )

  const handleIframeLoad = () => {
    if (!activeUrlRef.current) return
    if (!iframeRef.current || iframeRef.current.src === 'about:blank') return

    liveConfirmedRef.current = true
    clearTimer()
    setLiveNote(MESSAGES.liveReady)
  }

  const handleClose = useCallback(() => {
    clearTimer()
    if (iframeRef.current) iframeRef.current.src = 'about:blank'
    activeUrlRef.current = ''
    setLiveNote(MESSAGES.liveNoteDefault)
    onClose()
  }, [clearTimer, onClose])

  useEffect(() => {
    if (!isOpen) return undefined
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !project) return
    setMode('live')
    setLiveNote(MESSAGES.liveNoteDefault)
    startLivePreview(project.url)
  }, [isOpen, project, startLivePreview])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKey = (event) => {
      if (event.key === 'Escape') handleClose()
      else if (event.key === 'ArrowRight') onNavigate(1)
      else if (event.key === 'ArrowLeft') onNavigate(-1)
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, handleClose, onNavigate])

  useEffect(() => () => clearTimer(), [clearTimer])

  if (!isOpen || !project) return null

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) handleClose()
  }

  return (
    <div
      className={`project-lightbox ${mode === 'live' ? 'live-mode' : ''} open`}
      role="dialog"
      aria-modal="true"
      aria-label="Project preview"
      onClick={handleBackdropClick}
    >
      <div className="project-lightbox-inner">
        <div className="project-lightbox-top">
          <h3 className="project-lightbox-title">{project.title}</h3>

          <div className="project-lightbox-head-actions">
            <button
              type="button"
              className={`project-lightbox-mode ${mode === 'live' ? 'active' : ''}`}
              onClick={() => {
                setMode('live')
                startLivePreview(project.url)
              }}
            >
              Live
            </button>
            <button
              type="button"
              className={`project-lightbox-mode ${mode === 'image' ? 'active' : ''}`}
              onClick={() => {
                clearTimer()
                setMode('image')
              }}
            >
              Screenshot
            </button>
            <button
              type="button"
              className="project-lightbox-close"
              aria-label="Close preview"
              onClick={handleClose}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <img
          className="project-lightbox-image"
          src={project.image}
          alt={`${project.title} preview`}
        />

        <div className="project-lightbox-live-wrap">
          <iframe
            ref={iframeRef}
            className="project-lightbox-iframe"
            src="about:blank"
            title={`${project.title} live preview`}
            loading="lazy"
            onLoad={handleIframeLoad}
          />
          <p className="project-lightbox-live-note">{liveNote}</p>
        </div>

        <div className="project-lightbox-actions">
          <button
            type="button"
            className="project-lightbox-nav"
            onClick={() => onNavigate(-1)}
          >
            <ArrowLeft size={14} /> Previous
          </button>
          <button
            type="button"
            className="project-lightbox-nav"
            onClick={() => onNavigate(1)}
          >
            Next <ArrowRight size={14} />
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-lightbox-visit"
          >
            Δείτε το site <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
