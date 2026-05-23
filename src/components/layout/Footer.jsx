import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function Footer() {
  const services = [
    'Websites & eShop',
    'AI Chatbots',
    'Hosting & Cloud',
    'SaaS Platforms',
    'Marketing & SEO',
    'Branding & Design',
  ]

  const digitalAchaia = [
    'Odontotos',
    'Vouraikos',
    'Discover Diakopto',
    'Tourism Guides',
    'Cultural Projects',
    'Local Ecosystem',
  ]

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050914]/70 backdrop-blur-xl">
      <div className="container-main py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
              Web Host Pro
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9]">
              Technology, AI & Cloud Provider
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Websites, eShop, AI systems, hosting infrastructure,
              SaaS platforms, digital marketing και branding για σύγχρονες επιχειρήσεις.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/45 bg-amber-300/14 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/28"
            >
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-white/70">
              Services
            </h3>

            <div className="mt-4 grid gap-2">
              {services.map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="text-sm text-white/55 transition hover:text-[#67E8F9]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-white/70">
              Digital Achaia
            </h3>

            <div className="mt-4 grid gap-2">
              {digitalAchaia.map((item) => (
                <Link
                  key={item}
                  to="/digital-achaia"
                  className="text-sm text-white/55 transition hover:text-[#67E8F9]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-white/70">
              Contact
            </h3>

            <div className="mt-4 grid gap-3">
              <a
                href="mailto:info@webhostpro.gr"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <Mail size={16} />
                info@webhostpro.gr
              </a>

              <a
                href="tel:+306955236006"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <Phone size={16} />
                6955236006
              </a>

              <a
                href="https://wa.me/306955236006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© 2026 Web Host Pro Aigialeia. All rights reserved. Founded by Alexandros Kyvrikoseos</p>
            <p>@alexandroskyv · #alexandroskyv</p>
          </div>

          <p>
            Web Host Pro × Digital Achaia Ecosystem
          </p>
        </div>
      </div>
    </footer>
  )
}