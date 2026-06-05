import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Root() {
  const [lang, setLang] = useState<"it" | "en">("it");

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-body)" }}
    >
      <ScrollRestoration />
      <Navbar lang={lang} onLangToggle={() => setLang((l) => (l === "it" ? "en" : "it"))} />
      <main className="flex-1">
        <Outlet context={{ lang }} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
