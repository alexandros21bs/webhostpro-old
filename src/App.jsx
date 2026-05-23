import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { ChevronUp } from 'lucide-react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import AIDock from './components/common/AIDock'
const NeuralNetworkEffect = lazy(() => import('./components/effects/NeuralNetworkEffect'))

import HomePage from './pages/HomePage'
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const DigitalAchaiaPage = lazy(() => import('./pages/DigitalAchaiaPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
import CookieBanner from './components/common/CookieBanner'

const dayNames = ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ']
const monthNames = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μάι', 'Ιούν', 'Ιούλ', 'Αύγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ']

function TopBarDateTime() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(t)
  }, [])

  const day = dayNames[now.getDay()]
  const date = `${now.getDate()} ${monthNames[now.getMonth()]}`
  const time = now.toLocaleTimeString('el-GR', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="top-bar-datetime">
      {/* Calendar */}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>{day}, {date}</span>
      <span className="top-bar-sep">·</span>
      {/* Clock */}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <span>{time}</span>
    </div>
  )
}

function TopBarCallMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="top-bar-link"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        aria-label="Επικοινωνία"
        title="Επικοινωνία"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </button>
      {open && (
        <div className="topbar-call-popup">
          <a href="tel:+306955236006" className="topbar-call-option">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Tel: +30 695 523 6006</span>
          </a>
          <a href="https://wa.me/306955236006" target="_blank" rel="noopener noreferrer" className="topbar-call-option topbar-call-whatsapp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.3-.6.1-1.6-.8-2.7-1.7-3.5-3-.3-.4 0-.5.2-.7l.5-.6c.2-.2.1-.4 0-.6L9.6 7.3c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6.1-.9.4C7 8 6.6 8.7 6.6 10c0 1.3 1 2.6 1.1 2.7.1.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.8.5 0 1.7-.7 1.9-1.4.3-.6.3-1.2.2-1.3-.1-.2-.3-.3-.5-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.6 1 1-3.5-.3-.4C2.5 15.6 1.9 13.8 1.9 12 1.9 6.4 6.4 1.9 12 1.9S22.1 6.4 22.1 12 17.6 21.8 12 21.8zm0-21.8C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>
            <span>WhatsApp: +30 695 523 6006</span>
          </a>
          <a href="viber://chat?number=%2B306984138488" className="topbar-call-option topbar-call-viber">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C9.5.1 5.6.6 3.4 2.7 1.6 4.5.9 7.2.8 10.5c0 3.3.6 5.3 2.6 7.1v3.1s0 1.2.8 1.5c.9.3 1.4-.6 1.4-.6l1.6-1.8c.2-.2.4-.2.6-.1 1.7.5 3.6.7 5.3.7h.4c.3-3.8 2.5-5.5 4-6.2.5-.2.7-.3.7-.3-.1-1.5-.3-4.4-1.3-6.2C15.6 4.5 12.5.2 11.4 0zm1.5 3.5c2.2.3 4.2 1.4 5.5 3.2.9 1.3 1.3 2.7 1.4 4.3 0 .3-.2.5-.5.5-.3 0-.5-.2-.5-.5-.1-1.3-.5-2.5-1.2-3.6-1.1-1.5-2.8-2.5-4.6-2.7-.3 0-.5-.3-.5-.6 0-.3.2-.6.4-.6zm.2 2c1.4.2 2.6.8 3.5 1.9.6.8 1 1.7 1.1 2.7 0 .3-.2.5-.5.6-.3 0-.5-.2-.6-.5-.1-.8-.4-1.5-.8-2.1-.7-1-1.7-1.4-2.8-1.6-.3-.1-.5-.3-.4-.6.1-.3.3-.5.5-.4zm.3 2c.7.1 1.3.5 1.7 1 .3.4.5.8.5 1.3 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-.3-.1-.6-.3-.8-.3-.4-.7-.6-1.1-.6-.3 0-.5-.3-.5-.5.1-.3.4-.5.7-.4zM8.7 6.4c.3 0 .6.1.8.4l1.1 1.4c.2.3.2.7 0 1l-.5.7c-.1.2-.1.4 0 .5.5 1 1.2 1.8 2 2.5.2.2.4.2.6.1l.7-.5c.3-.2.7-.2 1 0l1.4 1c.5.3.5 1 .1 1.4-.5.6-1.1 1-1.9 1.1-.9.1-1.9-.2-2.8-.7-1.6-1-3-2.4-3.9-4.1-.5-1-.8-2-.6-2.9.1-.7.5-1.3 1.1-1.7.2-.1.5-.2.7-.2z"/></svg>
            <span>Viber: +30 698 413 8488</span>
          </a>
        </div>
      )}
    </div>
  )
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const location = useLocation()

  const handleTopBarShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
        return
      }

      await navigator.clipboard.writeText(window.location.href)
    } catch {
      // Ignore cancelled share/clipboard actions.
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="global-neural-bg" aria-hidden="true">
        <Suspense fallback={null}>
          <NeuralNetworkEffect mode="background" />
        </Suspense>
      </div>
      <div className="top-bar">
        <div className="top-bar-inner">
          {/* Left: LIVE + date/time/temp */}
          <div className="top-bar-left">
            <div className="top-bar-live">
              <span className="live-dot" />
              <span className="live-label">LIVE</span>
            </div>
            <span className="top-bar-divider" />
            <TopBarDateTime />
          </div>

          {/* Right: brand + info + socials */}
          <div className="top-bar-right">
            <span className="top-bar-brand"><strong>Web Host Pro Αιγιαλεία</strong> <span className="top-bar-brand-sep">|</span> Technology AI & Cloud Provider</span>
            <span className="top-bar-divider" style={{ marginInline: '14px' }} />
            <Link
              to="/contact"
              className="top-bar-link"
              aria-label="Φόρμα Επικοινωνίας"
              title="Φόρμα Επικοινωνίας"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </Link>
            <span className="top-bar-sep">·</span>
            <TopBarCallMenu />
            <span className="top-bar-sep">·</span>
            <a href="https://www.google.com/maps/place/Web+Host+Pro+%CE%91%CE%B9%CE%B3%CE%B9%CE%B1%CE%BB%CE%B5%CE%AF%CE%B1%CF%82/@38.1888062,22.1939479,1112m/data=!3m1!1e3!4m15!1m8!3m7!1s0x135fbe54a9856abf:0x1825b31282382b0b!2zzpLOv8-Nz4HPic69IDExMjIsIM6UzrnOsc66zr_PgM-Ez4wgMjUwIDAz!3b1!8m2!3d38.1888062!4d22.1965282!16s%2Fg%2F11l5c_ffsf!3m5!1s0x135fbf00018a08d3:0x7017e678766cfc82!8m2!3d38.1887535!4d22.1965626!16s%2Fg%2F11xzn1j381?entry=ttu" target="_blank" rel="noopener noreferrer" className="top-bar-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Διακοπτό, Αχαΐα
            </a>

            <span className="top-bar-divider" />

            <div className="top-bar-socials">
            <a href="https://www.facebook.com/profile.php?id=61574991412567" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/webhostpro.gr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@webhostprogr" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>
            </a>
            <a href="https://www.youtube.com/@webhostprogr" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://x.com/WebHostProGR" target="_blank" rel="noopener noreferrer" aria-label="x.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.875 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
            </a>
            <button
              type="button"
              onClick={handleTopBarShare}
              aria-label="Share"
              title="Share"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
          </div>
          </div>
        </div>
      </div>
      <Header />
      <main className="relative z-10" style={{ paddingTop: 'calc(44px + 5rem)' }}>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
          >
            <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/digital-achaia" element={<DigitalAchaiaPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      <AIDock />
      <ScrollToTopButton />
      <CookieBanner />
    </div>
  )
}
