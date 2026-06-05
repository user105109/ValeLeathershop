import { Link } from "react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

interface FooterProps {
  lang: "it" | "en";
}

export function Footer({ lang }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const t = {
    tagline: lang === "it" ? "Moda artigianale. Anima fiorentina." : "Artisan fashion. Florentine soul.",
    nav: lang === "it" ? "Navigazione" : "Navigation",
    service: lang === "it" ? "Servizio" : "Service",
    contact: lang === "it" ? "Contatti" : "Contact",
    newsletter: lang === "it" ? "Newsletter" : "Newsletter",
    newsletterSub: lang === "it" ? "Novità, eventi e storie dal nostro atelier." : "New arrivals, events & stories from our atelier.",
    emailPlaceholder: lang === "it" ? "La tua email" : "Your email",
    subscribe: lang === "it" ? "Iscriviti" : "Subscribe",
    subscribed: lang === "it" ? "Grazie!" : "Thank you!",
    privacy: lang === "it" ? "Privacy Policy" : "Privacy Policy",
    cookies: lang === "it" ? "Cookie Policy" : "Cookie Policy",
    rights: lang === "it" ? "Tutti i diritti riservati." : "All rights reserved.",
  };

  const navLinks = [
    { label: lang === "it" ? "Home" : "Home", path: "/" },
    { label: lang === "it" ? "Collezione" : "Collection", path: "/collezione" },
    { label: lang === "it" ? "Chi Siamo" : "About Us", path: "/chi-siamo" },
    { label: lang === "it" ? "Lookbook" : "Lookbook", path: "/lookbook" },
    { label: lang === "it" ? "Novità" : "New Arrivals", path: "/collezione?filter=new" },
    { label: lang === "it" ? "Contatti" : "Contact", path: "/contatti" },
  ];

  const serviceLinks = [
    { label: lang === "it" ? "Ordini su misura" : "Custom Orders" },
    { label: lang === "it" ? "Spedizioni" : "Shipping" },
    { label: lang === "it" ? "Resi" : "Returns" },
    { label: lang === "it" ? "Guida alle taglie" : "Size Guide" },
  ];

  return (
    <footer style={{ background: "var(--foreground)", color: "var(--primary-foreground)" }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)" }} className="mb-4">
              <span
                className="tracking-widest uppercase block"
                style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.2em" }}
              >
                Vale Leathershop
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                opacity: 0.65,
                fontWeight: 300,
              }}
            >
              {t.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                style={{ opacity: 0.8 }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.instagram.com/vale_leathershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                style={{ opacity: 0.8 }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:valeleathershop@gmail.com"
                className="transition-opacity hover:opacity-70"
                style={{ opacity: 0.8 }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.45,
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              {t.nav}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-opacity hover:opacity-100"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      opacity: 0.65,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.45,
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              {t.service}
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      opacity: 0.65,
                      cursor: "pointer",
                    }}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.45,
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                {t.contact}
              </h4>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", opacity: 0.6, fontWeight: 300, lineHeight: 1.8 }}>
                Piazza di San Lorenzo, 1/R<br />
                50123 Firenze FI, Italia<br />
                +39 055 215465<br />
                valeleathershop@gmail.com
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.45,
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              {t.newsletter}
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 300,
                opacity: 0.65,
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {t.newsletterSub}
            </p>
            {subscribed ? (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--accent)",
                  fontWeight: 400,
                }}
              >
                {t.subscribed}
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 outline-none border-b transition-colors"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(247,243,238,0.25)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    paddingLeft: 0,
                  }}
                />
                <button
                  type="submit"
                  className="self-start mt-2 px-6 py-2.5 transition-all hover:opacity-85"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-foreground)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {t.subscribe}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(247,243,238,0.1)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              opacity: 0.4,
              fontWeight: 300,
              letterSpacing: "0.04em",
            }}
          >
            © 2026 Vale Leathershop. {t.rights}
          </p>
          <div className="flex gap-6">
            {[t.privacy, t.cookies].map((label) => (
              <button
                key={label}
                className="transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  opacity: 0.4,
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "inherit",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
