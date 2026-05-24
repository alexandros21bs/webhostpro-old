import '../../styles/tech-stack-carousel.css'

const stackLogos = [
  { name: 'Cloudflare', mark: 'CF', src: 'https://cdn.simpleicons.org/cloudflare' },
  { name: 'OpenAI', mark: 'OA', src: 'https://cdn.simpleicons.org/openai' },
  { name: 'Docker', mark: 'DK', src: 'https://cdn.simpleicons.org/docker' },
  { name: 'DirectAdmin', mark: 'DA', src: 'https://cdn.simpleicons.org/directadmin' },
  { name: 'Nginx', mark: 'NG', src: 'https://cdn.simpleicons.org/nginx' },
  { name: 'Node.js', mark: 'NJ', src: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'PostgreSQL', mark: 'PG', src: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'GitHub', mark: 'GH', src: 'https://cdn.simpleicons.org/github' },
  { name: 'Ubuntu', mark: 'UB', src: 'https://cdn.simpleicons.org/ubuntu' },
  { name: 'Prisma', mark: 'PR', src: 'https://cdn.simpleicons.org/prisma' },
]

function LogoRow({ duplicated = false }) {
  return (
    <ul className="tech-stack-row" aria-hidden={duplicated ? 'true' : undefined}>
      {stackLogos.map((logo) => (
        <li key={`${logo.name}${duplicated ? '-dup' : ''}`} className="tech-stack-card">
          <span className="tech-stack-mark" aria-hidden="true">
            <img
              src={logo.src}
              alt=""
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="tech-stack-logo"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                const fallback = event.currentTarget.nextElementSibling
                if (fallback) {
                  fallback.style.display = 'inline-flex'
                }
              }}
            />
            <span className="tech-stack-fallback">{logo.mark}</span>
          </span>
          <span className="tech-stack-name">{logo.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TechStackCarousel() {
  return (
    <section className="tech-stack-section" aria-label="Technology Stack and Trusted Partners">
      <div className="tech-stack-shell">
        <header className="tech-stack-header">
          <h2>Technology Stack & Trusted Partners</h2>
          <p>Built with reliable cloud, AI and infrastructure technologies.</p>
        </header>

        <div className="tech-stack-carousel" role="region" aria-label="Trusted partners logo carousel">
          <div className="tech-stack-track">
            <LogoRow />
            <LogoRow duplicated />
          </div>
        </div>
      </div>
    </section>
  )
}