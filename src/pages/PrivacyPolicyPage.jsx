import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/common/Seo'

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space">
      <Seo
        title="Privacy Policy"
        description="Πολιτική Απορρήτου της Web Host Pro."
        path="/privacy-policy"
      />
      <div className="container-main">
        <div className="page-glow rounded-[32px] p-8 md:p-12">
          <Link
            to="/"
            className="back-btn mb-6 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200"
          >
            <ArrowLeft size={16} /> Αρχική
          </Link>

          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">Νομικό</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/45">
            Σύντομη επισκόπηση. Η πλήρης πολιτική απορρήτου διατίθεται στη σελίδα{' '}
            <Link to="/privacy" className="text-[#67E8F9] underline">Πολιτική Απορρήτου & Cookies</Link>.
          </p>

          <div className="mt-10 max-w-3xl space-y-6 text-white/70">
            <p>
              Σεβόμαστε την ιδιωτικότητά σας. Συλλέγουμε μόνο τα δεδομένα που χρειάζονται
              για να σας εξυπηρετήσουμε και δεν τα μοιραζόμαστε με τρίτους χωρίς τη συγκατάθεσή σας.
            </p>
            <p>
              Για ερωτήσεις σχετικά με τα δεδομένα σας, επικοινωνήστε μαζί μας στο{' '}
              <a href="mailto:alexandros21bs@gmail.com" className="text-[#67E8F9] underline">
                alexandros21bs@gmail.com
              </a>.
            </p>
          </div>

          <div className="mt-10">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
