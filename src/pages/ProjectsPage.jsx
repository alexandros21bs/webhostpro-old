import Seo from '../components/common/Seo'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import logAni from '../../log_ani.svg'
import arisImage from '../../ARIS.png'
import adaImage from '../../ADA.png'
import argImage from '../../ARG.png'
import litoImage from '../../LITO.png'
import timoniImage from '../../TIMONI.png'
import asthenImage from '../../ASTHEN.png'
import asthImage from '../../ASTH.png'
import screenshot18 from '../../Screenshot 2026-04-18 at 18.07.27.png'
import digitalImage from '../../DIGITAL.png'
import ven1Image from '../../VEN1.png'
import tt2Image from '../../tt2.png'
import nousImage from '../../NOUS.png'
import nnnnImage from '../../nnnn.png'

const projectPlaceholders = [
  {
    id: '04',
    title: 'Honeymoon Hotel Santorini',
    category: 'Hotel Showcase Project',
    text: 'Premium hotel παρουσίαση με έμφαση στα δωμάτια, τις παροχές και την εμπειρία φιλοξενίας, με καθαρή δομή, elegant αισθητική και conversion-first προσέγγιση.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Screenshot Placeholder',
    imageSrc: arisImage,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '05',
    title: 'Αδαμαντία | Ψυχολόγος | Χανιά',
    category: 'Psychologist Profile Project',
    text: 'Premium παρουσίαση ψυχολόγου με έμφαση στις υπηρεσίες, το επιστημονικό προφίλ, την ενσυναίσθηση και την αίσθηση εμπιστοσύνης, μέσα από καθαρή και ήρεμη ψηφιακή αισθητική.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: adaImage,
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '06',
    title: 'Εργαστήρι Ζυμαρικών Διακοπτό',
    category: 'eShop Handmade Pasta Project',
    text: 'Premium eShop για χειροποίητα ζυμαρικά με έμφαση στη γαστρονομική ταυτότητα, την καθαρή παρουσίαση προϊόντων, την εύκολη αγορά και μια ζεστή artisan αισθητική.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: argImage,
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '01',
    title: 'Τουριστικός Οδηγός Διακοπτού',
    category: 'Local Guide Project',
    text: 'Ψηφιακός οδηγός περιοχής με έμφαση στην τοπική ταυτότητα, την εμπειρία επισκέπτη, τα σημεία ενδιαφέροντος και μια πιο σύγχρονη αισθητική τουριστικής προβολής.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: '/images/ecosystem/discoverdiakopto-preview.jpg',
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '02',
    title: 'Θεματικό Project Οδοντωτός',
    category: 'Destination & Route Concept',
    text: 'Θεματική ψηφιακή παρουσίαση διαδρομής, εμπειρίας και πολιτιστικού ενδιαφέροντος με premium προσέγγιση, καθαρή δομή και πιο ατμοσφαιρικό χαρακτήρα προβολής.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Visual Preview',
    imageSrc: '/images/ecosystem/odontotos-preview.jpg',
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '03',
    title: 'Θεματικό Project Βουραικός',
    category: 'Nature & Experience Concept',
    text: 'Placeholder concept για παρουσίαση φυσικού τοπίου, διαδρομών, εμπειριών και σημείων ενδιαφέροντος με πιο immersive και σύγχρονη ψηφιακή αισθητική.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Visual Preview',
    imageSrc: '/images/ecosystem/vouraikos-preview.jpg',
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '07',
    title: 'Lito Apartments | Παλαιοχώρα Χανίων',
    category: 'Hotel & Apartments Project',
    text: 'Premium παρουσίαση καταλύματος για την Παλαιοχώρα Χανίων, με έμφαση στην ποιοτική διαμονή, το μοναδικό πλεονέκτημα της τοποθεσίας, τις σύγχρονες παροχές και την άμεση ευκολία κράτησης μέσα από μια καθαρή, καλαίσθητη τουριστική εμπειρία. Η σελίδα αναδεικνύει με ισορροπία την αίσθηση φιλοξενίας, τις στιγμές χαλάρωσης και τον χαρακτήρα του προορισμού, προσφέροντας στον επισκέπτη σαφή πληροφόρηση, εμπιστοσύνη και ισχυρό κίνητρο για άμεση επιλογή διαμονής.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Screenshot Placeholder',
    imageSrc: litoImage,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '08',
    title: 'Online Βιβλιοπωλείο Διακοπτό',
    category: 'eBooks, Audio & Self-Growth Platform',
    text: 'The Steering Wheel of Our Lives - Finally in Our Hands. Μια σύγχρονη online πλατφόρμα με ebooks, audio περιεχόμενο και επιλεγμένα άρθρα αυτοβελτίωσης, αυτοθεραπείας και αφύπνισης, σχεδιασμένη για όσους θέλουν να πάρουν ξανά το τιμόνι της ζωής τους στα χέρια τους. Το project σε καθοδηγεί να ακούσεις τον Ανώτερο Εαυτό σου, να συνδεθείς με την Ψυχή σου, το Σύμπαν, τη Μητέρα Φύση και τη Θεϊκή Ενέργεια μέσα από οργανωμένες κατηγορίες, ποιοτικό περιεχόμενο και καθαρή εμπειρία πλοήγησης. Με premium UX δομή, έξυπνη αναζήτηση και εύκολη πρόσβαση σε γνώση και έμπνευση, ο χρήστης ανακαλύπτει καθημερινά εργαλεία εσωτερικής ισορροπίας, πνευματικής εξέλιξης και ουσιαστικής προσωπικής μεταμόρφωσης.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: timoniImage,
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '13',
    title: 'Ψηφιακή Πλατφόρμα Περιφέρειας',
    category: 'Regional Growth & Visibility Platform',
    text: 'Η πλατφόρμα Digital Achaia σχεδιάστηκε για να ενισχύσει την ψηφιακή ταυτότητα της περιοχής, συνδέοντας επιχειρήσεις, εμπειρίες και τοπικές πρωτοβουλίες μέσα σε ένα ενιαίο και σύγχρονο οικοσύστημα προβολής. Με premium αισθητική, καθαρή πλοήγηση, σωστά δομημένο UX και στοχευμένη στρατηγική περιεχομένου, λειτουργεί ως δυναμικό digital hub ανάπτυξης και εξωστρέφειας για κατοίκους, επισκέπτες, επαγγελματίες και φορείς, αναδεικνύοντας τη συνολική αξία και προοπτική της Αχαΐας.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: digitalImage,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '14',
    title: 'Harmony Books | Πλατφόρμα Βιβλίων & Άρθρων',
    category: 'Books Marketplace & Editorial Content',
    text: 'Πλατφόρμα για πώληση βιβλίων από διαφορετικούς συγγραφείς, με οργανωμένες κατηγορίες, έξυπνη αναζήτηση και εύκολη εμπειρία αγοράς. Παράλληλα, ενσωματώνει αρθρογραφία και θεματικές ενότητες γύρω από λογοτεχνία, κουλτούρα και κοινωνία, με ξεκάθαρη κατεύθυνση περιεχομένου εκτός πολιτικής θεματολογίας. Ιδιαίτερη έμφαση δίνεται σε βιβλία για αυτοθεραπεία, σύνδεση με τη φύση, πνευματική αφύπνιση και οικολογία, δημιουργώντας μια ουσιαστική βιβλιοθήκη προσωπικής εξέλιξης και οικολογικής συνείδησης.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: tt2Image,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '15',
    title: 'Art Addicts | Portfolio & Community Platform',
    category: 'Creative Portfolio, Media & Psychology Hub',
    text: 'Το Art Addicts είναι μια ανοιχτή, σύγχρονη πλατφόρμα portfolio και περιεχομένου αφιερωμένη στη ζωγραφική, τη μουσική, την ποίηση και συνολικά σε όλες τις μορφές τέχνης που καλλιεργούν έκφραση και σύνδεση. Το project συνδυάζει δημιουργικά έργα, επιλεγμένη αρθρογραφία, θεματικές ψυχολογίας και πολιτιστικά insights, προσφέροντας έναν ζωντανό ψηφιακό χώρο όπου το κοινό μπορεί να ανακαλύπτει ιδέες, να έρχεται σε επαφή με δημιουργούς και να συμμετέχει ενεργά σε μια κοινότητα έμπνευσης. Με καθαρή δομή, φιλικό UX και ατμοσφαιρική αισθητική, η πλατφόρμα λειτουργεί ως σημείο συνάντησης τέχνης, σκέψης και ανθρώπινης έκφρασης.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: '',
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '12',
    title: 'Venthus | Art & Event Management',
    category: 'Event Management & Branding',
    text: 'Premium παρουσίαση εταιρείας διοργάνωσης εκδηλώσεων με έμφαση σε artistic κατεύθυνση, management υπηρεσίες, portfolio εκδηλώσεων, παροχές ζωγραφικής, δημιουργία βιτρίνας και στρατηγική προώθηση με ισχυρή brand ταυτότητα. Η Venthus είναι ένα σύγχρονο brand με επίκεντρο την οργάνωση εκδηλώσεων και τις δημιουργικές προωθητικές υπηρεσίες, συνδυάζοντας αισθητική, επαγγελματισμό και ολοκληρωμένη εμπειρία επικοινωνίας. Το project σχεδιάστηκε με στόχο να αποτυπώνει τον πολυδιάστατο χαρακτήρα της επιχείρησης, προβάλλοντας με καθαρή δομή τις υπηρεσίες της, την καλλιτεχνική της ταυτότητα και τη σύγχρονη ψηφιακή της παρουσία.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: screenshot18,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '10',
    title: 'Web Host Pro | Αιγιαλεία',
    category: 'Web Agency Showcase',
    text: 'Η Web Host Pro στην Αιγιαλεία παρουσιάζει ένα σύγχρονο και επαγγελματικό πλαίσιο ψηφιακών υπηρεσιών, με έμφαση στην κατασκευή ιστοσελίδων, το web hosting, το SEO και το digital marketing. Με στρατηγική προσέγγιση, καθαρή αισθητική και τοπική κατεύθυνση, υποστηρίζει επιχειρήσεις που θέλουν να αναβαθμίσουν την online παρουσία τους και να αναπτυχθούν ουσιαστικά στο ψηφιακό περιβάλλον.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: ven1Image,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '11',
    title: 'Ασθενοφόρα 24/7 | Ρόδος - Λήμνος - Πειραιάς - Αθήνα',
    category: 'Medical Emergency Service Page',
    text: 'Σελίδα υπηρεσίας ασθενοφόρων 24/7 για Ρόδο και Λήμνο, με σαφή δομή επικοινωνίας, ταχεία πρόσβαση σε αριθμούς ανάγκης και αξιόπιστη παρουσίαση έκτακτης ιατρικής μεταφοράς.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: asthImage,
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '09',
    title: 'Rebuild | Διακομιδή Ασθενών Αθήνα - Πάτρα',
    category: 'Medical Transport Service Page',
    text: 'Σελίδα υπηρεσίας για διακομιδή ασθενών με route focus Αθήνα - Πάτρα, σαφή δομή πληροφορίας, αξιοπιστία επικοινωνίας και premium παρουσίαση κρίσιμων υπηρεσιών.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: asthenImage,
    iframeSrc: '',
    isFeatured: false,
  },
  {
    id: '16',
    title: 'Noutelos | UI/UX & Content | Offcial Partner web Host Pro',
    category: 'UI/UX Design & Content Creation',
    text: 'Ο Noutelos αποτελεί σταθερό, βασικό και ιδιαίτερα αξιόπιστο συνεργάτη της Web Host Pro, με ισχυρή κατεύθυνση στο UI/UX design και στη δημιουργία περιεχομένου. Το project αναδεικνύει τη σχεδιαστική του προσέγγιση, την καθαρή εμπειρία χρήστη και την ικανότητά του να μετατρέπει ιδέες σε ουσιαστικό digital περιεχόμενο με συνέπεια, αισθητική και στρατηγική. Μέσα από τη συνεργασία του με τη Web Host Pro, συμβάλλει ενεργά στη διαμόρφωση σύγχρονων ψηφιακών παρουσιών που συνδυάζουν λειτουργικότητα, ταυτότητα και επαγγελματική ποιότητα.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: nousImage,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '17',
    title: 'Fuature Widget 365 Orthodoxy',
    category: 'Orthodox Spirituality Digital App',
    text: '365 Orthodoxy. Ένα εξελισσόμενο ψηφιακό project με επίκεντρο την καθημερινή βιβλική έμπνευση και τις υπενθυμίσεις εορτολογίου. Με μινιμαλιστική προσέγγιση, εκλεπτυσμένα glass-style visuals και καθαρή, intuitive εμπειρία χρήστη, σχεδιάζεται ώστε να ενώνει την ορθόδοξη πνευματικότητα με μια σύγχρονη ψηφιακή αισθητική.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: 'Project Screenshot',
    imageSrc: nnnnImage,
    iframeSrc: '',
    isFeatured: true,
  },
  {
    id: '18',
    title: 'Coming Soon',
    category: 'New Project Placeholder',
    text: 'Placeholder για νέο project. Το περιεχόμενο θα προστεθεί σύντομα.',
    cta: 'Δες το έργο',
    previewType: 'image',
    previewLabel: '',
    imageSrc: '',
    iframeSrc: '',
    isFeatured: false,
  },
]

