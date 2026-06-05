import { useOutletContext } from "react-router";
import { motion } from "motion/react";

interface LangContext {
  lang: "it" | "en";
}

const values = [
  {
    icon: "✦",
    title: "Artigianalità",
    titleEn: "Craftsmanship",
    text: "Ogni pezzo è meticolosamente realizzato dalle mani di artigiani fiorentini specializzati nella lavorazione del cuoio, con alle spalle decenni di esperienza.",
    textEn: "Every piece is meticulously shaped by the hands of Florentine leather artisans with decades of experience.",
  },
  {
    icon: "✦",
    title: "Qualità",
    titleEn: "Quality",
    text: "Selezioniamo solo le migliori pelli italiane: pelle di vitello pieno fiore, pelli conciate al vegetale e accessori resistenti.",
    textEn: "We select only the finest Italian leathers: full-grain calfskin, vegetable-tanned leathers, and durable hardware.",
  },
  {
    icon: "✦",
    title: "Sostenibilità",
    titleEn: "Sustainability",
    text: "Una filiera locale breve, pelle proveniente da sottoprodotti dell'industria alimentare e gestita in modo responsabile, e una durata senza tempo.",
    textEn: "A short local supply chain, responsibly sourced leather from food-industry byproducts, and timeless durability.",
  },
  {
    icon: "✦",
    title: "Stile",
    titleEn: "Style",
    text: "Non seguiamo le tendenze del fast fashion: selezioniamo con cura capi in pelle intramontabili e funzionali che potrai indossare per decenni.",
    textEn: "We don't follow fast fashion — we curate timeless, functional leather pieces you will carry for decades.",
  },
];

const team = [
  {
    name: "Il Team in Boutique",
    role: "Consulenti di Stile & Accoglienza",
    roleEn: "In-Store Style Consultants",
    img: "https://images.unsplash.com/photo-1690069252957-54584c076629?w=400&h=500&fit=crop&auto=format", // Image plus axée boutique / accueil
    bio: "Nel cuore di Piazza di San Lorenzo, il nostro team vi accoglie ogni giorno per guidarvi nella scelta della borsa o dell'accessorio perfetto, condividendo la storia e i segreti del vero cuoio fiorentino.",
    bioEn: "In the heart of Piazza di San Lorenzo, our boutique team welcomes you daily to help you find the perfect bag or accessory, sharing the rich history and secrets of authentic Florentine leather.",
  },
  {
    name: "I Maestri Pellettieri",
    role: "Artigianato Locale Toscano",
    roleEn: "Local Tuscan Craftsmanship",
    img: "https://images.unsplash.com/photo-1527409208255-fd7f12b0b341?w=400&h=500&fit=crop&auto=format", // Image évocatrice du travail manuel du cuir
    bio: "Collaboriamo esclusivamente con storici artigiani e laboratori toscani. Ogni cucitura, tintura a bordo e dettaglio in metallo è il risultato di decennali tradizioni tramandate di generazione in generazione.",
    bioEn: "We partner exclusively with historic Tuscan craftsmen and leather workshops. Every stitch, edge dye, and hardware detail is the result of decades of heritage passed down through generations.",
  },
];

