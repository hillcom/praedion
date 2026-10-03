import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroEstate from "@/assets/hero-estate.jpg";
import logo from "@/assets/praedion-logo-dark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praedion Capital — Rendite aus Bestandsimmobilien im ländlichen Raum" },
      {
        name: "description",
        content:
          "Praedion Capital erwirbt, saniert und vermietet Wohn- und Geschäftshäuser im ländlichen Raum — renditeorientiert, nach Ertragswert bewertet, langfristig gehalten.",
      },
      { property: "og:title", content: "Praedion Capital — Rendite aus Bestandsimmobilien im ländlichen Raum" },
      {
        property: "og:description",
        content:
          "Renditeorientierter Erwerb, Sanierung und Vermietung von Wohn- und Geschäftshäusern im ländlichen Raum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center">
            <img
              src={logo.url}
              alt="Praedion Capital"
              width={1920}
              height={470}
              className="h-9 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-8 text-sm font-light tracking-wide text-muted-foreground">
            <a href="mailto:invest@praedion-capital.com" className="hidden transition-colors hover:text-gold sm:inline">
              invest@praedion-capital.com
            </a>
            <a
              href="mailto:invest@praedion-capital.com"
              className="border border-gold/60 px-4 py-1.5 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-1 items-end overflow-hidden">
        <img
          src={heroEstate}
          alt="Wohn- und Geschäftshaus in einer Kleinstadt am Abend"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
          <p className="eyebrow mb-5">Wohn- &amp; Geschäftsimobilien im ländlichen Raum</p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            Wir erwerben, sanieren
            <br />
            und <span className="italic gold-text-gradient">vermieten</span> —
            <br />
            renditeorientiert.
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
            Praedion Capital investiert in Wohn- und Geschäftshäuser mit
            Instandhaltungsstau: Erwerb unter Ertragswert, gezielte Sanierung,
            Vermietung zu marktgerechten Mieten.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:invest@praedion-capital.com"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Objekt anbieten
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+4966317882090"
              className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm font-light tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              06631 788209-0
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-ink-elevated">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs font-light text-muted-foreground sm:flex-row">
          <Link to="/" className="flex items-center">
            <img
              src={logo.url}
              alt="Praedion Capital"
              width={1920}
              height={470}
              className="h-8 w-auto"
            />
          </Link>
          <span className="text-center sm:text-left">
            Praedion Capital GmbH · Schloßallee 5 · 36329 Romrod
          </span>
          <Link to="/impressum" className="transition-colors hover:text-gold">
            Impressum
          </Link>
        </div>
        <div className="border-t border-border/40">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-[0.65rem] font-light text-muted-foreground/70 sm:flex-row">
            <span>© {new Date().getFullYear()} Praedion Capital GmbH</span>
            <span>USt-IdNr. DE461372687 · HRB 12467 Amtsgericht Gießen</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
