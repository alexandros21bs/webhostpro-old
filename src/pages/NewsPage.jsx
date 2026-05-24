import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/common/Seo'

export default function NewsPage() {
  return (
    <section className="section-space">
      <Seo
        title="News & Announcements"
        description="Νέα και ανακοινώσεις από τη Web Host Pro."
        path="/news"
      />
      <div className="container-main">
        <div className="page-glow rounded-[32px] p-8 md:p-12">
          <Link
            to="/"
            className="back-btn mb-6 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200"
          >
            <ArrowLeft size={16} /> Αρχική
          </Link>

          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">Νέα</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            News & Announcements
          </h1>
          <p className="mt-3 max-w-2xl text-white/55">
            Σύντομα εδώ θα βρίσκετε τα τελευταία νέα, ανακοινώσεις και ενημερώσεις για τα projects μας.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-white/60">
              Δεν υπάρχουν διαθέσιμα νέα προς το παρόν.
            </p>
            <p className="mt-2 text-sm text-white/40">
              Επιστρέψτε σύντομα ή ακολουθήστε μας για ενημερώσεις.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Επικοινωνία
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
