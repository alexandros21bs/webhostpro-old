import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MonitorSmartphone,
  Bot,
  ServerCog,
  LayoutDashboard,
  SearchCheck,
  Palette,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import Seo from '../components/common/Seo'

export default function ServicesPage() {
  const process = [
    {
      icon: SearchCheck,
      title: 'Ανάλυση',
      text: 'Βλέπουμε στόχο, αγορά, υπηρεσίες και τι πραγματικά χρειάζεται η επιχείρηση.',
    },
    {
      icon: Wrench,
      title: 'Υλοποίηση',
      text: 'Στήνουμε design, τεχνική βάση, περιεχόμενο, υποδομή και λειτουργίες.',
    },
    {
      icon: ShieldCheck,
      title: 'Υποστήριξη',
      text: 'Κρατάμε το project ενεργό με βελτιώσεις, updates, ασφάλεια και ανάπτυξη.',
    },
  ]

  const pillars = [
    ['Websites & eShop', MonitorSmartphone],
    ['AI Chatbots & Systems', Bot],
    ['Hosting & Cloud', ServerCog],
    ['SaaS Platforms', LayoutDashboard],
    ['Marketing & SEO', SearchCheck],
    ['Branding & Design', Palette],
  ]

  return (
    <section className="section-space">
      <Seo
        title="Υπηρεσίες Web Host Pro"
        description="Websites, eShop, AI chatbots, hosting, SaaS platforms, digital marketing, SEO και branding από τη Web Host Pro."
        path="/services"
      />

      <div className="container-main">
        <div className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />

          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            Web Host Pro Services
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Technology, AI & Cloud λύσεις για σύγχρονες επιχειρήσεις.
          </h1>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-white/70">
            Η Web Host Pro συνδυάζει websites, eShop, AI chatbots, hosting,
            cloud υποδομές, SaaS πλατφόρμες, digital marketing και branding
            σε ένα ολοκληρωμένο επαγγελματικό οικοσύστημα.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(([title, Icon]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white/85"
              >
                <Icon size={20} className="mb-3 text-[#67E8F9]" />
                {title}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Ζητήστε Προσφορά
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε Projects
            </Link>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Από την ιδέα μέχρι την υποστήριξη.
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="glass service-card rounded-[28px] p-6">
                  <Icon size={24} className="text-[#67E8F9]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#67E8F9]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/65">{step.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <p className="text-xs tracking-[0.12em] text-cyan-100/75">
            Ready to build?
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            Θέλεις website, eShop, AI chatbot, hosting ή custom πλατφόρμα;
          </h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Στείλε μας τι χρειάζεσαι και θα προτείνουμε τη σωστή λύση για την επιχείρησή σου.
          </p>

          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Ζήτα Προσφορά
            </Link>
            <a
              href="https://wa.me/306955236006"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inline inline-flex !border-[#67E8F9]/60 !bg-[#67E8F9]/16 !text-[#67E8F9]"
            >
              WhatsApp <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}