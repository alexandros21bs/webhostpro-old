import "../styles/home.css";

const services = [
  {
    title: "Websites & eShop",
    text: "Premium websites, εταιρικά sites και eShop με σύγχρονο design, mobile-first εμπειρία και σωστή δομή ανάπτυξης.",
  },
  {
    title: "Hosting Infrastructure",
    text: "Hosting, VPS, domains, SSL, monitoring, backups και Cloud υποδομές για επαγγελματική σταθερότητα.",
  },
  {
    title: "AI Solutions",
    text: "AI assistants, smart lead systems, AI chatbots και automation εργαλεία για επιχειρήσεις.",
  },
  {
    title: "Brand Strategy",
    text: "Brand identity, visual direction, social media content και ολοκληρωμένη ψηφιακή εικόνα.",
  },
];

const projects = [
  {
    title: "Tourism Platforms",
    text: "Discover Greece projects, destination portals και premium ταξιδιωτικές εμπειρίες.",
  },
  {
    title: "Client Portals",
    text: "Dashboards, SaaS platforms και subscription systems για επιχειρήσεις.",
  },
  {
    title: "Digital Achaia",
    text: "Flagship projects ανάδειξης, πολιτισμού και τοπικής ψηφιακής ανάπτυξης.",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">
              WEB HOST PRO AIGIALEIA
            </span>

            <h1>
              Websites, digital strategy και
              σύγχρονες λύσεις για σοβαρή online παρουσία.
            </h1>

            <p>
              Κατασκευάζουμε websites, eShop, hosting υποδομές,
              AI systems και premium digital εμπειρίες για
              επιχειρήσεις, brands και projects.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Δείτε υπηρεσίες
              </button>

              <button className="secondary-btn">
                Ξεκινήστε project
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="glass-card featured-card">
              <span className="card-label">
                DIGITAL SOLUTIONS
              </span>

              <h3>
                Web Development, Hosting,
                Brand Strategy
              </h3>

              <p>
                Σύγχρονα websites με premium αισθητική,
                σταθερή υποδομή και επαγγελματική
                online παρουσία.
              </p>

              <div className="mini-grid">
                <div className="mini-card">
                  <span>Premium Experience</span>
                  <strong>Καθαρό interface</strong>
                </div>

                <div className="mini-card">
                  <span>Digital Achaia</span>
                  <strong>Local vision</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-title">
          <span>SERVICES</span>
          <h2>Όλες οι υπηρεσίες σε μία υποδομή.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <div className="section-title">
          <span>PROJECTS</span>
          <h2>Platforms, brands & flagship projects.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="glass-card cta-card">
          <h2>
            Χτίζουμε σοβαρή ψηφιακή παρουσία
            για επιχειρήσεις και projects.
          </h2>

          <p>
            Websites, AI systems, hosting υποδομές,
            branding και premium digital εμπειρίες.
          </p>

          <button className="primary-btn">
            Συζήτηση για project
          </button>
        </div>
      </section>
    </div>
  );
}