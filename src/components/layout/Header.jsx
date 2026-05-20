import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import navLogo from '../../../12.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Digital Achaia', to: '/digital-achaia' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [prevPath, setPrevPath] = useState(location.pathname)

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    if (open) setOpen(false)
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-[44px] z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/12 bg-slate-950/72 shadow-[0_8px_38px_rgba(0,0,0,0.32)] backdrop-blur-2xl'
          : 'bg-transparent'
      )}
    >
      <div className="container-main">
        <div
          className={clsx(
            'flex items-center justify-between transition-all duration-400',
            scrolled ? 'py-3.5' : 'py-4'
          )}
        >
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={navLogo}
              alt="Web Host Pro"
              width="240"
              height="80"
              className="h-12 w-auto lg:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={`${item.label}-${item.to}`}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'relative rounded-full border px-3 py-1.5 text-sm transition',
                    isActive
                      ? 'border-amber-400/30 bg-amber-400/10 text-white'
                      : 'border-transparent text-white/70 hover:border-white/15 hover:text-white'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={clsx(
                        'absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-amber-400/20 via-amber-300 to-amber-400/20 transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/contact"
              className="premium-btn btn btn-primary rounded-full px-5 py-2 text-sm"
            >
              Start Your Project
            </Link>

            <div className="flex items-center overflow-hidden rounded-full border border-white/15 bg-white/5 text-sm font-semibold tracking-wide backdrop-blur-sm">
              <button className="relative bg-transparent px-3.5 py-1.5 text-cyan-200 transition-all duration-300 hover:bg-white/8">
                EL
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </button>
              <span className="h-4 w-px bg-white/10" />
              <button className="px-3.5 py-1.5 text-white/40 transition-all duration-300 hover:bg-white/8 hover:text-cyan-200/75">
                EN
              </button>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 p-2 text-amber-400 transition-all duration-300 hover:scale-110 hover:bg-amber-400/20 hover:shadow-[0_0_16px_rgba(212,168,79,0.35)]"
              aria-label="Επικοινωνία"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: document.title,
                    url: window.location.href,
                  })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                }
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-cyan-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-[0_0_14px_rgba(110,198,255,0.25)]"
              aria-label="Share"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:border-cyan-200/35 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="glass-strong soft-grid mb-4 overflow-hidden rounded-2xl p-4 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={`${item.label}-${item.to}-mobile`}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'rounded-xl px-3 py-2.5 text-sm transition',
                        isActive
                          ? 'bg-amber-400/10 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="premium-btn btn btn-primary mt-2 rounded-xl px-4 py-3 text-center text-sm"
                >
                  Start Your Project
                </Link>

                <a
                  href="https://wa.me/306955236006"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3 text-center text-sm text-white/85 transition hover:bg-white/[0.1]"
                >
                  WhatsApp: 6955236006
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 via-yellow-200 to-cyan-300 shadow-[0_0_12px_rgba(212,168,79,0.7)]"
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          />
        </div>
      </div>
    </header>
  )
}