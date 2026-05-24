import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  MapPin,
} from 'lucide-react'
import Seo from '../components/common/Seo'

const webHostProPoints = [
  'Websites & eShop',
  'AI Systems',
  'SaaS Platforms',
  'Hosting & Cloud',
  'Automation Systems',
]

const digitalAchaiaPoints = [
  'Tourism & Culture',
  'Local Businesses',
  'Regional Projects',
  'AskAchaia.gr',
  'AskPatra.gr',
]

const ecosystemExamples = [
  'Odontotos',
  'Vouraikos',
  'DiscoverDiakopto',
  'AskAchaia.gr',
  'AskPatra.gr',
  'MyDiakopto.gr',
]

export default function AboutEcosystemPage() {
  return (
    <section className="section-space">
      <Seo
        title="Ecosystem | Web Host Pro × Digital Achaia"
        description="Web Host Pro και Digital Achaia ως ένα ενιαίο ecosystem για τεχνολογία, AI, cloud infrastructure και regional digital projects."
        path="/ecosystem"
      />

      <div className="container-main space-y-12">
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
          <div className="absolute -left-10 top-0 h-44 w-44 rounded-full bg-cyan-300/18 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-amber-400/14 blur-3xl" aria-hidden="true" />

          <Link
            to="/"
            className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200"
          >
            <ArrowLeft size={16} /> Αρχική
          </Link>

          <p className="relative text-sm uppercase tracking-[0.18em] text-amber-300">
            WEB HOST PRO × DIGITAL ACHAIA
          </p>

          <h1 className="relative mt-4 max-w-4xl text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Technology, AI & Digital Ecosystems
          </h1>

          <p className="relative mt-6 max-w-5xl text-lg leading-8 text-white/72">
            Η Web Host Pro και η Digital Achaia λειτουργούν ως ένα ενιαίο digital ecosystem με διαφορετικούς ρόλους: η Web Host Pro χτίζει την τεχνολογική υποδομή, ενώ η Digital Achaia αναπτύσσει regional digital projects για τον τόπο, τον τουρισμό, τον πολιτισμό και τις τοπικές επιχειρήσεις.
          </p>
        </div>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[30px] p-7 md:p-9">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/14 blur-3xl" aria-hidden="true" />
            <Building2 size={28} className="text-[#67E8F9]" />
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-amber-300/85">WEB HOST PRO</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">Technology, AI & Cloud Provider</h2>
            <p className="mt-4 leading-8 text-white/68">
              Η Web Host Pro αναπτύσσει websites, eShop systems, AI assistants, SaaS platforms, hosting και cloud infrastructure για σύγχρονες επιχειρήσεις και digital projects. Στόχος της είναι να δημιουργεί production-ready λύσεις που συνδυάζουν τεχνολογία, αυτοματοποίηση και πραγματική υποδομή.
            </p>

            <ul className="mt-6 grid gap-2 text-sm text-white/82 sm:grid-cols-2">
              {webHostProPoints.map((point) => (
                <li key={point} className="rounded-xl px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-[30px] p-7 md:p-9">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/14 blur-3xl" aria-hidden="true" />
            <MapPin size={28} className="text-[#67E8F9]" />
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-amber-300/85">DIGITAL ACHAIA</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">Regional Digital Ecosystem Initiative</h2>
            <p className="mt-4 leading-8 text-white/68">
              Η Digital Achaia είναι μια πρωτοβουλία για την ψηφιακή ανάδειξη της Αχαΐας. Εστιάζει στον τουρισμό, τον πολιτισμό, τις τοπικές επιχειρήσεις, τις κοινότητες και τα regional projects που μπορούν να δώσουν νέα ψηφιακή ταυτότητα στον τόπο.
            </p>

            <ul className="mt-6 grid gap-2 text-sm text-white/82 sm:grid-cols-2">
              {digitalAchaiaPoints.map((point) => (
                <li key={point} className="rounded-xl px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-medium tracking-wide text-amber-200/85">
              Με αγάπη για τον τόπο μας.
            </p>
          </article>
        </section>

        <section className="relative overflow-hidden rounded-[30px] p-7 md:p-9">
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl" aria-hidden="true" />
          <h2 className="relative text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Ένα ecosystem με δύο ρόλους.
          </h2>
          <p className="relative mt-4 max-w-5xl leading-8 text-white/68">
            Η Web Host Pro παρέχει την τεχνολογία, την υποδομή και τα AI/cloud systems. Η Digital Achaia αξιοποιεί αυτή την υποδομή για projects που αναδεικνύουν περιοχές, επιχειρήσεις, εμπειρίες και τοπικές δράσεις.
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2.5">
            {ecosystemExamples.map((example) => (
              <span
                key={example}
                className="rounded-full px-3.5 py-1.5 text-xs uppercase tracking-[0.11em] text-white/82"
              >
                {example}
              </span>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-4xl p-8 md:p-10">
          <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-amber-300/16 blur-3xl" aria-hidden="true" />
          <h2 className="relative text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Από την ιδέα στην ψηφιακή υποδομή.
          </h2>
          <p className="relative mt-4 max-w-4xl leading-8 text-white/72">
            Χτίζουμε ψηφιακά projects που μπορούν να ξεκινήσουν απλά και να εξελιχθούν σε πλήρη AI, cloud και regional ecosystems.
          </p>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="premium-btn btn btn-primary">
              Services
            </Link>
            <Link to="/contact" className="btn-inline inline-flex border-[#67E8F9]/60! bg-[#67E8F9]/16! text-[#67E8F9]!">
              Contact <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </section>
  )
}
