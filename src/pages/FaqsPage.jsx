import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/common/Seo'

const faqs = [
  {
    q: 'Τι υπηρεσίες προσφέρει η Web Host Pro;',
    a: 'Web design, web development, hosting, AI integrations, SEO και ολοκληρωμένες ψηφιακές λύσεις.',
  },
  {
    q: 'Πόσο χρόνο παίρνει ένα νέο project;',
    a: 'Ανάλογα με το scope, συνήθως 2–6 εβδομάδες από το brief έως το go-live.',
  },
  {
    q: 'Παρέχετε υποστήριξη μετά τη παράδοση;',
    a: 'Ναι. Όλα τα projects συνοδεύονται από πλάνο υποστήριξης και ενημερώσεων.',
  },
  {
    q: 'Πώς μπορώ να ζητήσω προσφορά;',
    a: 'Μέσω της σελίδας επικοινωνίας ή με email στο alexandros21bs@gmail.com.',
  },
]

export default function FaqsPage() {
  return (
    <section className="section-space">
      <Seo
        title="FAQs"
        description="Συχνές ερωτήσεις για τις υπηρεσίες της Web Host Pro."
        path="/faqs"
      />
      <div className="container-main">
        <div className="page-glow rounded-[32px] p-8 md:p-12">
          <Link
            to="/"
            className="back-btn mb-6 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200"
          >
            <ArrowLeft size={16} /> Αρχική
          </Link>

          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">Βοήθεια</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Συχνές Ερωτήσεις
          </h1>
          <p className="mt-3 max-w-2xl text-white/55">
            Σύντομες απαντήσεις στα πιο συχνά ερωτήματα. Για οτιδήποτε άλλο, στείλτε μας μήνυμα.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h2 className="text-lg font-semibold text-white">{item.q}</h2>
                <p className="mt-2 text-sm text-white/65">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Έχετε άλλη ερώτηση;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
