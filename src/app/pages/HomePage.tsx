import { Link } from "react-router";
import { useOutletContext } from "react-router";
import { ArrowRight, Star, Instagram, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface LangContext {
  lang: "it" | "en";
}

const products = [
  {
    id: "abito-seta",
    name: "Abito in Seta",
    nameEn: "Silk Dress",
    category: "Abiti",
    categoryEn: "Dresses",
    price: "€ 480",
    img: "https://images.unsplash.com/photo-1585131609775-8eecc878fdfc?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in white dress",
    isNew: true,
  },
  {
    id: "giacca-lana",
    name: "Giacca in Lana Merino",
    nameEn: "Merino Wool Jacket",
    category: "Giacche",
    categoryEn: "Jackets",
    price: "€ 620",
    img: "https://images.unsplash.com/photo-1631473352507-8264912737bf?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in black coat",
    isNew: false,
  },
  {
    id: "borsa-pelle",
    name: "Borsa Artigianale",
    nameEn: "Artisan Leather Bag",
    category: "Borse",
    categoryEn: "Handbags",
    price: "€ 390",
    img: "https://images.unsplash.com/photo-1591561954555-607968c989ab?w=600&h=800&fit=crop&auto=format",
    alt: "Artisan leather handbag",
    isNew: false,
  },
  {
    id: "abito-lino",
    name: "Abito in Lino",
    nameEn: "Linen Dress",
    category: "Abiti",
    categoryEn: "Dresses",
    price: "€ 320",
    img: "https://images.unsplash.com/photo-1504563126294-c4df6546b61e?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in linen on the shore",
    isNew: true,
  },
];

const categories = [
  {
    name: "Abiti",
    nameEn: "Dresses",
    img: "https://images.unsplash.com/photo-1680888470883-9c2917c307fc?w=500&h=650&fit=crop&auto=format",
    alt: "Elegant dress editorial",
  },
  {
    name: "Giacche",
    nameEn: "Jackets",
    img: "https://images.unsplash.com/photo-1699378734484-95d1e3f5241a?w=500&h=650&fit=crop&auto=format",
    alt: "Couple walking in stylish jackets",
  },
  {
    name: "Accessori",
    nameEn: "Accessories",
    img: "https://images.unsplash.com/photo-1698350974321-9d3b60e705a8?w=500&h=650&fit=crop&auto=format",
    alt: "Fashion accessories editorial",
  },
];

const testimonials = [
  {
    name: "Giulia M.",
    city: "Firenze",
    rating: 5,
    text: "Un'esperienza unica. Ogni pezzo è una storia. Ho trovato il vestito dei miei sogni e il servizio è stato impeccabile.",
    textEn: "A unique experience. Each piece tells a story. I found the dress of my dreams and the service was impeccable.",
    img: "https://images.unsplash.com/photo-1627238140657-63381adc25be?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Sophie L.",
    city: "Paris",
    rating: 5,
    text: "Je suis venue à Florence spécialement pour cette boutique. La qualité est extraordinaire — artisanat authentique.",
    textEn: "I came to Florence specifically for this boutique. The quality is extraordinary — authentic craftsmanship.",
    img: "https://images.unsplash.com/photo-1686491730848-0c86413833e5?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Marco B.",
    city: "Milano",
    rating: 5,
    text: "La camicia che ho acquistato è diventata il mio capo preferito. Taglio perfetto, tessuto raffinato. Tornerò presto.",
    textEn: "The shirt I bought has become my favorite piece. Perfect cut, refined fabric. I will return soon.",
    img: "https://images.unsplash.com/photo-1527409208255-fd7f12b0b341?w=80&h=80&fit=crop&auto=format",
  },
];

const lookbookImages = [
  { img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop&auto=format", alt: "Fashion editorial woman in piazza" },
  { img: "https://images.unsplash.com/photo-1681028442065-6d1a85eea2ef?w=600&h=450&fit=crop&auto=format", alt: "Two women in fashion editorial" },
  { img: "https://images.unsplash.com/photo-1627238140657-63381adc25be?w=600&h=900&fit=crop&auto=format", alt: "Woman in pink dress" },
  { img: "https://images.unsplash.com/photo-1686491730848-0c86413833e5?w=600&h=600&fit=crop&auto=format", alt: "Fashion editorial reading" },
];

const instagramPreviews = [
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1504563126294-c4df6546b61e?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1631473352507-8264912737bf?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1585131609775-8eecc878fdfc?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1627238140657-63381adc25be?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1680888470883-9c2917c307fc?w=400&h=400&fit=crop&auto=format",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.7rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "var(--accent)",
        fontWeight: 700,
        display: "block",
        marginBottom: "1rem",
      }}
    >
      {children}
    </span>
  );
}

