import { useParams, Link, useOutletContext } from "react-router";
import { ArrowLeft, MessageCircle, Instagram, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface LangContext {
  lang: "it" | "en";
}

const productData: Record<
  string,
  {
    name: string;
    nameEn: string;
    category: string;
    categoryEn: string;
    price: string;
    description: string;
    descriptionEn: string;
    materials: string;
    materialsEn: string;
    img: string;
    imgs: string[];
    alt: string;
    isNew: boolean;
  }
> = {
  "abito-seta": {
    name: "Abito in Seta",
    nameEn: "Silk Dress",
    category: "Abiti",
    categoryEn: "Dresses",
    price: "€ 480",
    description:
      "Un abito che celebra la leggerezza della seta italiana. Taglio sartoriale, drappeggio morbido, dettagli rifiniti a mano nella nostra bottega fiorentina. Adatto sia per giornate speciali che per serate eleganti.",
    descriptionEn:
      "A dress that celebrates the lightness of Italian silk. Tailored cut, soft draping, details finished by hand in our Florentine workshop. Suitable for both special occasions and elegant evenings.",
    materials: "100% Seta italiana. Fodera in viscosa. Lavaggio delicato a mano.",
    materialsEn: "100% Italian silk. Viscose lining. Gentle hand wash.",
    img: "https://images.unsplash.com/photo-1585131609775-8eecc878fdfc?w=800&h=1100&fit=crop&auto=format",
    imgs: [
      "https://images.unsplash.com/photo-1680888470883-9c2917c307fc?w=400&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1504563126294-c4df6546b61e?w=400&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1698350974321-9d3b60e705a8?w=400&h=500&fit=crop&auto=format",
    ],
    alt: "Silk dress",
    isNew: true,
  },
  "giacca-lana": {
    name: "Giacca in Lana Merino",
    nameEn: "Merino Wool Jacket",
    category: "Giacche",
    categoryEn: "Jackets",
    price: "€ 620",
    description:
      "La nostra giacca in lana merino è un classico intramontabile. Lavorata da maestri artigiani toscani, con tasche a filo e bottoni in corno naturale. Perfetta nelle mezze stagioni.",
    descriptionEn:
      "Our merino wool jacket is a timeless classic. Crafted by Tuscan master artisans, with welt pockets and natural horn buttons. Perfect for spring and autumn.",
    materials: "100% Lana Merino Extrafine. Fodera in seta. Dry clean only.",
    materialsEn: "100% Extrafine Merino Wool. Silk lining. Dry clean only.",
    img: "https://images.unsplash.com/photo-1631473352507-8264912737bf?w=800&h=1100&fit=crop&auto=format",
    imgs: [
      "https://images.unsplash.com/photo-1527409208255-fd7f12b0b341?w=400&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1699378734484-95d1e3f5241a?w=400&h=500&fit=crop&auto=format",
    ],
    alt: "Merino wool jacket",
    isNew: false,
  },
  "borsa-pelle": {
    name: "Borsa Artigianale",
    nameEn: "Artisan Leather Bag",
    category: "Borse",
    categoryEn: "Handbags",
    price: "€ 390",
    description:
      "Realizzata a mano da un maestro pellicciaio fiorentino. Pelle bovina conciata al vegetale, rifinita a cera d'api. Con il tempo si patina e diventa unica come chi la porta.",
    descriptionEn:
      "Handmade by a Florentine master leatherworker. Vegetable-tanned cowhide, beeswax finished. Over time it patinas and becomes as unique as the person who carries it.",
    materials: "Pelle bovina conciata al vegetale. Fodera in cotone. Manico in cuoio.",
    materialsEn: "Vegetable-tanned cowhide. Cotton lining. Leather handle.",
    img: "https://images.unsplash.com/photo-1591561954555-607968c989ab?w=800&h=1100&fit=crop&auto=format",
    imgs: [
      "https://images.unsplash.com/photo-1598102708939-e59369cb54f6?w=400&h=500&fit=crop&auto=format",
    ],
    alt: "Artisan leather bag",
    isNew: false,
  },
};

const fallbackProduct = {
  name: "Prodotto",
  nameEn: "Product",
  category: "Collezione",
  categoryEn: "Collection",
  price: "€ —",
  description: "Prodotto artigianale della nostra bottega fiorentina.",
  descriptionEn: "Artisan product from our Florentine workshop.",
  materials: "Materiali naturali, lavorati a mano.",
  materialsEn: "Natural materials, handcrafted.",
  img: "https://images.unsplash.com/photo-1585131609775-8eecc878fdfc?w=800&h=1100&fit=crop&auto=format",
  imgs: [],
  alt: "Product",
  isNew: false,
};

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useOutletContext<LangContext>();
  const product = (id && productData[id]) ? productData[id] : fallbackProduct;

  const t = {
    back: lang === "it" ? "Torna alla collezione" : "Back to collection",
    whatsapp: lang === "it" ? "Richiedi via WhatsApp" : "Enquire via WhatsApp",
    instagram: lang === "it" ? "Scrivi su Instagram" : "Message on Instagram",
    materials: lang === "it" ? "Materiali & Cura" : "Materials & Care",
    shipping: lang === "it" ? "Spedizione & Resi" : "Shipping & Returns",
    shippingText: lang === "it"
      ? "Spedizione gratuita in Italia sopra €200. Reso entro 14 giorni. Per ordini internazionali contattaci via WhatsApp."
      : "Free shipping in Italy over €200. Returns within 14 days. For international orders, contact us via WhatsApp.",
    customOrder: lang === "it" ? "Su misura disponibile" : "Custom orders available",
    customText: lang === "it"
      ? "Ogni capo può essere realizzato su misura. Contattaci per maggiori informazioni."
      : "Every piece can be made to measure. Contact us for more information.",
    isNew: lang === "it" ? "Novità" : "New",
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-6">
        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
          <Link
            to="/collezione"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--muted-foreground)",
              fontWeight: 400,
            }}
          >
            <ArrowLeft size={13} />
            {t.back}
          </Link>
          <ChevronRight size={12} color="var(--muted-foreground)" />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--muted-foreground)",
              fontWeight: 400,
            }}
          >
            {lang === "it" ? product.name : product.nameEn}
          </span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "3/4", backgroundColor: "var(--muted)" }}
            >
              <img
                src={product.img}
                alt={product.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {product.imgs.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {product.imgs.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden"
                    style={{ aspectRatio: "3/4", backgroundColor: "var(--muted)" }}
                  >
                    <img
                      src={img}
                      alt={`${product.alt} ${i + 2}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="lg:pt-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--muted-foreground)",
                  fontWeight: 700,
                }}
              >
                {lang === "it" ? product.category : product.categoryEn}
              </span>
              {product.isNew && (
                <span
                  className="px-2.5 py-0.5"
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
            </div>

            <h1
              className="mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 500,
                color: "var(--foreground)",
                lineHeight: 1.15,
              }}
            >
              {lang === "it" ? product.name : product.nameEn}
            </h1>

            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--foreground)",
              }}
            >
              {product.price}
            </p>

            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--muted-foreground)",
              }}
            >
              {lang === "it" ? product.description : product.descriptionEn}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mb-10">
              <a
                href="https://wa.me/390551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 transition-opacity hover:opacity-85"
                style={{
                  background: "var(--foreground)",
                  color: "var(--primary-foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                <MessageCircle size={16} />
                {t.whatsapp}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 transition-all hover:bg-secondary"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                <Instagram size={16} />
                {t.instagram}
              </a>
            </div>

            {/* Details accordion */}
            <div
              className="border-t py-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="mb-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                {t.materials}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                }}
              >
                {lang === "it" ? product.materials : product.materialsEn}
              </p>
            </div>

            <div
              className="border-t py-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="mb-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                {t.shipping}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                }}
              >
                {t.shippingText}
              </p>
            </div>

            <div
              className="border-t border-b py-5"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <p
                className="mb-1 px-4"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--accent)",
                }}
              >
                {t.customOrder}
              </p>
              <p
                className="px-4"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                }}
              >
                {t.customText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
