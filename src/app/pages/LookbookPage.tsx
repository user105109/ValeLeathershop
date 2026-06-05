import { useOutletContext } from "react-router";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import ResponsiveMasonry from "react-responsive-masonry";

interface LangContext {
  lang: "it" | "en";
}

const lookbookItems = [
  {
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&h=1000&fit=crop&auto=format",
    alt: "Fashion editorial woman in piazza",
    caption: "Piazza della Signoria",
  },
  {
    img: "https://images.unsplash.com/photo-1680888470883-9c2917c307fc?w=700&h=900&fit=crop&auto=format",
    alt: "Woman in white dress near water",
    caption: "Arno, Primavera",
  },
  {
    img: "https://images.unsplash.com/photo-1504563126294-c4df6546b61e?w=700&h=500&fit=crop&auto=format",
    alt: "Elegant linen on shore",
    caption: "Lino & Brezza",
  },
  {
    img: "https://images.unsplash.com/photo-1631473352507-8264912737bf?w=700&h=1050&fit=crop&auto=format",
    alt: "Woman in black jacket",
    caption: "Inverno Urbano",
  },
  {
    img: "https://images.unsplash.com/photo-1627238140657-63381adc25be?w=700&h=900&fit=crop&auto=format",
    alt: "Woman in pink dress with hat",
    caption: "Estate Toscana",
  },
  {
    img: "https://images.unsplash.com/photo-1699378734484-95d1e3f5241a?w=700&h=950&fit=crop&auto=format",
    alt: "Couple walking in style",
    caption: "Via Tornabuoni",
  },
  {
    img: "https://images.unsplash.com/photo-1686491730848-0c86413833e5?w=700&h=500&fit=crop&auto=format",
    alt: "Two women reading magazine",
    caption: "Atelier Moments",
  },
  {
    img: "https://images.unsplash.com/photo-1698350974321-9d3b60e705a8?w=700&h=1000&fit=crop&auto=format",
    alt: "Woman in field with long hair",
    caption: "Campagna Toscana",
  },
  {
    img: "https://images.unsplash.com/photo-1681028442065-6d1a85eea2ef?w=700&h=1050&fit=crop&auto=format",
    alt: "Two women in editorial",
    caption: "Stazione",
  },
  {
    img: "https://images.unsplash.com/photo-1527409208255-fd7f12b0b341?w=700&h=900&fit=crop&auto=format",
    alt: "Man walking on street",
    caption: "Uomo Fiorentino",
  },
  {
    img: "https://images.unsplash.com/photo-1550322668-ce0340ddea8f?w=700&h=500&fit=crop&auto=format",
    alt: "Fashion book with rose",
    caption: "Ispirazione",
  },
  {
    img: "https://images.unsplash.com/photo-1585131609775-8eecc878fdfc?w=700&h=950&fit=crop&auto=format",
    alt: "Woman in white dress by curtain",
    caption: "Seta Bianca",
  },
];

export function LookbookPage() {
  const { lang } = useOutletContext<LangContext>();

  const t = {
    label: "Lookbook",
    headline: lang === "it" ? "Primavera / Estate 2026" : "Spring / Summer 2026",
    sub: lang === "it"
      ? "Un viaggio visivo tra le raffinate trame della pelle, le tonalità intense e le atmosfere senza tempo della nostra stagione."
      : "A visual journey through the fine leather textures, rich tones, and timeless atmospheres of our season.",
    caption: lang === "it" ? "Firenze, " : "Florence, ",
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "var(--card)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400&h=500&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
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
            className="mt-4 mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "var(--foreground)",
              lineHeight: 1.1,
            }}
          >
            {t.headline}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--muted-foreground)",
              maxWidth: "44ch",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {t.sub}
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="16px">
            {lookbookItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden group"
                style={{ backgroundColor: "var(--muted)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full block transition-transform duration-700 group-hover:scale-103"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "linear-gradient(to top, rgba(20,16,12,0.6) 0%, transparent 100%)" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      color: "#F7F3EE",
                      fontWeight: 400,
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Campaign note */}
      <div
        className="py-16 text-center"
        style={{ background: "var(--secondary)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--foreground)",
            maxWidth: "44ch",
            margin: "0 auto",
            lineHeight: 1.7,
            padding: "0 1.5rem",
          }}
        >
          {lang === "it"
            ? '"La moda passa, lo stile rimane." — Coco Chanel'
            : '"Fashion fades, only style remains the same." — Coco Chanel'}
        </p>
      </div>
    </div>
  );
}