export function HomePage() {
  const { lang } = useOutletContext<LangContext>();

  const t = {
    heroHeadline: lang === "it" ? "Cuir Florentino Senza Tempo" : "Timeless Florentine Leather",
    heroSub: lang === "it" ? "Articoli in pelle realizzati a mano, nati nel cuore di Firenze." : "Handcrafted leather pieces born in the heart of Florence.",
    heroCta: lang === "it" ? "Scopri la Collezione" : "Discover Collection",
    heroContact: lang === "it" ? "Contattaci" : "Contact Us",
    scroll: lang === "it" ? "Scorri" : "Scroll",
    aboutLabel: lang === "it" ? "La Nostra Storia" : "Our Story",
    aboutHeadline: lang === "it" ? "Nata in Piazza di San Lorenzo" : "Born in Piazza di San Lorenzo",
aboutBody: lang === "it"
  ? "Vale Leathershop nasce dalla passione per l'autentica tradizione della pelle toscana. Ogni pezzo è accuratamente realizzato a mano da artigiani locali, utilizzando pelle pregiata e tecniche senza tempo. Non vendiamo solo accessori — proteggiamo il patrimonio del vero artigianato fiorentino."
  : "Vale Leathershop was born from a passion for authentic Tuscan leather traditions. Every piece is carefully handcrafted by local artisans using genuine premium leather and timeless techniques. We do not just sell accessories — we protect a heritage of true Florentine craftsmanship.",
    aboutCta: lang === "it" ? "Leggi la nostra storia" : "Read our story",
    collectionLabel: lang === "it" ? "Nuovi Arrivi" : "New Arrivals",
    collectionHeadline: lang === "it" ? "La Collezione" : "The Collection",
    collectionCta: lang === "it" ? "Vedi Tutto" : "See All",
    inquiry: lang === "it" ? "Richiedi Info" : "Enquire",
    categoriesLabel: lang === "it" ? "Categorie" : "Categories",
    categoriesHeadline: lang === "it" ? "Esplora per categoria" : "Explore by category",
    lookbookLabel: "Lookbook",
    lookbookHeadline: lang === "it" ? "Primavera / Estate 2026" : "Spring / Summer 2026",
    lookbookCta: lang === "it" ? "Sfoglia il Lookbook" : "Browse Lookbook",
    testimonialsLabel: lang === "it" ? "Testimonianze" : "Testimonials",
    testimonialsHeadline: lang === "it" ? "Le nostre clienti raccontano" : "What our clients say",
    instagramLabel: "Instagram",
    instagramHeadline: lang === "it" ? "Seguici su Instagram" : "Follow us on Instagram",
    instagramSub: lang === "it"
      ? "Storie dal nostro atelier, nuovi arrivi e ispirazione quotidiana."
      : "Stories from our atelier, new arrivals and daily inspiration.",
    instagramHandle: "@vale_leathershop",
    followCta: lang === "it" ? "Segui" : "Follow",
    isNew: lang === "it" ? "Novità" : "New",
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1642889342261-9b157ff1a4da?w=1920&h=1080&fit=crop&auto=format)`,
            backgroundColor: "#3a3028",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(20,16,12,0.82) 0%, rgba(20,16,12,0.3) 50%, rgba(20,16,12,0.1) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 700,
              }}
            >
              Vale Leathershop — Est. 2008
            </span>
            <h1
              className="mt-4 mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#F7F3EE",
                letterSpacing: "-0.01em",
                maxWidth: "14ch",
              }}
            >
              {t.heroHeadline}
            </h1>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 300,
                color: "rgba(247,243,238,0.75)",
                maxWidth: "40ch",
                lineHeight: 1.7,
              }}
            >
              {t.heroSub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/collezione"
                className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:gap-4"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {t.heroCta} <ArrowRight size={14} />
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(247,243,238,0.4)",
                  color: "#F7F3EE",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {t.heroContact}
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(247,243,238,0.5)",
            }}
          >
            {t.scroll}
          </span>
          <ChevronDown size={16} color="rgba(247,243,238,0.5)" className="animate-bounce" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>{t.aboutLabel}</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: "var(--foreground)",
                  whiteSpace: "pre-line",
                  marginBottom: "1.5rem",
                }}
              >
                {t.aboutHeadline}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--muted-foreground)",
                  marginBottom: "2.5rem",
                  maxWidth: "48ch",
                }}
              >
                {t.aboutBody}
              </p>
              <Link
                to="/chi-siamo"
                className="inline-flex items-center gap-2 group"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                {t.aboutCta}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5", backgroundColor: "var(--muted)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1565115450808-dc5e26c0b352?w=800&h=1000&fit=crop&auto=format"
                  alt="Florence rooftops terracotta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -left-6 px-8 py-6"
                style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    display: "block",
                  }}
                >
                  16
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    opacity: 0.85,
                  }}
                >
                  {lang === "it" ? "Anni di Storia" : "Years of Story"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="w-full py-20 lg:py-28" style={{ background: "var(--secondary)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel>{t.categoriesLabel}</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: "var(--foreground)",
                }}
              >
                {t.categoriesHeadline}
              </h2>
            </div>
            <Link
              to="/collezione"
              className="hidden md:inline-flex items-center gap-2 group"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--foreground)",
              }}
            >
              {lang === "it" ? "Vedi Tutto" : "View All"}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                className="relative overflow-hidden group cursor-pointer"
                style={{ aspectRatio: "3/4", backgroundColor: "var(--muted)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/collezione">
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(20,16,12,0.65) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 500,
                        color: "#F7F3EE",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {lang === "it" ? cat.name : cat.nameEn}
                    </h3>
                    <span
                      className="inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(247,243,238,0.7)",
                        fontWeight: 700,
                      }}
                    >
                      {lang === "it" ? "Esplora" : "Explore"} <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="w-full py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel>{t.collectionLabel}</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: "var(--foreground)",
                }}
              >
                {t.collectionHeadline}
              </h2>
            </div>
            <Link
              to="/collezione"
              className="hidden md:inline-flex items-center gap-2 group"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--foreground)",
              }}
            >
              {t.collectionCta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/collezione/${product.id}`}>
                  <div
                    className="relative overflow-hidden mb-4"
                    style={{ aspectRatio: "3/4", backgroundColor: "var(--muted)" }}
                  >
                    <img
                      src={product.img}
                      alt={product.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    {product.isNew && (
                      <span
                        className="absolute top-3 left-3 px-2.5 py-1"
                        style={{
                          background: "var(--accent)",
                          color: "var(--accent-foreground)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        {t.isNew}
                      </span>
                    )}
                    {/* Quick view overlay */}
                    <div
                      className="absolute inset-x-0 bottom-0 py-4 flex flex-col gap-2 items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      style={{ background: "rgba(247,243,238,0.95)" }}
                    >
                      <a
                        href="https://wa.me/390551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4/5 py-2.5 text-center transition-opacity hover:opacity-80"
                        style={{
                          background: "var(--foreground)",
                          color: "var(--primary-foreground)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        WhatsApp
                      </a>
                      <a
                        href="https://www.instagram.com/vale_leathershop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4/5 py-2.5 text-center transition-opacity hover:opacity-80"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--foreground)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--muted-foreground)",
                        fontWeight: 700,
                        marginBottom: "0.3rem",
                      }}
                    >
                      {lang === "it" ? product.category : product.categoryEn}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 400,
                        color: "var(--foreground)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {lang === "it" ? product.name : product.nameEn}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                      }}
                    >
                      {product.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/collezione"
              className="inline-flex items-center gap-3 px-10 py-4 transition-all hover:opacity-85"
              style={{
                border: "1px solid var(--foreground)",
                color: "var(--foreground)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {t.collectionCta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOOKBOOK TEASER */}
      <section className="w-full py-20 lg:py-28" style={{ background: "var(--card)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <SectionLabel>{t.lookbookLabel}</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "var(--foreground)",
              }}
            >
              {t.lookbookHeadline}
            </h2>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div
              className="col-span-2 row-span-2 overflow-hidden relative group"
              style={{ aspectRatio: "1/1.2", backgroundColor: "var(--muted)" }}
            >
              <img
                src={lookbookImages[0].img}
                alt={lookbookImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {lookbookImages.slice(1).map((item, i) => (
              <div
                key={i}
                className="overflow-hidden relative group"
                style={{ aspectRatio: "1/1", backgroundColor: "var(--muted)" }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/lookbook"
              className="inline-flex items-center gap-3 px-10 py-4 transition-all hover:gap-4"
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
              {t.lookbookCta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>{t.testimonialsLabel}</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "var(--foreground)",
              }}
            >
              {t.testimonialsHeadline}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t2, i) => (
              <motion.div
                key={t2.name}
                className="p-8"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t2.rating }).map((_, j) => (
                    <Star key={j} size={12} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: "var(--foreground)",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{lang === "it" ? t2.text : t2.textEn}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t2.img}
                    alt={t2.name}
                    className="rounded-full object-cover"
                    style={{ width: 44, height: 44 }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                      }}
                    >
                      {t2.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        fontWeight: 300,
                      }}
                    >
                      {t2.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="w-full py-20 lg:py-28" style={{ background: "var(--secondary)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <SectionLabel>{t.instagramLabel}</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "var(--foreground)",
                marginBottom: "0.75rem",
              }}
            >
              {t.instagramHeadline}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "var(--muted-foreground)",
                marginBottom: "1.5rem",
              }}
            >
              {t.instagramSub}
            </p>
            <a
              href="https://www.instagram.com/vale_leathershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                color: "var(--muted-foreground)",
                fontWeight: 400,
              }}
            >
              <Instagram size={15} />
              {t.instagramHandle}
            </a>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            {instagramPreviews.map((img, i) => (
              <a
                key={i}
                href="https://www.instagram.com/vale_leathershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group"
                style={{ aspectRatio: "1/1", backgroundColor: "var(--muted)" }}
              >
                <img
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(20,16,12,0.4)" }}
                >
                  <Instagram size={22} color="#F7F3EE" />
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://www.instagram.com/vale_leathershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 transition-all hover:opacity-85"
              style={{
                border: "1px solid var(--foreground)",
                color: "var(--foreground)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              <Instagram size={14} />
              {t.followCta}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section
        className="w-full py-20 lg:py-24"
        style={{ background: "var(--foreground)" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "var(--primary-foreground)",
              lineHeight: 1.2,
            }}
          >
            {lang === "it" ? "Vieni a trovarci" : "Come visit us"}
          </h2>
          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(247,243,238,0.65)",
              marginBottom: "0.5rem",
            }}
          >
            Piazza di San Lorenzo, 1/R, 50123 Firenze FI, Itali
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "rgba(247,243,238,0.45)",
            }}
          >
            {lang === "it" ? "Lun–Dom 11:00–20:00" : "Mon–Sun 11:00–20:00"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-8 py-3 transition-all hover:opacity-85"
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {lang === "it" ? "Contattaci" : "Contact Us"}
            </Link>
            <a
              href="https://wa.me/39055215465"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 transition-all hover:bg-white/10"
              style={{
                border: "1px solid rgba(247,243,238,0.25)",
                color: "rgba(247,243,238,0.85)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
