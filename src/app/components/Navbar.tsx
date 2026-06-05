import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Instagram, MessageCircle, Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "Home", labelIt: "Home", path: "/" },
  { label: "Collection", labelIt: "Collezione", path: "/collezione" },
  { label: "About Us", labelIt: "Chi Siamo", path: "/chi-siamo" },
  { label: "Lookbook", labelIt: "Lookbook", path: "/lookbook" },
  { label: "New Arrivals", labelIt: "Novità", path: "/collezione?filter=new" },
  { label: "Contact", labelIt: "Contatti", path: "/contatti" },
];

interface NavbarProps {
  lang: "it" | "en";
  onLangToggle: () => void;
}

export function Navbar({ lang, onLangToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || !isHome || menuOpen
            ? "rgba(247,243,238,0.97)"
            : "transparent",
          backdropFilter: scrolled || !isHome || menuOpen ? "blur(8px)" : "none",
          borderBottom: scrolled || !isHome || menuOpen
            ? "1px solid rgba(40,35,30,0.1)"
            : "none",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span
                className="tracking-widest uppercase"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: scrolled || !isHome || menuOpen ? "var(--foreground)" : "#F7F3EE",
                }}
              >
                Vale Leathershop
              </span>
              <span
                className="block"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.35em",
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  color: scrolled || !isHome || menuOpen ? "var(--muted-foreground)" : "rgba(247,243,238,0.7)",
                  textTransform: "uppercase",
                  marginTop: "-2px",
                }}
              >
                Firenze
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="transition-all duration-200 relative group"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    color:
                      location.pathname === link.path
                        ? "var(--accent)"
                        : scrolled || !isHome
                        ? "var(--foreground)"
                        : "#F7F3EE",
                  }}
                >
                  {lang === "it" ? link.labelIt : link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ background: "var(--accent)" }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              {/* Language switcher */}
              <button
                onClick={onLangToggle}
                className="hidden lg:flex items-center gap-1.5 transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: scrolled || !isHome ? "var(--foreground)" : "#F7F3EE",
                }}
              >
                <Globe size={13} />
                {lang === "it" ? "EN" : "IT"}
              </button>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex transition-opacity hover:opacity-70"
                style={{ color: scrolled || !isHome ? "var(--foreground)" : "#F7F3EE" }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/390551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 transition-opacity hover:opacity-70"
                style={{ color: scrolled || !isHome || menuOpen ? "var(--foreground)" : "#F7F3EE" }}
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: menuOpen ? "500px" : "0",
            background: "rgba(247,243,238,0.98)",
            borderTop: menuOpen ? "1px solid rgba(40,35,30,0.08)" : "none",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  color: location.pathname === link.path ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {lang === "it" ? link.labelIt : link.label}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--foreground)" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/390551234567"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--foreground)" }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <button
                onClick={onLangToggle}
                className="flex items-center gap-1.5 ml-auto"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "var(--foreground)",
                }}
              >
                <Globe size={14} />
                {lang === "it" ? "English" : "Italiano"}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
