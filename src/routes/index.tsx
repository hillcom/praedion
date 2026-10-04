import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Landmark } from "lucide-react";
import heroEstate from "@/assets/hero-estate.jpg";
import logo from "@/assets/praedion-logo-dark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praedion Capital — Bestand. Kapital. Konsequenz." },
      {
        name: "description",
        content:
          "Praedion Capital erwirbt Wohn- und Geschäftsimmobilien mit strukturellem Wertsteigerungspotenzial im ländlichen Raum und überführt sie in einen langfristig bewirtschafteten Bestand.",
      },
      { property: "og:title", content: "Praedion Capital — Bestand. Kapital. Konsequenz." },
      {
        property: "og:description",
        content:
          "Erwerb, Repositionierung und langfristige Bestandshaltung von Wohn- und Geschäftsimmobilien im ländlichen Raum.",
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
          <nav className="flex items-center">
            <a
              href="mailto:invest@praedion-capital.com"
              className="border border-gold/60 px-4 py-1.5 text-sm font-light tracking-wide text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <img
          src={heroEstate}
          alt="Wohn- und Geschäftshaus in einer Kleinstadt am Abend"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
          <p className="eyebrow mb-5">Praedion Capital · Investmentstrategie Bestand</p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
            Kapital folgt nicht
            <br className="hidden sm:block" /> dem Konsens.
            <br />
            <span className="italic gold-text-gradient">Sondern der Opportunität.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
            Wir erwerben Wohn- und Geschäftsimmobilien mit strukturellem
            Wertsteigerungspotenzial, repositionieren sie und überführen diese
            anschließend in einen langfristig bewirtschafteten Bestand.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:invest@praedion-capital.com?subject=Immobilie%20anbieten"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Immobilie anbieten
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:invest@praedion-capital.com?subject=Kapitalpartnerschaft"
              className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm font-light tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <Landmark className="h-4 w-4" />
              Für Kapitalpartner
            </a>
          </div>
        </div>
      </section>

      {/* Statements */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-24">
          <p className="font-display text-3xl font-medium leading-snug sm:text-4xl">
            Der ländliche Raum ist kein Kompromiss.
            <br />
            <span className="italic gold-text-gradient">
              Er ist unsere Investmentthese.
            </span>
          </p>

          <div className="gold-rule" />

          <div className="flex flex-col gap-6 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            <p className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Kapitalmärkte lieben Narrative.{" "}
              <span className="italic text-gold">Wir bevorzugen Fundamentaldaten.</span>
            </p>
            <p className="max-w-2xl">
              Während sich Kapital in den Metropolen um offensichtliche Assets
              konzentriert, richtet sich unser Fokus auf Märkte mit geringerer
              institutioneller Aufmerksamkeit und entsprechend anderen
              Einstiegsparametern.
            </p>
          </div>

          <div className="gold-rule" />

          <p className="font-display text-3xl font-medium leading-snug sm:text-4xl">
            Wir suchen keine Lage, die sich selbst erklärt.
            <br />
            <span className="italic gold-text-gradient">
              Wir suchen Lagen, die sich rechnen.
            </span>
          </p>
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
          <Link to="/imprint" className="transition-colors hover:text-gold">
            Imprint
          </Link>
        </div>
        <div className="border-t border-border/40">
          <div className="mx-auto px-6 py-4 text-[0.65rem] font-light text-muted-foreground/70">
            <span className="block text-center">
              © {new Date().getFullYear()} Praedion Capital GmbH
            </span>
          </div>
        </div>
        </footer>
    </div>
  );
}
