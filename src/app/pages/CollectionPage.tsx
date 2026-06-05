import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";

interface LangContext {
  lang: "it" | "en";
}

const allProducts = [
  {
    id: "abito-seta",
    name: "Abito in Seta",
    nameEn: "Silk Dress",
    category: "abiti",
    categoryLabel: "Abiti",
    categoryLabelEn: "Dresses",
    price: "€ 480",
    img: "https://images.unsplash.com/photo-1585131609775-8eecc878fdfc?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in white dress",
    isNew: true,
  },
  {
    id: "giacca-lana",
    name: "Giacca in Lana Merino",
    nameEn: "Merino Wool Jacket",
    category: "giacche",
    categoryLabel: "Giacche",
    categoryLabelEn: "Jackets",
    price: "€ 620",
    img: "https://images.unsplash.com/photo-1631473352507-8264912737bf?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in black coat",
    isNew: false,
  },
  {
    id: "borsa-pelle",
    name: "Borsa Artigianale",
    nameEn: "Artisan Leather Bag",
    category: "borse",
    categoryLabel: "Borse",
    categoryLabelEn: "Handbags",
    price: "€ 390",
    img: "https://images.unsplash.com/photo-1591561954555-607968c989ab?w=600&h=800&fit=crop&auto=format",
    alt: "Artisan leather handbag",
    isNew: false,
  },
  {
    id: "abito-lino",
    name: "Abito in Lino",
    nameEn: "Linen Dress",
    category: "abiti",
    categoryLabel: "Abiti",
    categoryLabelEn: "Dresses",
    price: "€ 320",
    img: "https://images.unsplash.com/photo-1504563126294-c4df6546b61e?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in linen on the shore",
    isNew: true,
  },
  {
    id: "camicia-lino",
    name: "Camicia in Lino",
    nameEn: "Linen Shirt",
    category: "camicie",
    categoryLabel: "Camicie",
    categoryLabelEn: "Shirts",
    price: "€ 185",
    img: "https://images.unsplash.com/photo-1527409208255-fd7f12b0b341?w=600&h=800&fit=crop&auto=format",
    alt: "Man in fashion street",
    isNew: false,
  },
  {
    id: "abito-romantico",
    name: "Abito Romantico",
    nameEn: "Romantic Dress",
    category: "abiti",
    categoryLabel: "Abiti",
    categoryLabelEn: "Dresses",
    price: "€ 540",
    img: "https://images.unsplash.com/photo-1680888470883-9c2917c307fc?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in romantic white dress",
    isNew: true,
  },
  {
    id: "abito-rosa",
    name: "Abito Estivo Rosa",
    nameEn: "Pink Summer Dress",
    category: "abiti",
    categoryLabel: "Abiti",
    categoryLabelEn: "Dresses",
    price: "€ 295",
    img: "https://images.unsplash.com/photo-1627238140657-63381adc25be?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in pink dress with hat",
    isNew: false,
  },
  {
    id: "abito-campo",
    name: "Abito in Cotone",
    nameEn: "Cotton Field Dress",
    category: "abiti",
    categoryLabel: "Abiti",
    categoryLabelEn: "Dresses",
    price: "€ 260",
    img: "https://images.unsplash.com/photo-1698350974321-9d3b60e705a8?w=600&h=800&fit=crop&auto=format",
    alt: "Woman in field with long hair",
    isNew: false,
  },
];

const filterCategories = [
  { id: "tutti", label: "Tutti", labelEn: "All" },
  { id: "abiti", label: "Abiti", labelEn: "Dresses" },
  { id: "giacche", label: "Giacche", labelEn: "Jackets" },
  { id: "camicie", label: "Camicie", labelEn: "Shirts" },
  { id: "borse", label: "Borse", labelEn: "Handbags" },
];

export function CollectionPage() {
  const { lang } = useOutletContext<LangContext>();
  const [activeFilter, setActiveFilter] = useState("tutti");
  const [showFilters, setShowFilters] = useState(false);

  const filtered =
    activeFilter === "tutti"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  const t = {
    title: lang === "it" ? "Collezione" : "Collection",
    subtitle: lang === "it" ? "Capi artigianali selezionati con cura" : "Carefully selected artisan pieces",
    isNew: lang === "it" ? "Novità" : "New",
    filter: lang === "it" ? "Filtri" : "Filters",
    all: lang === "it" ? "Tutti" : "All",
    results: lang === "it" ? "articoli" : "items",
  };

  return (
    <>
      {/* Page Header */}
      <div
        className="relative pt-32 pb-16 px-6 lg:px-12"
        style={{
          background: "var(--foreground)",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1565115450808-dc5e26c0b352?w=1200&h=400&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto text-center">
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
            Bottega Firenze
          </span>
          <h1
            className="mt-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "#F7F3EE",
              lineHeight: 1.1,
            }}
          >
            {t.title}
          </h1>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(247,243,238,0.6)",
            }}
          >
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div
        className="sticky top-16 lg:top-20 z-30 py-4 px-6 lg:px-12"
        style={{
          background: "rgba(247,243,238,0.97)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className="flex-shrink-0 px-5 py-2 transition-all duration-200"
                style={{
                  background: activeFilter === cat.id ? "var(--foreground)" : "transparent",
                  color: activeFilter === cat.id ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  border: "1px solid",
                  borderColor: activeFilter === cat.id ? "var(--foreground)" : "var(--border)",
                }}
              >
                {lang === "it" ? cat.label : cat.labelEn}
              </button>
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--muted-foreground)",
              fontWeight: 300,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {filtered.length} {t.results}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link to={`/collezione/${product.id}`}>
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ aspectRatio: "3/4", backgroundColor: "var(--muted)" }}
                >
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  </div>
                </div>
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
                  {lang === "it" ? product.categoryLabel : product.categoryLabelEn}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
