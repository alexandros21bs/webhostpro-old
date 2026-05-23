import { useEffect, useRef, useState } from 'react'
import { Bot, Calendar, ChevronRight, MessageCircle, Rocket, Sparkles, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const HINT_SHOW_DELAY = 8000
const HINT_HIDE_DELAY = 14000
const NOTICE_HIDE_DELAY = 2800

export default function AIDock() {
  const [open, setOpen] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [notice, setNotice] = useState('')
  const [noticeCycle, setNoticeCycle] = useState(0)

  const dockRef = useRef(null)

  useEffect(() => {
    const showTimer = window.setTimeout(() => setHintVisible(true), HINT_SHOW_DELAY)
    const hideTimer = window.setTimeout(() => setHintVisible(false), HINT_HIDE_DELAY)

    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    const handlePointerDown = (event) => {
      if (!dockRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  useEffect(() => {
    if (!notice) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setNotice('')
    }, NOTICE_HIDE_DELAY)

    return () => {
      window.clearTimeout(timer)
    }
  }, [notice, noticeCycle])

  const hideHint = () => setHintVisible(false)

  const toggleDock = () => {
    setOpen((current) => !current)
    hideHint()
  }

  const showNotice = (message) => {
    setNotice(message)
    setNoticeCycle((value) => value + 1)
  }

  const handlePlaceholderAction = (message) => {
    setOpen(false)
    hideHint()
    showNotice(message)
  }

  const handleContactLink = () => {
    setOpen(false)
    hideHint()
  }

  const actions = [
    {
      title: 'AI Assistant',
      subtitle: 'Websites • AI • Hosting • SaaS',
      icon: Bot,
      onClick: () => handlePlaceholderAction('Ο AI Assistant ενεργοποιείται σύντομα.'),
    },
    {
      title: 'WhatsApp',
      subtitle: 'Άμεση επικοινωνία',
      icon: MessageCircle,
      href: 'https://wa.me/306955236006',
    },
    {
      title: 'Start Project',
      subtitle: 'Νέα συνεργασία',
      icon: Rocket,
      to: '/contact',
    },
    {
      title: 'Book Call',
      subtitle: 'Συζήτηση για project',
      icon: Calendar,
      to: '/contact',
    },
  ]

  return (
    <div className={`ai-dock ${open ? 'is-open' : ''}`} ref={dockRef}>
      <div className={`ai-dock-idle-tip ${hintVisible && !open ? 'is-visible' : ''}`} role="status" aria-live="polite">
        <span className="ai-dock-idle-emoji" aria-hidden="true">👋</span>
        <span>Χρειάζεστε website ή AI chatbot;</span>
      </div>

      <div className="ai-dock-anchor">
        <div id="ai-dock-stack" className="ai-dock-stack" aria-hidden={!open}>
          <div className="ai-dock-panel">
            <div className="ai-dock-header">
              <div className="ai-dock-header-meta">
                <strong className="ai-dock-header-title">WEB HOST PRO AI</strong>
                <span className="ai-dock-online-state">
                  <span className="ai-dock-online-dot" />
                  Online τώρα
                </span>
              </div>

              <button
                type="button"
                className="ai-dock-close"
                onClick={() => setOpen(false)}
                aria-label="Close AI dock"
              >
                <X size={14} />
              </button>
            </div>

            <div className="ai-dock-actions">
              {actions.map((action) => {
                const Icon = action.icon
                const content = (
                  <>
                    <span className="ai-dock-action-icon">
                      <Icon size={17} />
                    </span>
                    <span className="ai-dock-action-copy">
                      <span className="ai-dock-action-title">{action.title}</span>
                      <span className="ai-dock-action-subtitle">{action.subtitle}</span>
                    </span>
                    <ChevronRight size={14} className="ai-dock-action-arrow" />
                  </>
                )

                if (action.href) {
                  return (
                    <a
                      key={action.title}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ai-dock-action"
                      onClick={() => {
                        setOpen(false)
                        hideHint()
                      }}
                    >
                      {content}
                    </a>
                  )
                }

                if (action.to) {
                  return (
                    <Link
                      key={action.title}
                      to={action.to}
                      className="ai-dock-action"
                      onClick={handleContactLink}
                    >
                      {content}
                    </Link>
                  )
                }

                return (
                  <button key={action.title} type="button" className="ai-dock-action" onClick={action.onClick}>
                    {content}
                  </button>
                )
              })}
            </div>

            <p className={`ai-dock-notice ${notice ? 'is-visible' : ''}`} aria-live="polite">
              {notice || ' '}
            </p>
          </div>
        </div>

        <div className="ai-dock-trigger-row">
          <button
            type="button"
            className="ai-dock-status-pill"
            onClick={toggleDock}
            aria-label={open ? 'Close Web Host Pro AI Dock' : 'Open Web Host Pro AI Dock'}
          >
            <span className="ai-dock-status-dot" />
            <span>AI ONLINE</span>
          </button>

          <button
            type="button"
            className="ai-dock-main"
            onClick={toggleDock}
            aria-controls="ai-dock-stack"
            aria-expanded={open}
            aria-label={open ? 'Close Web Host Pro AI Dock' : 'Open Web Host Pro AI Dock'}
          >
            <span className="ai-dock-orbit-ring one" aria-hidden="true" />
            <span className="ai-dock-orbit-ring two" aria-hidden="true" />
            <span className="ai-dock-orbit-dot dot-1" aria-hidden="true" />
            <span className="ai-dock-orbit-dot dot-2" aria-hidden="true" />

            <span className="ai-dock-core" aria-hidden="true">
              <span className="ai-dock-core-label">AI</span>
              <Sparkles size={10} className="ai-dock-core-spark" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}