import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MonitorSmartphone,
  Bot,
  ServerCog,
  LayoutDashboard,
  SearchCheck,
  Palette,
  MapPin,
  Mountain,
  Landmark,
  ArrowRight,
  ExternalLink,
  Eye,
} from 'lucide-react'
import Seo from '../components/common/Seo'
import ProjectPreviewLightbox from '../components/common/ProjectPreviewLightbox'
import '../styles/home.css'

const previewImageExtensions = ['webp', 'jpg', 'jpeg', 'png']

const loadProjectPreviewImage = (slug) => new Promise((resolve) => {
  let index = 0

  const tryNext = () => {
    if (index >= previewImageExtensions.length) {
      resolve(null)
      return
    }

    const src = `/images/ecosystem/${slug}.${previewImageExtensions[index]}`
    index += 1

    const img = new Image()

    img.onload = () => {
      const aspectRatio =
        img.naturalWidth > 0 && img.naturalHeight > 0
          ? `${img.naturalWidth} / ${img.naturalHeight}`
          : null

      resolve({ src, aspectRatio })
    }

    img.onerror = tryNext
    img.src = src
  }

  tryNext()
})

export default function HomePage() {
  const [activePreviewIndex, setActivePreviewIndex] = useState(null)
  const [previewMediaMap, setPreviewMediaMap] = useState({})
  const services = [
    {
      icon: MonitorSmartphone,
      title: 'Websites & eShop',
      text: 'Επαγγελματικά websites, eShop, landing pages και custom business systems με premium αισθητική και σωστή δομή.',
    },
    {
      icon: Bot,
      title: 'AI Chatbots & AI Systems',
      text: 'AI assistants για υποστήριξη πελατών, πωλήσεις, lead capture, knowledge base και αυτοματισμούς.',
    },
    {
      icon: ServerCog,
      title: 'Hosting & Cloud Infrastructure',
      text: 'Managed hosting, VPS, domains, SSL, Cloudflare, backups, monitoring και σταθερή cloud υποδομή.',
    },
    {
      icon: LayoutDashboard,
      title: 'SaaS Platforms & Client Portals',
      text: 'Dashboards, client portals, product management platforms και subscription-based εφαρμογές.',
    },
    {
      icon: SearchCheck,
      title: 'Digital Marketing & SEO',
      text: 'SEO, Google Business, social media management, campaigns, reels, stories και digital growth strategy.',
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      text: 'Λογότυπα, κάρτες, φυλλάδια, social graphics, visual identity και ολοκληρωμένη επαγγελματική εικόνα.',
    },
    {
      icon: SearchCheck,
      title: 'Business Strategy & Project Planning',
      text: 'Οργάνωση ιδέας, ανάλυση στόχων, δομή υπηρεσιών, ψηφιακή στρατηγική και επαγγελματικός σχεδιασμός πριν την υλοποίηση.',
      comingSoon: true,
    },
    {
      icon: Palette,
      title: 'Media Production & Digital Content',
      text: 'Παραγωγή video, οπτικοακουστικού υλικού, podcasts, ebooks και premium περιεχομένου για brands, projects και campaigns.',
      comingSoon: true,
    },
  ]

  const digitalAchaiaCards = useMemo(
    () => [
      {
        icon: Landmark,
        title: 'Odontotos.gr',
        category: 'Railway / Heritage / Experience',
        text: 'Θεματικό flagship project για την ανάδειξη του Οδοντωτού, της διαδρομής, της εμπειρίας, της ιστορίας και της πολιτιστικής του αξίας.',
        link: 'https://odontotos.gr',
        previewSlug: 'odontotos-preview',
      },
      {
        icon: Mountain,
        title: 'Vouraikos.gr',
        category: 'Nature / Canyon / Routes',
        text: 'Ψηφιακή παρουσία για το φαράγγι του Βουραϊκού, τη φύση, τα μονοπάτια, τη γεωγραφία και την εμπειρία του επισκέπτη.',
        link: 'https://vouraikos.gr',
        previewSlug: 'vouraikos-preview',
      },
      {
        icon: MapPin,
        title: 'DiscoverDiakopto.gr',
        category: 'Destination Guide',
        text: 'Τουριστικός οδηγός για το Διακοπτό και την ευρύτερη περιοχή, με προτάσεις, εμπειρίες, τοπική ταυτότητα και premium παρουσίαση.',
        link: 'https://discoverdiakopto.gr',
        previewSlug: 'discoverdiakopto-preview',
      },
      {
        icon: ServerCog,
        title: 'Achaia Marketplace',
        text: 'Μία κοινή ψηφιακή marketplace πλατφόρμα για παραγωγούς, βιολογικά προϊόντα και τοπικές επιχειρήσεις της Αχαΐας.',
        details: [
          'Στόχος είναι μικρές επιχειρήσεις και παραγωγοί να αποκτήσουν σύγχρονη online παρουσία και νέες δυνατότητες ανάπτυξης μέσα από ένα οργανωμένο regional digital ecosystem.',
        ],
        ctaPrimary: 'Συμμετοχή Παραγωγού',
        ctaSecondary: 'Γίνε μέρος της πρωτοβουλίας',
        supportText: 'Με αγάπη για τον τόπο μας και στόχο μία σύγχρονη ψηφιακή Αχαΐα.',
        comingSoon: true,
        variant: 'marketplace',
      },
    ],
    [],
  )

  const flagshipCards = useMemo(
    () => digitalAchaiaCards.filter((card) => card.variant !== 'marketplace'),
    [digitalAchaiaCards],
  )
  const marketplaceCard = useMemo(
    () => digitalAchaiaCards.find((card) => card.variant === 'marketplace'),
    [digitalAchaiaCards],
  )
  const MarketplaceIcon = marketplaceCard?.icon

  useEffect(() => {
    let cancelled = false

    const loadFlagshipPreviewImages = async () => {
      const entries = await Promise.all(
        flagshipCards.map(async (card) => {
          const previewData = await loadProjectPreviewImage(card.previewSlug)
          return [card.previewSlug, previewData]
        }),
      )

      if (!cancelled) {
        setPreviewMediaMap(Object.fromEntries(entries))
      }
    }

    loadFlagshipPreviewImages()

    return () => {
      cancelled = true
    }
  }, [flagshipCards])

  const previewProjects = flagshipCards.map((card) => ({
    title: card.title,
    url: card.link,
    image: previewMediaMap[card.previewSlug]?.src || '',
  }))

  const closePreview = () => setActivePreviewIndex(null)
  const navigatePreview = (direction) => {
    setActivePreviewIndex((current) => {
      if (current === null) return current
      const total = previewProjects.length
      return (current + direction + total) % total
    })
  }

  const aiOrbitLabels = ['Website', 'AI Chatbot', 'Hosting', 'SaaS', 'Leads']
  const aiMiniConversation = [
    {
      role: 'visitor',
      text: 'Θέλω website με AI υποστήριξη.',
    },
    {
      role: 'ai',
      text: 'Μπορούμε να στήσουμε website, hosting και AI assistant σε ένα ενιαίο σύστημα.',
    },
    {
      role: 'ai',
      text: 'Ο assistant απαντάει, συλλέγει leads και οδηγεί τον χρήστη στην επικοινωνία.',
    },
  ]

  return (
    <main className="home-page">
      <Seo
        title="Web Host Pro | Technology, AI & Cloud Provider"
        description="Web Host Pro: Websites, eShop, AI chatbots, hosting, cloud infrastructure, SaaS platforms, digital marketing και branding."
        path="/"
      />

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">WEB HOST PRO AIGIALEIA</span>

            <h1>
              Technology, AI & Cloud Provider για σύγχρονες επιχειρήσεις.
            </h1>

            <p>
              Η Web Host Pro συνδυάζει websites, eShop, AI chatbots, hosting,
              cloud υποδομές, SaaS πλατφόρμες, digital marketing και branding
              σε ένα ολοκληρωμένο επαγγελματικό οικοσύστημα.
            </p>

            <div className="hero-buttons">
              <Link to="/services" className="primary-btn">
                Δείτε Υπηρεσίες
              </Link>

              <Link to="/contact" className="secondary-btn">
                Ξεκινήστε Project
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="glass-card ai-orbit-card">
              <div className="ai-orbit-header">
                <span className="card-label">WEB HOST PRO AI SYSTEM</span>
                <h3>AI Assistant που μετατρέπει επισκέπτες σε leads.</h3>
                <p>
                  Συνδέουμε website, hosting και AI chatbot σε ένα ολοκληρωμένο
                  σύστημα επικοινωνίας, υποστήριξης και πωλήσεων.
                </p>
              </div>

              <div className="ai-orbit-stage" aria-hidden="true">
                <div className="ai-orbit-ring">
                  <div className="ai-core-orb">AI</div>

                  {aiOrbitLabels.map((label, index) => (
                    <span
                      key={label}
                      className={`ai-orbit-label orbit-${index + 1}`}
                    >
                      {label}
                    </span>
                  ))}

                  {Array.from({ length: 8 }).map((_, index) => (
                    <span
                      key={`orbit-dot-${index + 1}`}
                      className={`ai-orbit-dot dot-${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="ai-lead-flow" aria-label="Visitor to contact lead flow">
                <span className="ai-flow-step">Visitor</span>
                <span className="ai-flow-line" aria-hidden="true">
                  <span className="ai-flow-pulse" />
                </span>
                <span className="ai-flow-step">AI Assistant</span>
                <span className="ai-flow-line" aria-hidden="true">
                  <span className="ai-flow-pulse" />
                </span>
                <span className="ai-flow-step">Lead</span>
                <span className="ai-flow-line" aria-hidden="true">
                  <span className="ai-flow-pulse" />
                </span>
                <span className="ai-flow-step">Contact</span>
              </div>

              <div className="ai-mini-chat" aria-live="polite">
                {aiMiniConversation.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`ai-chat-bubble ${message.role}`}
                    style={{ '--bubble-delay': `${index * 2.8}s` }}
                  >
                    <span>{message.role === 'visitor' ? 'Visitor' : 'AI'}</span>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="ai-demo-cta">
                Ενεργοποίηση AI Assistant
              </Link>

              <div className="ai-demo-badges">
                <span>Websites</span>
                <span>AI Chatbots</span>
                <span>Hosting</span>
                <span>SaaS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-title">
          <span>SERVICES</span>
          <h2>Οι βασικοί πυλώνες της Web Host Pro.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link to="/services" className="service-card" key={service.title}>
                <Icon size={28} className="text-[#67E8F9]" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <div className="service-card-footer">
                  {service.comingSoon && (
                    <span className="coming-soon-badge">Coming Soon</span>
                  )}
                  <strong className="inline-flex items-center gap-2 text-amber-200">
                    Περισσότερα <ArrowRight size={14} />
                  </strong>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="projects-section digital-achaia-section">
        <div className="section-title digital-achaia-heading">
          <span>DIGITAL ACHAIA</span>
          <h2>Η τοπική ψηφιακή ταυτότητα της Αχαΐας.</h2>

          <div className="digital-achaia-intro">
            <p>
              Η Digital Achaia δημιουργεί flagship projects για τον τουρισμό,
              τον πολιτισμό, τις τοπικές επιχειρήσεις και τη σύγχρονη ψηφιακή
              ανάπτυξη της Αχαΐας.
            </p>

            <p>
              Στόχος είναι η δημιουργία ενός ενιαίου digital ecosystem
              που θα βοηθήσει περιοχές, παραγωγούς, επιχειρήσεις και
              τοπικές δράσεις να αποκτήσουν ισχυρή online παρουσία.
            </p>

            <p>
              Στηρίζουμε νέες ιδέες, συνεργασίες και πρωτοβουλίες που μπορούν
              να συμβάλουν στην ανάπτυξη, την εξέλιξη και τη δημιουργία νέων
              ευκαιριών για τη νέα γενιά στον τόπο μας.
            </p>

            <p className="digital-achaia-slogan">ΜΕ ΑΓΑΠΗ ΓΙΑ ΤΟΝ ΤΟΠΟ ΜΑΣ.</p>

            <div className="digital-achaia-actions">
              <Link to="/projects" className="primary-btn digital-achaia-btn-main">
                Δείτε τα Projects
              </Link>

              <Link to="/contact" className="digital-achaia-btn-outline">
                Στείλτε μας την ιδέα σας
              </Link>
            </div>
          </div>
        </div>

        <div className="projects-grid digital-achaia-grid digital-achaia-ecosystem-grid">
          {flagshipCards.map((card, index) => {
            const Icon = card.icon
            const previewMedia = previewMediaMap[card.previewSlug]

            return (
              <article
                key={card.title}
                className="group relative flex h-full min-h-82.5 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1828]/68 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/25 hover:shadow-[0_0_30px_rgba(103,232,249,0.18)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-linear-to-b from-amber-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-[#111d31]">
                  <Icon size={22} strokeWidth={1.9} className="relative z-10 text-[#67E8F9]" />
                </div>

                <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-amber-200/80">
                  {card.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold leading-8 text-[#67E8F9]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[1.06rem] leading-8 text-white/65">
                  {card.text}
                </p>

                <button
                  type="button"
                  onClick={() => setActivePreviewIndex(index)}
                  className={`digital-achaia-preview-thumb mt-auto ${previewMedia?.src ? '' : 'no-image'}`}
                  aria-label={`Προεπισκόπηση του ${card.title}`}
                >
                  {previewMedia?.src && (
                    <img src={previewMedia.src} alt={`${card.title} preview`} loading="lazy" />
                  )}
                </button>

                <div className="digital-achaia-card-actions pt-4">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="digital-achaia-card-btn primary"
                  >
                    Δείτε το site <ExternalLink size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePreviewIndex(index)}
                    className="digital-achaia-card-btn ghost"
                  >
                    Προεπισκόπηση <Eye size={14} />
                  </button>
                </div>
              </article>
            )
          })}

          {marketplaceCard && (
            <article className="project-card digital-achaia-card marketplace-card">
              {MarketplaceIcon && <MarketplaceIcon size={28} className="text-amber-300 marketplace-card-icon" />}
              <h3>{marketplaceCard.title}</h3>
              <p>{marketplaceCard.text}</p>
              {marketplaceCard.details?.map((detail) => (
                <p key={`${marketplaceCard.title}-${detail}`} className="digital-achaia-detail">
                  {detail}
                </p>
              ))}

              <p className="marketplace-support-text">{marketplaceCard.supportText}</p>

              <div className="marketplace-cta-group">
                <Link to="/contact" className="marketplace-btn marketplace-btn-primary">
                  {marketplaceCard.ctaPrimary}
                </Link>
                <Link to="/contact" className="marketplace-btn marketplace-btn-secondary">
                  {marketplaceCard.ctaSecondary}
                </Link>
              </div>

              {marketplaceCard.comingSoon && (
                <span className="coming-soon-badge coming-soon-badge-amber">COMING SOON</span>
              )}
            </article>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="glass-card cta-card">
          <h2>
            Χτίζουμε ψηφιακή υποδομή, όχι απλά ιστοσελίδες.
          </h2>

          <p>
            Websites, AI systems, hosting, SaaS platforms, branding και
            digital growth σε ένα ενιαίο production-ready ecosystem.
          </p>

          <Link to="/contact" className="primary-btn">
            Συζήτηση για Project
          </Link>
        </div>
      </section>

      <ProjectPreviewLightbox
        projects={previewProjects}
        activeIndex={activePreviewIndex}
        onClose={closePreview}
        onNavigate={navigatePreview}
      />
    </main>
  )
}