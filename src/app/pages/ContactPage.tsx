import { useOutletContext } from "react-router";
import { motion } from "motion/react";
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";

interface LangContext {
  lang: "it" | "en";
}

export function ContactPage() {
  const { lang } = useOutletContext<LangContext>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const t = {
    label: lang === "it" ? "Contatti" : "Contact",
    headline: lang === "it" ? "Vieni a trovarci\na Firenze" : "Come find us\nin Florence",
    sub: lang === "it"
      ? "Siamo a disposizione per rispondere a qualsiasi domanda, richiesta su misura o collaborazione."
      : "We're here to answer any question, custom order request or collaboration inquiry.",
    address: lang === "it" ? "Indirizzo" : "Address",
    hours: lang === "it" ? "Orari" : "Hours",
    phone: lang === "it" ? "Telefono" : "Phone",
    hoursText: lang === "it"
      ? "Lunedì – Domenica\n11:00 – 20:00"
      : "Monday – s\n11:00 – 20:00",
    writeUs: lang === "it" ? "Scrivici un messaggio" : "Send us a message",
    namePh: lang === "it" ? "Nome e Cognome" : "Full Name",
    emailPh: "Email",
    messagePh: lang === "it" ? "Il tuo messaggio" : "Your message",
    send: lang === "it" ? "Invia Messaggio" : "Send Message",
    sentMsg: lang === "it" ? "Grazie! Ti risponderemo presto." : "Thank you! We'll get back to you soon.",
    whatsappCta: lang === "it" ? "Scrivi su WhatsApp" : "Write on WhatsApp",
    instagramCta: lang === "it" ? "Scrivi su Instagram" : "Write on Instagram",
    map: lang === "it" ? "Dove siamo" : "Find us",
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "var(--foreground)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1630244260410-44eea8b074f0?w=1400&h=500&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 700,
            }}
          >
            {t.label}
          </span>
          <h1
            className="mt-4 mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "#F7F3EE",
              lineHeight: 1.15,
              whiteSpace: "pre-line",
            }}
          >
            {t.headline}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(247,243,238,0.65)",
              maxWidth: "44ch",
              lineHeight: 1.7,
            }}
          >
            {t.sub}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "var(--secondary)" }}
                >
                  <MapPin size={18} color="var(--accent)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "var(--muted-foreground)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {t.address}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                      color: "var(--foreground)",
                      lineHeight: 1.7,
                    }}
                  >
                    Piazza di San Lorenzo, 1/R<br />
                    50123 Firenze, Italia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "var(--secondary)" }}
                >
                  <Clock size={18} color="var(--accent)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "var(--muted-foreground)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {t.hours}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                      color: "var(--foreground)",
                      lineHeight: 1.7,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {t.hoursText}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "var(--secondary)" }}
                >
                  <Phone size={18} color="var(--accent)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "var(--muted-foreground)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {t.phone}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                      color: "var(--foreground)",
                      lineHeight: 1.7,
                    }}
                  >
                    +39 055 215465<br />
                    valeleathershop@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "var(--secondary)" }}
                >
                  <Mail size={18} color="var(--accent)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "var(--muted-foreground)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Social
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://wa.me/39055215465"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        color: "var(--foreground)",
                      }}
                    >
                      <MessageCircle size={15} color="var(--accent)" />
                      {t.whatsappCta}
                    </a>
                    <a
                      href="https://www.instagram.com/vale_leathershop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        color: "var(--foreground)",
                      }}
                    >
                      <Instagram size={15} color="var(--accent)" />
                      @vale_leathershop
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--muted-foreground)",
                  marginBottom: "1rem",
                }}
              >
                {t.map}
              </p>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9", backgroundColor: "var(--muted)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1565115450808-dc5e26c0b352?w=700&h=400&fit=crop&auto=format"
                  alt="Florence location map view"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(40,35,30,0.35)" }}
                >
                  <div className="text-center">
                    <MapPin size={28} color="#F7F3EE" className="mx-auto mb-2" />
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontStyle: "italic",
                        color: "#F7F3EE",
                      }}
                    >
                      Piazza di San Lorenzo, 1/R
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 500,
                color: "var(--foreground)",
                lineHeight: 1.2,
              }}
            >
              {t.writeUs}
            </h2>

            {sent ? (
              <div
                className="py-12 px-8 text-center"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "var(--accent)",
                  }}
                >
                  {t.sentMsg}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                {[
                  { key: "name", placeholder: t.namePh, type: "text" },
                  { key: "email", placeholder: t.emailPh, type: "email" },
                ].map((field) => (
                  <div key={field.key} className="relative">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                      className="w-full py-4 outline-none transition-colors"
                      style={{
                        background: "transparent",
                        borderBottom: "1px solid var(--border)",
                        color: "var(--foreground)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        paddingLeft: 0,
                      }}
                    />
                  </div>
                ))}
                <div>
                  <textarea
                    placeholder={t.messagePh}
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full py-4 outline-none transition-colors resize-none"
                    style={{
                      background: "transparent",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--foreground)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      paddingLeft: 0,
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 transition-opacity hover:opacity-85"
                  style={{
                    background: "var(--foreground)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {t.send}
                </button>
              </form>
            )}

            {/* Quick CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://wa.me/39055215465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 transition-opacity hover:opacity-80"
                style={{
                  background: "var(--secondary)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/vale_leathershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 transition-opacity hover:opacity-80"
                style={{
                  background: "var(--secondary)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                <Instagram size={14} />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
