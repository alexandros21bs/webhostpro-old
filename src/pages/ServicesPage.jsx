import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  MonitorSmartphone,
  Bot,
  ServerCog,
  LayoutDashboard,
  SearchCheck,
  Palette,
  MapPin,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import Seo from '../components/common/Seo'
import '../styles/home.css'

export default function ServicesPage() {
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
      icon: Bot,
      title: 'AI, SaaS & Automation Systems',
      text: 'Σχεδιάζουμε AI assistants, SaaS platforms, automation systems και custom digital tools που βοηθούν επιχειρήσεις να αυτοματοποιούν διαδικασίες, να εξυπηρετούν πελάτες και να αναπτύσσονται μέσα από σύγχρονες τεχνολογικές λύσεις.',
      comingSoon: true,
    },
    {
      icon: MapPin,
      title: 'AI Destination Platforms',
      text: 'Αναπτύσσουμε AI travel & destination ecosystems όπως τα AskAthens.ai και AskGreece.ai, με στόχο τη δημιουργία έξυπνων τουριστικών platforms που συνδέουν προορισμούς, επισκέπτες, επιχειρήσεις, εμπειρίες και τοπικές υπηρεσίες.',
      comingSoon: true,
    },
  ]

  const process = [
    {
      icon: SearchCheck,
      title: 'Ανάλυση',
      paragraphs: [
        'Ξεκινάμε κατανοώντας σε βάθος την επιχείρηση, το κοινό και τον πραγματικό στόχο του project. Μελετάμε την αγορά, τον ανταγωνισμό, τις υπηρεσίες και τις ανάγκες της επιχείρησης ώστε να δημιουργηθεί μία σωστή στρατηγική πριν ξεκινήσει οποιαδήποτε υλοποίηση.',
        'Οργανώνουμε τη δομή του project, τις λειτουργίες, το περιεχόμενο και την τεχνολογική κατεύθυνση, ώστε η βάση να είναι σταθερή, επεκτάσιμη και έτοιμη για μελλοντική ανάπτυξη.',
      ],
    },
    {
      icon: Wrench,
      title: 'Υλοποίηση',
      paragraphs: [
        'Σχεδιάζουμε και αναπτύσσουμε το project με σύγχρονο design, σωστή εμπειρία χρήστη και ισχυρή τεχνική υποδομή. Δημιουργούμε responsive websites, e-shops, custom platforms, AI εργαλεία και cloud υποδομές που λειτουργούν γρήγορα, σταθερά και επαγγελματικά.',
        'Παράλληλα οργανώνουμε το περιεχόμενο, το SEO, τα integrations, την ασφάλεια και όλες τις λειτουργίες που χρειάζεται μία σύγχρονη ψηφιακή παρουσία ώστε να είναι έτοιμη για πραγματική χρήση και ανάπτυξη.',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Υποστήριξη',
      paragraphs: [
        'Η δουλειά δεν σταματά μετά το launch. Παρακολουθούμε και υποστηρίζουμε ενεργά κάθε project με updates, τεχνική συντήρηση, βελτιστοποιήσεις, ασφάλεια και συνεχή αναβάθμιση των λειτουργιών.',
        'Στόχος μας είναι κάθε project να εξελίσσεται διαρκώς, να παραμένει γρήγορο, ασφαλές και σύγχρονο, ενώ παράλληλα αποκτά νέες δυνατότητες, αυτοματισμούς και AI εργαλεία που βοηθούν την επιχείρηση να αναπτύσσεται.',
      ],
    },
  ]

  return (
    <section className="section-space">
      <Seo
        title="Υπηρεσίες Web Host Pro"
        description="Websites, eShop, AI chatbots, hosting, SaaS platforms, digital marketing, SEO και branding από τη Web Host Pro."
        path="/services"
      />

      <div className="container-main">
        <div
          className="page-glow relative overflow-hidden rounded-[36px] border-0 p-8 md:p-12"
          style={{
            border: 'none',
            background: 'transparent',
            boxShadow: 'none',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
          }}
        >
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />

          <Link
            to="/"
            className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200"
          >
            <ArrowLeft size={16} /> Αρχική
          </Link>

          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">
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

          <div className="mt-8 services-grid">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Ζητήστε Προσφορά
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε Projects
            </Link>
            <Link
              to="/contact"
              className="btn-inline inline-flex items-center gap-2 border-amber-400/40! bg-amber-400/10! text-amber-300! hover:bg-amber-400/16!"
            >
              φτιάξε μου ενα πλάνο <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/3 p-6 backdrop-blur-xl md:p-8">
          <p className="text-sm tracking-[0.08em] text-amber-300/85">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Από την ιδέα μέχρι την υποστήριξη
          </h2>

          <p className="mt-4 max-w-5xl text-white/68 leading-8">
            Δεν δημιουργούμε απλώς μία ιστοσελίδα ή μία πλατφόρμα. Χτίζουμε ολοκληρωμένα digital ecosystems με σωστή στρατηγική, τεχνολογική βάση και συνεχή εξέλιξη, ώστε κάθε project να μπορεί να αναπτυχθεί πραγματικά στο χρόνο.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="glass service-card rounded-[28px] p-6">
                  <Icon size={24} className="text-[#67E8F9]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#67E8F9]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/65">{step.paragraphs[0]}</p>
                  <p className="mt-3 leading-7 text-white/65">{step.paragraphs[1]}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-amber-300/12 bg-linear-to-b from-white/[0.035] to-white/1.5 p-7 backdrop-blur-xl md:p-9">
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
              className="btn-inline inline-flex border-[#67E8F9]/60! bg-[#67E8F9]/16! text-[#67E8F9]!"
            >
              WhatsApp <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}