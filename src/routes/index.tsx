import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Hammer, KeyRound, MapPin } from "lucide-react";
import heroEstate from "@/assets/hero-estate.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praedion Capital — Immobiliengesellschaft für den ländlichen Raum" },
      {
        name: "description",
        content:
          "Praedion Capital kauft, saniert und vermietet Wohn- und Geschäftsimobilien im ländlichen Raum. Werterhalt mit Substanz — diskret, hochwertig, nachhaltig.",
      },
      { property: "og:title", content: "Praedion Capital — Immobiliengesellschaft für den ländlichen Raum" },
      {
        property: "og:description",
        content:
          "Ankauf, Sanierung und Vermietung von Wohn- und Geschäftsimobilien im ländlichen Raum.",
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
    text: "Wir erwerben Wohn- und Geschäftshäuser mit Substanz — auch sanierungsbedürftig — und entwickeln sie mit einem klaren Konzept weiter.",
  },
  {
    icon: Hammer,
    title: "Sanierung",
    text: "Denkmalgerecht, energetisch durchdacht und mit hochwertigen Materialien: Wir bringen alte Bausubstanz zurück auf den Stand von heute.",
  },
  {
    icon: KeyRound,
    title: "Vermietung",
    text: "Sanierte Wohn- und Gewerbeflächen zu fairen Konditionen — langfristig vermietet und persönlich betreut.",
  },
];

const principles = [
  {
    title: "Substanz vor Trend",
    text: "Wir investieren in bestehende Gebäude mit Charakter — nicht in den nächsten Neubau. Jedes Haus hat eine Geschichte, die es zu bewahren gilt.",
  },
  {
    title: "Ländlicher Raum als Chance",
    text: "Dorfkern statt Ballungsrand: Wo andere Leerstand sehen, erkennen wir Wert — für die Menschen, die dort leben und arbeiten wollen.",
  },
  {
    title: "Langfristig denken",
    text: "Wir kaufen, um zu behalten. Unsere Immobilien werden instand gehalten, fair vermietet und über Generationen hinweg entwickelt.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-[0.18em] gold-text-gradient">
              PRAEDION
            </span>
            <span className="text-[0.65rem] font-light uppercase tracking-[0.45em] text-muted-foreground">
              Capital
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-light tracking-wide text-muted-foreground md:flex">
            <a href="#leistungen" className="transition-colors hover:text-gold">
              Leistungen
            </a>
            <a href="#ueber-uns" className="transition-colors hover:text-gold">
              Über uns
            </a>
            <a href="#prinzipien" className="transition-colors hover:text-gold">
              Prinzipien
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
          alt="Sorgfältig saniertes Landhaus in der Abenddämmerung"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
          <p className="eyebrow mb-5">Wohn- &amp; Geschäftsimobilien im ländlichen Raum</p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            Wir kaufen, sanieren
            <br />
            und <span className="italic gold-text-gradient">vermieten</span> —
            <br />
            mit Respekt vor der Substanz.
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
            Praedion Capital erwirbt Wohn- und Geschäftshäuser in ländlichen Regionen,
            bringt sie aufwendig auf Vordermann und vermietet sie langfristig —
            für lebendige Ortskerne und dauerhafte Werte.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm font-light tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Unsere Leistungen
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
              Drei Schritte von der alten Substanz zum lebendigen Haus.
            </h2>
            <div className="gold-rule mt-2" />
          </div>
          <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group flex flex-col gap-5 bg-card p-10 transition-colors hover:bg-accent"
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h3 className="font-display text-2xl font-medium">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-auto font-display text-sm italic text-gold/0 transition-all duration-300 group-hover:text-gold/80">
                  {title === "Ankauf"
                    ? "Auch erbschafts- oder teilmieterbestand"
                    : title === "Sanierung"
                      ? "Energetisch & denkmalgerecht"
                      : "Wohn- & Gewerbeflächen"}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <img
              src={interior}
              alt="Hochwertig sanierter Altbau-Innenraum"
              width={1600}
              height={1200}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 bg-ink-elevated px-8 py-20 sm:px-14">
            <p className="eyebrow">Über uns</p>
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              Wo andere Leerstand sehen, sehen wir Wert.
            </h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Praedion Capital ist eine auf den ländlichen Raum spezialisierte
              Immobiliengesellschaft. Wir erwerben Wohn- und Geschäftshäuser in
              Dörfern und Kleinstädten, sanieren sie mit Sorgfalt und hoher
              Qualität und vermieten sie langfristig an Mieter, die bleiben wollen.
            </p>
            <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Unser Anspruch ist schlicht: Gebäude, die seit Jahrzehnten das Ortsbild
              prägen, sollen es auch in den nächsten Jahrzehnten tun — belebt,
              instandgesetzt und wirtschaftlich tragfähig.
            </p>
            <div className="mt-4 flex items-center gap-3 text-gold">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-xs font-light uppercase tracking-[0.25em]">
                Fokus: Ländlicher Raum &amp; Kleinstädte
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Prinzipien */}
      <section id="prinzipien" className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col gap-4">
            <p className="eyebrow">Prinzipien</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              Woran wir uns messen lassen.
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
            Sie verkaufen ein Haus im ländlichen Raum?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Ob Mehrfamilienhaus, ehemalige Dorfwirtschaft oder Leerstand in bester
            Lage — melden Sie sich unverbindlich. Wir prüfen Ihr Objekt diskret und
            mit fundiertem Marktverständnis.
          </p>
          <a
            href="mailto:kontakt@praedion-capital.de"
            className="mt-10 inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
          >
            kontakt@praedion-capital.de
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-ink-elevated">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-xs font-light text-muted-foreground sm:flex-row">
          <span className="font-display text-base tracking-[0.18em] gold-text-gradient">
            PRAEDION <span className="text-muted-foreground">CAPITAL</span>
          </span>
          <nav className="flex gap-6">
            <a href="#leistungen" className="transition-colors hover:text-gold">
              Leistungen
            </a>
            <a href="#ueber-uns" className="transition-colors hover:text-gold">
              Über uns
            </a>
            <a href="#kontakt" className="transition-colors hover:text-gold">
              Kontakt
            </a>
          </nav>
          <span>© {new Date().getFullYear()} Praedion Capital</span>
        </div>
      </footer>
    </div>
  );
}
