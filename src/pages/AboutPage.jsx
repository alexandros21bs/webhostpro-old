import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Bot, MapPin, Sparkles, Building2, Handshake } from 'lucide-react'
import Seo from '../components/common/Seo'

export default function AboutPage() {
  const webHostPro = [
    'Websites & eShop',
    'Hosting, Domains & SSL',
    'AI Chatbots & Automations',
    'SaaS Platforms & Client Portals',
    'Digital Marketing & SEO',
    'Branding & Design',
  ]

  const digitalAchaia = [
    'Tourism & destination projects',
    'Cultural and local heritage pages',
    'Odontotos, Vouraikos, Discover Diakopto',
    'Partnerships with local bodies and businesses',
    'Flagship regional promotion projects',
    'Future AI tourism assistants',
  ]

  return (
    <section className="section-space">
      <Seo
        title="About Web Host Pro & Digital Achaia"
        description="Η Web Host Pro είναι Technology, AI & Cloud Provider. Η Digital Achaia είναι flagship tourism & cultural ecosystem για την ανάδειξη της Αχαΐας."
        path="/about"
      />

      <div className="container-main">
        <div className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />

          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            About the Ecosystem
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Δύο brands, ένα ενιαίο digital οικοσύστημα.
          </h1>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-white/70">
            Η Web Host Pro και η Digital Achaia λειτουργούν συμπληρωματικά:
            η Web Host Pro αναλαμβάνει την τεχνολογία, την υποδομή και την υλοποίηση,
            ενώ η Digital Achaia εστιάζει σε flagship projects τουριστικής,
            πολιτιστικής και τοπικής ανάδειξης.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-9">
            <Cloud size={30} className="text-[#67E8F9]" />

            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-amber-300/85">
              Web Host Pro
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
              Technology, AI & Cloud Provider.
            </h2>

            <p className="mt-4 leading-8 text-white/68">
              Η Web Host Pro είναι η τεχνική και δημιουργική βάση του οικοσυστήματος.
              Αναλαμβάνει websites, eShop, hosting, domains, SSL, AI chatbots,
              SaaS platforms, digital marketing, branding και custom business systems
              για σύγχρονες επιχειρήσεις.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {webHostPro.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
            <MapPin size={30} className="text-[#67E8F9]" />

            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-amber-300/85">
              Digital Achaia
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
              Flagship tourism & cultural ecosystem.
            </h2>

            <p className="mt-4 leading-8 text-white/68">
              Η Digital Achaia είναι η κατεύθυνση για την ανάδειξη περιοχών,
              μνημείων, διαδρομών, πολιτισμού και τοπικών εμπειριών. Στόχος είναι
              να δημιουργούνται projects με αξία για την Αχαΐα, τον τουρισμό,
              τους τοπικούς φορείς και τις επιχειρήσεις.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {digitalAchaia.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Building2,
              title: 'Agency & Provider',
              text: 'Η Web Host Pro λειτουργεί ως digital agency και infrastructure provider για επιχειρήσεις.',
            },
            {
              icon: Bot,
              title: 'AI & SaaS Direction',
              text: 'Αναπτύσσουμε AI assistants, dashboards, client portals και subscription-based εργαλεία.',
            },
            {
              icon: Handshake,
              title: 'Local Partnerships',
              text: 'Η Digital Achaia δημιουργεί χώρο για συνεργασίες, χορηγίες και τοπικά flagship έργα.',
            },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1828]/68 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/25"
              >
                <Icon size={26} className="text-[#67E8F9]" />
                <h3 className="mt-4 text-xl font-semibold text-[#67E8F9]">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <Sparkles size={28} className="text-[#67E8F9]" />

          <h2 className="mt-4 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            Από απλή online παρουσία σε ολοκληρωμένο technology ecosystem.
          </h2>

          <p className="mt-3 max-w-4xl text-white/65 leading-8">
            Ο στόχος είναι η Web Host Pro να εξελιχθεί σε ολοκληρωμένο
            Technology, AI & Cloud Provider, ενώ η Digital Achaia να λειτουργεί
            ως regional flagship ecosystem για τουρισμό, πολιτισμό και τοπική
            ανάπτυξη.
          </p>

          <div className="cta-row mt-6">
            <Link to="/services" className="premium-btn btn btn-primary">
              Δείτε Υπηρεσίες
            </Link>
            <Link to="/digital-achaia" className="btn-inline inline-flex !border-[#67E8F9]/60 !bg-[#67E8F9]/16 !text-[#67E8F9]">
              Digital Achaia <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}