export function AboutPage() {
  const { lang } = useOutletContext<LangContext>();

  const t = {
    label: lang === "it" ? "Chi Siamo" : "About Us",
    headline: lang === "it" ? "Un laboratorio artigianale nato\ndalla passione per la pelle toscana." : "An artisan workshop born\nfrom a passion for Tuscan leather",
    story1: lang === "it"
      ? "Vale Leathershop è stata fondata nel 2008 nel cuore storico di Firenze, proprio accanto all'iconico mercato di San Lorenzo. Radicata in secoli di tradizione fiorentina nella lavorazione della pelle, la nostra bottega è nata per portare autentici articoli in pelle italiani, realizzati a mano, direttamente dalle mani dell'artigiano alle persone, utilizzando materiali che racchiudono una storia."
      : "Vale Leathershop was founded in 2008 in the historic heart of Florence, right by the iconic San Lorenzo market. Rooted in centuries of Florentine leather traditions, our shop was created to bring genuine, handcrafted Italian leather goods directly from the artisan's hands to real people, using materials that carry a story.",
    story2: lang === "it"
      ? "Ogni borsa, portafoglio e accessorio della nostra collezione è disegnato e realizzato a mano a Firenze da maestri artigiani locali, utilizzando pellami italiani di prima qualità. Collaboriamo a stretto contatto con concerie tradizionali toscane, rispettando la tradizione e garantendo al contempo uno stile durevole, essenziale e resistente. Non inseguiamo le tendenze stagionali. Crediamo nella pelletteria di alta qualità: pezzi che invecchiano con grazia, sviluppano una patina unica nel tempo e diventano parte della tua storia personale."
      : "Every bag, wallet, and accessory in our collection is designed and handcrafted in Florence by local masters using premium Italian leathers. We collaborate closely with traditional Tuscan tanneries, respecting heritage while ensuring a durable, essential, and lasting style. We don't chase seasonal trends. We believe in high-quality leather goods: pieces that age beautifully, develop a unique patina over time, and become part of your personal story.",
    story3: lang === "it"
      ? "Non inseguiamo le tendenze stagionali. Crediamo nella moda lenta: capi che invecchiano bene, che si tramandano, che diventano parte della tua storia personale."
      : "We don't chase seasonal trends. We believe in slow fashion: pieces that age well, that are passed down, that become part of your personal story.",
    valuesLabel: lang === "it" ? "I Nostri Valori" : "Our Values",
    teamLabel: lang === "it" ? "Le persone dietro Vale Leathershop" : "The people behind Vale Leathershop",
    workshopLabel: lang === "it" ? "Il nostro negozio e laboratorio" : "Our Shop & Workshop",
    workshopText: lang === "it"
      ? "La nostra boutique si trova in Piazza di San Lorenzo, immersa nella storia vivente del commercio fiorentino. Un luogo dove la tradizione incontra il presente: muri storici in pietra, il profumo della vera pelle e file di borse e accessori realizzati a mano. Venite a trovarci."
      : "Our boutique is located in Piazza di San Lorenzo, surrounded by the living history of Florentine trade. A place where tradition meets the present: historic stone walls, the scent of genuine leather, and rows of handcrafted bags and accessories. Come visit us.",
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div
        className="relative py-24 lg:py-36 overflow-hidden"
        style={{ background: "var(--foreground)" }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1779475042733-c374700f0506?w=1400&h=600&fit=crop&auto=format)`,
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
            className="mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 500,
              color: "#F7F3EE",
              lineHeight: 1.15,
              whiteSpace: "pre-line",
              maxWidth: "16ch",
            }}
          >
            {t.headline}
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "4/5", backgroundColor: "var(--muted)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1779475042733-c374700f0506?w=800&h=1000&fit=crop&auto=format"
                  alt="Bottega Firenze interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--foreground)",
                  marginBottom: "2rem",
                }}
              >
                {t.story1}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--muted-foreground)",
                  marginBottom: "1.5rem",
                }}
              >
                {t.story2}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--muted-foreground)",
                }}
              >
                {t.story3}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24" style={{ background: "var(--secondary)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 700,
              display: "block",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            {t.valuesLabel}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    color: "var(--accent)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {val.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {lang === "it" ? val.title : val.titleEn}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {lang === "it" ? val.text : val.textEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 700,
              display: "block",
              marginBottom: "3rem",
            }}
          >
            {t.teamLabel}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className="flex-shrink-0 overflow-hidden"
                  style={{ width: 140, height: 180, backgroundColor: "var(--muted)" }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--foreground)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      fontWeight: 700,
                      marginBottom: "1rem",
                    }}
                  >
                    {lang === "it" ? member.role : member.roleEn}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {lang === "it" ? member.bio : member.bioEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="py-20 lg:py-24" style={{ background: "var(--card)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "1.5rem",
                }}
              >
                {t.workshopLabel}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.9,
                  color: "var(--foreground)",
                  maxWidth: "44ch",
                }}
              >
                {t.workshopText}
              </p>
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 300, color: "var(--muted-foreground)", lineHeight: 2 }}>
                  Piazza di San Lorenzo, 1/R<br />
                  50123 Firenze, Italia<br />
                  {lang === "it" ? "Lun-Dom 11:00–20:00" : "Mon–Sun 11:00–20:00"}
                </p>
              </div>
            </div>
            <div
              className="overflow-hidden"
              style={{ aspectRatio: "4/3", backgroundColor: "var(--muted)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1776802792422-6f436418ec56?w=800&h=600&fit=crop&auto=format"
                alt="Boutique interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
