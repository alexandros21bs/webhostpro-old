import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Sparkles, Mountain, Landmark, Handshake, Bot } from 'lucide-react'
import Seo from '../components/common/Seo'

export default function DigitalAchaiaPage() {
  const flagshipProjects = [
    {
      title: 'Odontotos.gr',
      category: 'Railway / Heritage / Experience',
      text: 'Θεματικό flagship project για την ανάδειξη του Οδοντωτού, της διαδρομής, της εμπειρίας, της ιστορίας και της πολιτιστικής του αξίας.',
      link: 'https://odontotos.gr',
      icon: Landmark,
    },
    {
      title: 'Vouraikos.gr',
      category: 'Nature / Canyon / Routes',
      text: 'Ψηφιακή παρουσία για το φαράγγι του Βουραϊκού, τη φύση, τα μονοπάτια, τη γεωγραφία και την εμπειρία του επισκέπτη.',
      link: 'https://vouraikos.gr',
      icon: Mountain,
    },
    {
      title: 'DiscoverDiakopto.gr',
      category: 'Destination Guide',
      text: 'Τουριστικός οδηγός για το Διακοπτό και την ευρύτερη περιοχή, με προτάσεις, εμπειρίες, τοπική ταυτότητα και premium παρουσίαση.',
      link: 'https://discoverdiakopto.gr',
      icon: MapPin,
    },
  ]

  const pillars = [
    'Τουριστική ανάδειξη περιοχών',
    'Πολιτιστικά και ιστορικά αφιερώματα',
    'Ψηφιακοί οδηγοί και landing pages',
    'Συνεργασίες με συλλόγους, φορείς και επαγγελματίες',
    'Τοπική επιχειρηματικότητα και προβολή',
    'Μελλοντικά AI tourism assistants και destination systems',
  ]

  return (
    <section className="section-space">
      <Seo
        title="Digital Achaia Ecosystem"
        description="Digital Achaia: flagship projects για τουριστική, πολιτιστική και τοπική ανάδειξη της Αχαΐας, powered by Web Host Pro."
        path="/digital-achaia"
      />

      <div className="container-main">
        <div className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-amber-300/18 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-cyan-300/18 blur-3xl" />

          <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
            Digital Achaia
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Ψηφιακό οικοσύστημα για τουρισμό, πολιτισμό και τοπική ανάδειξη.
          </h1>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-white/70">
            Η Digital Achaia είναι η flagship κατεύθυνση της Web Host Pro για
            έργα ανάδειξης περιοχών, μνημείων, διαδρομών, εμπειριών και τοπικής
            ταυτότητας. Στόχος είναι να δημιουργηθούν οργανωμένα digital projects
            που δίνουν αξία στην Αχαΐα και μπορούν να στηρίξουν συνεργασίες,
            χορηγίες και μελλοντικές χρηματοδοτήσεις.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="premium-btn btn btn-primary">
              Δείτε Projects
            </Link>
            <Link to="/contact" className="premium-btn btn btn-secondary">
              Πρόταση Συνεργασίας
            </Link>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
            Flagship Projects
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Τα πρώτα έργα του οικοσυστήματος.
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {flagshipProjects.map((project) => {
              const Icon = project.icon
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1828]/68 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/25"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-amber-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-[#111d31]">
                    <Icon size={22} strokeWidth={1.9} className="relative z-10 text-[#67E8F9]" />
                  </div>

                  <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-amber-200/80">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold leading-8 text-[#67E8F9]">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {project.text}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-amber-100 group-hover:text-[#67E8F9]">
                    Άνοιγμα project <ArrowRight size={14} />
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-9">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
              Mission
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
              Από ένα τοπικό project σε ψηφιακό οικοσύστημα.
            </h2>
            <p className="mt-4 leading-8 text-white/68">
              Η Digital Achaia ξεκίνησε ως ιδέα για τουριστικό οδηγό και εξελίσσεται
              σε οργανωμένο οικοσύστημα που μπορεί να φιλοξενεί θεματικά projects,
              τοπικές δράσεις, destination guides, πολιτιστικές ενότητες και
              συνεργασίες με φορείς, συλλόγους, ιδιώτες και επιχειρήσεις.
            </p>
          </div>

          <div className="rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
              Powered by Web Host Pro
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#67E8F9]">
              Υλοποίηση, υποδομή και τεχνολογία.
            </h3>
            <p className="mt-4 leading-8 text-white/68">
              Η Web Host Pro αναλαμβάνει το τεχνικό κομμάτι: websites, hosting,
              design, AI systems, SaaS εργαλεία, υποδομές και digital strategy.
            </p>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
            Ecosystem Pillars
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Τι μπορεί να καλύψει η Digital Achaia.
          </h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white/82"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <p className="text-xs tracking-[0.12em] text-cyan-100/75">
            Collaboration
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            Συνεργασίες για τοπική προβολή, τουρισμό και πολιτισμό.
          </h2>

          <p className="mt-3 max-w-3xl text-white/65">
            Η Digital Achaia μπορεί να στηρίξει έργα με συλλόγους, τοπικούς φορείς,
            ιδιώτες, επιχειρήσεις, χορηγούς και μελλοντικές χρηματοδοτήσεις.
          </p>

          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Πρόταση Συνεργασίας
            </Link>
            <Link to="/projects" className="btn-inline inline-flex !border-[#67E8F9]/60 !bg-[#67E8F9]/16 !text-[#67E8F9]">
              Δείτε Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}