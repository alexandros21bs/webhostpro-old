import { Link } from 'react-router-dom'
import {
  Mail,
  ArrowRight,
  Globe,
  MapPin,
  User,
} from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="shrink-0 text-[#67E8F9]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.5 14.4l-2-1c-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.3-.6.1-1.6-.8-2.7-1.7-3.5-3-.3-.4 0-.5.2-.7l.5-.6c.2-.2.1-.4 0-.6L9.6 7.3c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6.1-.9.4C7 8 6.6 8.7 6.6 10c0 1.3 1 2.6 1.1 2.7.1.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.8.5 0 1.7-.7 1.9-1.4.3-.6.3-1.2.2-1.3-.1-.2-.3-.3-.5-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.6 1 1-3.5-.3-.4C2.5 15.6 1.9 13.8 1.9 12 1.9 6.4 6.4 1.9 12 1.9S22.1 6.4 22.1 12 17.6 21.8 12 21.8zm0-21.8C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
    </svg>
  )
}

function ViberIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="shrink-0 text-[#67E8F9]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.4 0C9.5.1 5.6.6 3.4 2.7 1.6 4.5.9 7.2.8 10.5c0 3.3.6 5.3 2.6 7.1v3.1s0 1.2.8 1.5c.9.3 1.4-.6 1.4-.6l1.6-1.8c.2-.2.4-.2.6-.1 1.7.5 3.6.7 5.3.7h.4c.3-3.8 2.5-5.5 4-6.2.5-.2.7-.3.7-.3-.1-1.5-.3-4.4-1.3-6.2C15.6 4.5 12.5.2 11.4 0zm1.5 3.5c2.2.3 4.2 1.4 5.5 3.2.9 1.3 1.3 2.7 1.4 4.3 0 .3-.2.5-.5.5-.3 0-.5-.2-.5-.5-.1-1.3-.5-2.5-1.2-3.6-1.1-1.5-2.8-2.5-4.6-2.7-.3 0-.5-.3-.5-.6 0-.3.2-.6.4-.6zm.2 2c1.4.2 2.6.8 3.5 1.9.6.8 1 1.7 1.1 2.7 0 .3-.2.5-.5.6-.3 0-.5-.2-.6-.5-.1-.8-.4-1.5-.8-2.1-.7-1-1.7-1.4-2.8-1.6-.3-.1-.5-.3-.4-.6.1-.3.3-.5.5-.4zm.3 2c.7.1 1.3.5 1.7 1 .3.4.5.8.5 1.3 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-.3-.1-.6-.3-.8-.3-.4-.7-.6-1.1-.6-.3 0-.5-.3-.5-.5.1-.3.4-.5.7-.4zM8.7 6.4c.3 0 .6.1.8.4l1.1 1.4c.2.3.2.7 0 1l-.5.7c-.1.2-.1.4 0 .5.5 1 1.2 1.8 2 2.5.2.2.4.2.6.1l.7-.5c.3-.2.7-.2 1 0l1.4 1c.5.3.5 1 .1 1.4-.5.6-1.1 1-1.9 1.1-.9.1-1.9-.2-2.8-.7-1.6-1-3-2.4-3.9-4.1-.5-1-.8-2-.6-2.9.1-.7.5-1.3 1.1-1.7.2-.1.5-.2.7-.2z" />
    </svg>
  )
}

export default function Footer() {
  const services = [
    'Websites & eShop',
    'AI Systems',
    'AI Destination Platforms',
    'Hosting & Cloud',
    'SaaS Platforms',
    'Digital Growth',
    'Brand Identity',
  ]

  const digitalAchaia = [
    'Odontotos.gr',
    'Vouraikos.gr',
    'my diakopto.gr',
    'AskAchaia.gr',
    'AskPatra.gr',
    'Local Marketplace',
    'Regional Ecosystem',
  ]

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050914]/70 backdrop-blur-xl">
      <div className="container-main py-12">
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
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

          <div className="md:order-1">
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#67E8F9]">
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

          <div className="md:order-2">
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#67E8F9]">
              Digital Achaia
            </h3>

            <div className="mt-4 grid gap-2">
              {digitalAchaia.map((item) => (
                <a
                  key={item}
                  href="https://digitalachaia.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 transition hover:text-[#67E8F9]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:order-4">
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#67E8F9]">
              Contact Us
            </h3>

            <div className="mt-4 grid gap-3">
              <a
                href="mailto:info@webhostpro.gr"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <Mail size={16} className="shrink-0 text-[#67E8F9]" />
                info@webhostpro.gr
              </a>

              <a
                href="https://webhostpro.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <Globe size={16} className="shrink-0 text-[#67E8F9]" />
                webhostpro.gr
              </a>

              <a
                href="https://wa.me/306955236006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <WhatsAppIcon />
                6955236006
              </a>

              <a
                href="viber://chat?number=%2B306984138488"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <ViberIcon />
                6984138488
              </a>

              <p className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#67E8F9]" />
                Diakopto, Aigialeia 25003
              </p>

              <p className="flex items-start gap-3 text-sm text-white/60">
                <User size={16} className="mt-0.5 shrink-0 text-[#67E8F9]" />
                Alexandros Kyvrikoseos
              </p>

              <a
                href="mailto:alexandros21bs@gmail.com"
                className="flex items-start gap-3 text-sm text-white/60 transition hover:text-[#67E8F9]"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-[#67E8F9]" />
                alexandros21bs@gmail.com
              </a>
            </div>
          </div>

          <div className="md:order-3">
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#67E8F9]">
              Useful Links
            </h3>

            <div className="mt-4 grid gap-2">
              <a
                href="/privacy-policy"
                className="text-sm text-white/55 transition hover:text-[#67E8F9]"
              >
                Privacy Policy
              </a>
              <a
                href="/faqs"
                className="text-sm text-white/55 transition hover:text-[#67E8F9]"
              >
                FAQs
              </a>
              <a
                href="/news"
                className="text-sm text-white/55 transition hover:text-[#67E8F9]"
              >
                News & Announcements
              </a>
              <a
                href="https://digitalachaia.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/55 transition hover:text-[#67E8F9]"
              >
                Ecosystem
              </a>
              <a
                href="/ecosystem"
                className="text-sm text-white/55 transition hover:text-[#67E8F9]"
              >
                About Ecosystem
              </a>
              <a
                href="/projects"
                className="text-sm text-white/55 transition hover:text-[#67E8F9]"
              >
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© 2025-2026 Web Host Pro Aigialeia. All rights reserved. Founder/Ceo: Alexandros Kyvrikoseos</p>
            <p className="flex flex-wrap items-center gap-1">
              <span>@alexandroskyv</span>
              <span>·</span>
              <span>#alexandroskyv</span>
            </p>
          </div>

          <div className="space-y-1 md:text-right">
            <p>Web Host Pro × Digital Achaia</p>
            <p>Technology, AI & Digital Ecosystems</p>
          </div>
        </div>
      </div>
    </footer>
  )
}