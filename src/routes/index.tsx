import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Hammer, KeyRound, MapPin } from "lucide-react";
import heroEstate from "@/assets/hero-estate.jpg";
import renovation from "@/assets/renovation.jpg";
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

const services = [
  {
    icon: Building2,
    title: "Ankauf",
    text: "Erwerb von Wohn- und Geschäftshäusern mit Sanierungsstau — auch mit Bestandsmietverträgen. Bewertung nach Ertragswertverfahren, Entscheidung kurzfristig.",
    tag: "Bewertung nach Ertragswert",
  },
  {
    icon: Hammer,
    title: "Sanierung",
    text: "Instandsetzung, Modernisierung und energetische Ertüchtigung nach dem Wirtschaftlichkeitsprinzip: Das Sanierungsmaß folgt Mietpotenzial und Werterhalt.",
    tag: "Wirtschaftlichkeitsprinzip",
  },
  {
    icon: KeyRound,
    title: "Vermietung",
    text: "Vermietung von Wohn- und Gewerbeflächen zu marktgerechten Konditionen. Ziel sind stabile Cashflows über lange Haltedauern.",
    tag: "Wohn- & Gewerbeflächen",
  },
];

const principles = [
  {
    title: "Bestand vor Neubau",
    text: "Sanierungsbedürftiger Bestand wird unter Wiederherstellungskosten gehandelt. Diese Differenz ist die Ausgangsrendite — im ländlichen Raum regelmäßig höher als im Ballungsgebiet.",
  },
  {
    title: "Unterbewertete Lagen",
    text: "Funktionierende Kleinstädte werden vom Kapitalmarkt systematisch übersehen. Wir kaufen dort, wo Ertragswerte niedrig sind und Leerstand noch umkehrbar bleibt.",
  },
  {
    title: "Haltedauer schlägt Zyklus",
    text: "Wir kaufen, um zu behalten. Lange Haltedauern amortisieren die Sanierungsinvestition, tragen Zins- und Marktzyklen und sichern den Ertrag über volle Nutzungszyklen.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <nav className="hidden items-center gap-8 text-sm font-light tracking-wide text-muted-foreground md:flex">
            <a href="#leistungen" className="transition-colors hover:text-gold">
              Leistungen
            </a>
            <a href="#unternehmen" className="transition-colors hover:text-gold">
              Unternehmen
            </a>
            <a href="#prinzipien" className="transition-colors hover:text-gold">
              Anlageansatz
            </a>
            <a
              href="#kontakt"
              className="border border-gold/60 px-4 py-1.5 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
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
            Vermietung zu marktgerechten Mieten — daraus entstehen planbare
            Cashflows und messbare Wertsteigerung.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Objekt anbieten
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#prinzipien"
              className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm font-light tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Unser Anlageansatz
            </a>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col gap-4">
            <p className="eyebrow">Leistungen</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              Erwerb, Sanierung, Vermietung — auf Ertragswert gerechnet.
            </h2>
            <div className="gold-rule mt-2" />
          </div>
          <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text, tag }) => (
              <article
                key={title}
                className="group flex flex-col gap-5 bg-card p-10 transition-colors hover:bg-accent"
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h3 className="font-display text-2xl font-medium">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-auto font-display text-sm italic text-gold/0 transition-all duration-300 group-hover:text-gold/80">
                  {tag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Unternehmen */}
      <section id="unternehmen" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <img
              src={renovation}
              alt="Wohn- und Geschäftshaus während der Fassadensanierung"
              width={1600}
              height={1200}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 bg-ink-elevated px-8 py-20 sm:px-14">
            <p className="eyebrow">Unternehmen</p>
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              Leerstand ist eine Renditefrage.
            </h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Praedion Capital ist ein auf den ländlichen Raum spezialisierter
              Bestandsinvestor. Wir erwerben Wohn- und Geschäftshäuser in
              Dörfern und Kleinstädten, ertüchtigen sie technisch und
              wirtschaftlich und führen sie der langfristigen Vermietung zu.
            </p>
            <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Das Modell ist einfach gerechnet: Erwerb unter
              Wiederherstellungskosten, Investition in Substanz und
              Energieeffizienz, Mietentwicklung durch Modernisierung — daraus
              entsteht planbarer Cashflow und messbare Wertsteigerung über
              die Haltedauer.
            </p>
            <div className="mt-4 flex items-center gap-3 text-gold">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-xs font-light uppercase tracking-[0.25em]">
                Fokus: Ländliche Lagen &amp; Kleinstädte
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Anlageansatz */}
      <section id="prinzipien" className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col gap-4">
            <p className="eyebrow">Anlageansatz</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              Drei Annahmen, aus denen unsere Rendite entsteht.
            </h2>
            <div className="gold-rule mt-2" />
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-4">
                <span className="font-display text-4xl italic text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-medium">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 border border-gold/25 bg-ink-elevated p-10 sm:p-12">
            <p className="eyebrow mb-4">Für Investoren</p>
            <p className="max-w-3xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Einen Player wie uns möchte man im Team haben: proaktive,
              zuverlässige und worttreue Umsetzung — geräusch- und
              störungsfrei. Vereinbarungsgemäßes Arbeiten ist für uns nicht
              nur Tugend, sondern bares Minimum; daraus entsteht verlässliche
              Rendite.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="relative overflow-hidden border-t border-border/60">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url(${heroEstate})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <p className="eyebrow mb-5">Kontakt</p>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
            Sie verkaufen ein Objekt im ländlichen Raum?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Objekte mit Instandhaltungsstau, Leerstand oder
            Bestandsmietverträgen sind für uns kein Hemmnis, sondern
            Ausgangspunkt: bewertet nach Ertragswert, diskret abgewickelt,
            kurzfristig entschieden. Wir arbeiten proaktiv, zuverlässig und
            worttreu — vereinbarungsgemäße Umsetzung ist für uns kein
            Anspruch, sondern bares Minimum. Kapitalanleger mit Interesse an
            gemeinsamen Erwerben erreichen uns unter denselben Kanälen.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:invest@praedion-capital.com"
              className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Objekt anbieten
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+4966317882090"
              className="inline-flex items-center gap-2 border border-border px-8 py-3.5 text-sm font-light tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              06631 788209-0
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-ink-elevated">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-xs font-light text-muted-foreground sm:flex-row">
          <Link to="/" className="flex items-center">
            <img
              src={logo.url}
              alt="Praedion Capital"
              width={1920}
              height={470}
              className="h-10 w-auto"
            />
          </Link>
          <span className="text-center sm:text-left">
            Praedion Capital GmbH · Schloßallee 5 · 36329 Romrod
          </span>
          <nav className="flex gap-6">
            <a href="#leistungen" className="transition-colors hover:text-gold">
              Leistungen
            </a>
            <a href="#unternehmen" className="transition-colors hover:text-gold">
              Unternehmen
            </a>
            <a href="#kontakt" className="transition-colors hover:text-gold">
              Kontakt
            </a>
            <Link to="/impressum" className="transition-colors hover:text-gold">
              Impressum
            </Link>
          </nav>
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
