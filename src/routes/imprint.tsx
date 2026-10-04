import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/praedion-logo-dark.png.asset.json";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Imprint — Praedion Capital GmbH" },
      {
        name: "description",
        content:
          "Imprint der Praedion Capital GmbH, Schloßallee 5, 36329 Romrod. Angaben gemäß § 5 DDG, Kontakt, Register- und Steuerdaten.",
      },
      { property: "og:title", content: "Imprint — Praedion Capital GmbH" },
      { property: "og:description", content: "Imprint der Praedion Capital GmbH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/imprint" }],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-ink/80">
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
          <Link
            to="/"
            className="text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-gold"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow mb-4">Rechtliches</p>
        <h1 className="font-display text-4xl font-medium sm:text-5xl">Imprint</h1>
        <div className="gold-rule mt-4 mb-12" />

        <div className="flex flex-col gap-10 text-sm font-light leading-relaxed">
          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="text-muted-foreground">
              Praedion Capital GmbH
              <br />
              Schloßallee 5
              <br />
              36329 Romrod
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">Kontakt</h2>
            <p className="text-muted-foreground">
              Telefon:{" "}
              <a href="tel:+4966317882090" className="text-foreground hover:text-gold">
                06631 788209-0
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:invest@praedion-capital.com"
                className="text-foreground hover:text-gold"
              >
                invest@praedion-capital.com
              </a>
              <br />
              Web: praedion-capital.com
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              Register &amp; Steuerdaten
            </h2>
            <p className="text-muted-foreground">
              Handelsregister: HRB 12467, Amtsgericht Gießen
              <br />
              USt-IdNr. gemäß § 27a UStG: DE461372687
              <br />
              Steuernummer: 1824103693
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              Vertretungsberechtigte Geschäftsführung
            </h2>
            <p className="text-muted-foreground">
              Maximilian Hill, Tugay Maden
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/60 bg-ink-elevated">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs font-light text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Praedion Capital GmbH</span>
          <Link to="/imprint" className="transition-colors hover:text-gold">
            Imprint
          </Link>
        </div>
      </footer>
    </div>
  );
}
