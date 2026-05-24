import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe, Phone, MessageCircle, Send, ArrowRight, ArrowLeft } from 'lucide-react'
import Seo from '../components/common/Seo'

const initialState = {
  name: '',
  email: '',
  projectType: '',
  subject: '',
  timeline: '',
  message: '',
  // honeypot — must stay empty
  website: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formLoadedAt = useRef(0)

  useEffect(() => {
    formLoadedAt.current = Date.now()
  }, [])

  const validate = (data) => {
    const nextErrors = {}

    if (data.name.trim().length < 2) {
      nextErrors.name = 'Συμπλήρωσε ένα σωστό όνομα.'
    }
    if (!emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Συμπλήρωσε έγκυρο email.'
    }
    if (data.projectType.trim().length < 2) {
      nextErrors.projectType = 'Επίλεξε τύπο project.'
    }
    if (data.subject.trim().length < 3) {
      nextErrors.subject = 'Το θέμα χρειάζεται τουλάχιστον 3 χαρακτήρες.'
    }
    if (data.message.trim().length < 20) {
      nextErrors.message = 'Η περιγραφή project πρέπει να έχει τουλάχιστον 20 χαρακτήρες.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Honeypot trap: if filled, silently "succeed" without doing anything.
    if (formData.website.trim() !== '') {
      setStatus({
        type: 'success',
        message:
          'Ευχαριστούμε για το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας εντός 1 εργάσιμης ημέρας με ξεκάθαρα επόμενα βήματα.',
      })
      return
    }

    // Time-trap: bots usually submit < 2s after load.
    if (Date.now() - formLoadedAt.current < 2000) {
      setStatus({ type: 'error', message: 'Παρακαλώ δοκίμασε ξανά σε λίγο.' })
      return
    }

    const validationErrors = validate(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: 'error', message: 'Έλεγξε τα πεδία και δοκίμασε ξανά.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.ok) {
        setStatus({
          type: 'success',
          message:
            'Ευχαριστούμε για το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας εντός 1 εργάσιμης ημέρας με ξεκάθαρα επόμενα βήματα.',
        })
        setFormData(initialState)
      } else {
        setStatus({ type: 'error', message: data.error || 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Αποτυχία σύνδεσης. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <section className="section-space">
      <Seo
        title="Επικοινωνία — Ξεκινήστε το Project σας"
        description="Στείλτε το brief σας στη Web Host Pro για website, eShop, redesign ή hosting. Πρώτη απάντηση εντός 1 εργάσιμης ημέρας."
        path="/contact"
      />

      <div className="container-main">
        <div className="max-w-3xl">
          <Link to="/" className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200">
            <ArrowLeft size={16} /> Αρχική
          </Link>
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">
            Επικοινωνία
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Συζητήστε μαζί μας το επόμενο digital project σας
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Για website, eShop, redesign, hosting/support ή Digital Achaia
            regional project, στείλτε μας το brief σας και θα σας απαντήσουμε
            με ξεκάθαρα επόμενα βήματα και προτεινόμενη κατεύθυνση.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="trust-label">Σύγχρονες ψηφιακές λύσεις</span>
            <span className="trust-label">Στρατηγική παρουσίαση</span>
            <span className="trust-label">Μοντέρνα online εικόνα</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="glass-strong rounded-[32px] p-8">
            <h2 className="text-2xl font-semibold text-[#67E8F9]">Στείλτε αίτημα συνεργασίας</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Συμπληρώστε τα βασικά στοιχεία και το πλαίσιο του project για πιο
              γρήγορη εκτίμηση και στοχευμένη πρώτη απάντηση.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              Τι μπορείτε να μας στείλετε:
              <br />
              στόχο project, υπηρεσία που χρειάζεστε, βασικές ανάγκες και επιθυμητό timeline.
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot field — hidden from users, visible to bots */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
              >
                <label htmlFor="website">Μη συμπληρώσετε αυτό το πεδίο</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/80">
                  Ονοματεπώνυμο
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="π.χ. Μαρία Παπαδοπούλου"
                  value={formData.name}
                  onChange={handleChange}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35"
                />
              </div>
              {errors.name && <p className="text-sm text-rose-200">{errors.name}</p>}

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/80">
                  Email επικοινωνίας
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="π.χ. hello@company.gr"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35"
                />
              </div>
              {errors.email && <p className="text-sm text-rose-200">{errors.email}</p>}

              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm text-white/80">
                  Τύπος project
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                >
                  <option value="" className="bg-slate-900 text-white">Επιλέξτε project</option>
                  <option value="website" className="bg-slate-900 text-white">Website project</option>
                  <option value="eshop" className="bg-slate-900 text-white">eShop</option>
                  <option value="redesign" className="bg-slate-900 text-white">Redesign</option>
                  <option value="hosting-support" className="bg-slate-900 text-white">Hosting / Support</option>
                  <option value="digital-achaia" className="bg-slate-900 text-white">Digital Achaia / Regional project</option>
                </select>
              </div>
              {errors.projectType && <p className="text-sm text-rose-200">{errors.projectType}</p>}

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-white/80">
                  Θέμα
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="π.χ. Νέα ιστοσελίδα για τουριστικό brand"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35"
                />
              </div>
              {errors.subject && <p className="text-sm text-rose-200">{errors.subject}</p>}

              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm text-white/80">
                  Επιθυμητό timeline (προαιρετικό)
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  placeholder="π.χ. launch σε 6-8 εβδομάδες"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/80">
                  Σύντομο brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Περιγράψτε στόχο, υπηρεσίες που χρειάζεστε και βασικές προτεραιότητες."
                  value={formData.message}
                  onChange={handleChange}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35"
                />
                <p className="mt-2 text-xs text-white/45">
                  Όσο πιο σαφές είναι το brief, τόσο πιο στοχευμένη θα είναι η αρχική μας πρόταση.
                </p>
              </div>
              {errors.message && <p className="text-sm text-rose-200">{errors.message}</p>}

              {status.message && (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100'
                      : 'border-rose-300/30 bg-rose-300/10 text-rose-100'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="premium-btn btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Αποστολή…' : 'Ξεκινήστε συνεργασία'}
              </button>
            </form>
          </div>

          <div className="glass-strong rounded-[32px] p-8">
            <h2 className="text-2xl font-semibold text-[#67E8F9]">Πλαίσιο συνεργασίας</h2>
            <p className="mt-3 leading-7 text-white/65">
              Η Web Host Pro αναλαμβάνει projects που χρειάζονται καθαρό strategic plan,
              σοβαρή υλοποίηση και μακροπρόθεσμη υποστήριξη.
            </p>

            <div className="mt-4 rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
              Χρόνος πρώτης απάντησης: συνήθως εντός 1 εργάσιμης ημέρας.
            </div>

            <div className="mt-6 space-y-3 text-white/75">
              {[
                'Website project για υπηρεσίες ή εταιρική παρουσία',
                'eShop με έμφαση σε conversion και σωστή δομή περιεχομένου',
                'Redesign υπάρχοντος site με premium κατεύθυνση',
                'Hosting, maintenance και τεχνική υποστήριξη',
                'Digital Achaia / regional identity και destination initiatives',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Web Host Pro Αιγιαλεία</p>
                <div className="mt-2 flex flex-col gap-2">
                  <span className="icon-text"><Globe size={13} className="shrink-0 text-sky-300" />webhostpro.gr</span>
                  <a href="mailto:info@webhostpro.gr" className="icon-text"><Mail size={13} className="shrink-0 text-sky-300" />info@webhostpro.gr</a>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Digital Achaia</p>
                <div className="mt-2 flex flex-col gap-2">
                  <span className="icon-text"><Globe size={13} className="shrink-0 text-sky-300" />digitalachaia.gr</span>
                  <a href="mailto:info@digitalachaia.gr" className="icon-text"><Mail size={13} className="shrink-0 text-sky-300" />info@digitalachaia.gr</a>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Τηλέφωνα</p>
                <div className="mt-2 flex flex-col gap-2">
                  <a href="tel:+306955236006" className="icon-text"><Phone size={13} className="shrink-0 text-amber-400" />+30 6955236006</a>
                  <a href="tel:+306984138488" className="icon-text"><Phone size={13} className="shrink-0 text-amber-400" />+30 6984138488</a>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">WhatsApp</p>
                <a href="https://wa.me/306955236006" target="_blank" rel="noopener noreferrer" className="icon-text mt-2"><MessageCircle size={13} className="shrink-0 text-emerald-300" />+30 6955236006</a>
              </div>

              <div className="rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Viber</p>
                <a href="viber://chat?number=%2B306984138488" className="icon-text mt-2"><Send size={13} className="shrink-0 text-violet-300" />+30 6984138488</a>
              </div>

              <div className="rounded-2xl border border-cyan-200/18 bg-cyan-200/6 p-4 text-sm text-cyan-100/85">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Τοποθεσία</p>
                <span className="icon-text mt-2"><MapPin size={13} className="shrink-0 text-amber-400" />Διακοπτό, Αιγιαλείας, Αχαΐα, 25003, Πελοπόννησος</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-end-block">
          <h2 className="text-2xl font-semibold text-[#67E8F9] md:text-3xl">Θέλετε πιο άμεσο επόμενο βήμα;</h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Αν δεν είστε ακόμη έτοιμοι για πλήρες brief, δείτε πρώτα τις υπηρεσίες ή το portfolio
            και επιστρέψτε με πιο συγκεκριμένη κατεύθυνση.
          </p>
          <div className="cta-row mt-6">
            <a href="mailto:info@webhostpro.gr" className="premium-btn btn btn-primary">
              Μιλήστε μαζί μας
            </a>
            <a
              href="https://digitalachaia.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn btn btn-secondary"
            >
              Ανακαλύψτε την κατεύθυνση
            </a>
            <Link to="/services" className="btn-inline">
              Δείτε τις υπηρεσίες
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