export default function ProjectsPage() {
  const [expandedCards, setExpandedCards] = useState({})
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
  }

  const toggleCardText = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const maxTextLength = 200

  return (
    <section className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-6 left-1/3 h-64 w-64 rounded-full bg-cyan-200/8 blur-3xl" />
      <Seo
        title="Portfolio & Έργα | Web Host Pro"
        description="Δείτε selected projects Web Host Pro: εταιρικά websites, eShop, destination brands και Digital Achaia initiatives. Πραγματικά αποτελέσματα."
        path="/projects"
      />

      <div className="container-main">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <Link to="/" className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-amber-300/80 transition hover:text-amber-200">
              <ArrowLeft size={16} /> Αρχική
            </Link>
            <p className="text-sm uppercase tracking-[0.18em] text-amber-300">
              Έργα
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#67E8F9] md:text-6xl">
              Επιλεγμένα έργα, concepts και ψηφιακές κατευθύνσεις
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Μια πρώτη curated επιλογή από projects, showcase concepts και δημιουργικές κατευθύνσεις που αποτυπώνουν τη φιλοσοφία, την αισθητική και τη στρατηγική προσέγγιση της Web Host Pro. Η σελίδα αυτή λειτουργεί ως premium portfolio preview για guides, destination concepts και ψηφιακές παρουσίες που θα εμπλουτιστούν σταδιακά με πραγματικά previews και τελικό υλικό.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-label">Websites & eCommerce</span>
              <span className="trust-label">Branding & Strategy</span>
              <span className="trust-label">Digital Achaia Initiative</span>
            </div>
            <div className="cta-row mt-7">
              <Link to="/contact" className="premium-btn btn btn-primary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,168,79,0.28)]">
                Συζητήστε το project σας
              </Link>
              <Link to="/services" className="premium-btn btn btn-secondary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(103,232,249,0.24)]">
                Δείτε υπηρεσίες
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center">
            <motion.div
              className="pointer-events-none absolute h-[120%] w-[120%] rounded-full bg-cyan-300/10 blur-3xl"
              animate={{ opacity: [0.35, 0.62, 0.35], scale: [0.96, 1.05, 0.96] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="pointer-events-none absolute h-[108%] w-[108%] rounded-full bg-amber-300/9 blur-3xl"
              animate={{ opacity: [0.26, 0.52, 0.26], scale: [0.94, 1.08, 0.94] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[92%] w-[92%] rounded-full border border-amber-300/26"
              animate={{ rotate: 360 }}
              transition={{ duration: 9.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[106%] w-[106%] rounded-full border border-cyan-200/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[118%] w-[118%] rounded-full border border-white/8"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src={logAni}
              alt="Web Host Pro animated emblem"
              className="mx-auto w-full max-w-[560px]"
              animate={{ y: [0, -12, 0], scale: [1, 1.035, 1], rotateZ: [0, 0.8, 0, -0.8, 0] }}
              transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
        >
          {projectPlaceholders.map((entry, index) => (
            (() => {
              const isLongText = entry.text.length > maxTextLength
              const isExpanded = Boolean(expandedCards[entry.id])
              const displayText = isLongText && !isExpanded
                ? `${entry.text.slice(0, maxTextLength).trimEnd()}...`
                : entry.text

              return (
            <motion.article
              key={entry.id}
              className={`glass service-card group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[26px] border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(6,14,26,0.44)] ${entry.isFeatured ? 'border-amber-300/24 bg-white/[0.05] hover:border-amber-200/46' : 'border-white/10 bg-white/[0.04] hover:border-cyan-200/28'}`}
              variants={cardVariants}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-amber-300/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute left-4 top-4 z-20 flex h-3 w-3 items-center justify-center" aria-hidden="true">
                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              </div>
              <div className="absolute right-4 top-4 z-20 rounded-full border border-cyan-200/30 bg-[#0b1525]/75 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-cyan-100/90">
                #{String(index + 1).padStart(2, '0')}
              </div>

              {entry.previewType === 'iframe' ? (
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-cyan-200/18 bg-gradient-to-br from-cyan-300/12 via-white/5 to-amber-300/8">
                  <div className="absolute inset-3 rounded-xl border border-cyan-200/20 bg-[#0b1525]/75" />
                </div>
              ) : (
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-amber-300/12 via-white/5 to-cyan-300/10">
                  {entry.imageSrc ? (
                    <img
                      src={entry.imageSrc}
                      alt={`${entry.title} preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="absolute inset-0 opacity-40 [background:linear-gradient(140deg,rgba(255,255,255,0.08),transparent_60%)]" />
                  <div className="absolute inset-2 rounded-xl border border-white/10 bg-white/[0.02] shadow-[inset_0_0_26px_rgba(103,232,249,0.08)]" />
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/90">
                {entry.category}
              </p>
              <h3 className="mt-3 text-[1.45rem] font-semibold leading-8 text-[#67E8F9]">
                {entry.title}
              </h3>
              <p className="mt-4 leading-7 text-white/65">
                {displayText}
              </p>
              {isLongText ? (
                <button
                  type="button"
                  onClick={() => toggleCardText(entry.id)}
                  className="mt-2 self-start text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/90 transition hover:text-amber-100"
                >
                  {isExpanded ? 'Λιγότερα' : 'Περισσότερα'}
                </button>
              ) : null}
              <span className="inline-cta mt-auto ml-auto pt-6 text-right text-[#67E8F9] transition group-hover:text-amber-100">
                {entry.cta} <ArrowRight size={15} />
              </span>
            </motion.article>
              )
            })()
          ))}
        </motion.div>

        <section className="section-end-block glass-strong page-glow relative mt-14 overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.035] p-6 md:p-8 lg:p-10" aria-labelledby="projects-newsletter-title">
          <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-300/10 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">Newsletter</p>
              <h2 id="projects-newsletter-title" className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-[#67E8F9] md:text-3xl">
                Μείνετε ενημερωμένοι για νέα έργα και digital concepts
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                Εγγραφείτε για να λαμβάνετε νέα γύρω από projects, δημιουργικές κατευθύνσεις, portfolio updates και σύγχρονες ψηφιακές ιδέες από τη Web Host Pro.
              </p>
            </div>

            <form
              className="rounded-2xl border border-cyan-200/20 bg-[#0b1525]/70 p-4 md:p-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="projects-newsletter-email" className="sr-only">
                Το email σας
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="projects-newsletter-email"
                  type="email"
                  placeholder="Το email σας"
                  className="h-12 flex-1 rounded-xl border border-white/14 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-cyan-200/45 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.12)]"
                />
                <button
                  type="submit"
                  className="h-12 rounded-xl border border-amber-200/60 bg-gradient-to-r from-amber-300 to-amber-400 px-6 text-sm font-semibold text-[#132132] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(212,168,79,0.3)]"
                >
                  Εγγραφή
                </button>
              </div>
            </form>
          </div>
          <p className="relative mt-4 text-sm leading-6 text-white/55 md:mt-5">
            Updates για νέα έργα, creative concepts και portfolio previews από το οικοσύστημα της Web Host Pro.
          </p>

          <div className="relative mt-7 border-t border-white/10 pt-7 md:mt-8 md:pt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Portfolio Flow</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            Θέλεις το επόμενο project να παρουσιαστεί σωστά και με premium ψηφιακή εικόνα;
            </h2>
            <p className="mt-3 max-w-3xl text-white/65">
              Η Web Host Pro δημιουργεί projects, παρουσιάσεις και digital concepts με καθαρή αισθητική, σωστή δομή και επαγγελματική στρατηγική παρουσίασης.
            </p>
            <div className="cta-row mt-6">
              <Link to="/contact" className="premium-btn btn btn-primary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,168,79,0.28)]">
                Ζήτα προσφορά
              </Link>
              <Link to="/contact" className="premium-btn btn btn-secondary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(103,232,249,0.24)]">
                Πες μας την ιδέα σου
              </Link>
              <Link to="/contact" className="premium-btn btn btn-secondary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(103,232,249,0.24)]">
                Ζήτα μας προτζεκτ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
