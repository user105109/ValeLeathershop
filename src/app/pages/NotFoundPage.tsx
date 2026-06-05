import { Link, useOutletContext } from "react-router";

interface LangContext {
  lang: "it" | "en";
}

export function NotFoundPage() {
  const { lang } = useOutletContext<LangContext>();
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-6"
      style={{ paddingTop: "80px" }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "8rem",
            fontWeight: 400,
            color: "var(--muted)",
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 500,
            color: "var(--foreground)",
            marginBottom: "1rem",
          }}
        >
          {lang === "it" ? "Pagina non trovata" : "Page not found"}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "var(--muted-foreground)",
            marginBottom: "2rem",
          }}
        >
          {lang === "it"
            ? "La pagina che cerchi non esiste."
            : "The page you're looking for doesn't exist."}
        </p>
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "var(--primary-foreground)",
            background: "var(--foreground)",
            padding: "1rem 2.5rem",
            display: "inline-block",
          }}
        >
          {lang === "it" ? "Torna alla Home" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
}
