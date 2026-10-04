import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/praedion-logo-dark.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Praedion Capital GmbH" },
      {
        name: "description",
        content:
          "Privacy Policy der Praedion Capital GmbH, Schloßallee 5, 36329 Romrod. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
      },
      { property: "og:title", content: "Privacy Policy — Praedion Capital GmbH" },
      {
        property: "og:description",
        content:
          "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
        <h1 className="font-display text-4xl font-medium sm:text-5xl">Privacy Policy</h1>
        <div className="gold-rule mt-4 mb-12" />

        <div className="flex flex-col gap-10 text-sm font-light leading-relaxed">
          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              1. Verantwortlicher
            </h2>
            <p className="text-muted-foreground">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3 text-muted-foreground">
              Praedion Capital GmbH
              <br />
              Schloßallee 5
              <br />
              36329 Romrod
              <br />
              Deutschland
              <br />
              <br />
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
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-muted-foreground">
              Beim Aufrufen unserer Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles
              gespeichert, die Ihr Browser automatisch übermittelt. Dies sind
              insbesondere:
            </p>
            <ul className="mt-3 list-disc pl-5 text-muted-foreground">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (gekürzt bzw. anonymisiert, soweit möglich)</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt
              und nach kurzer Zeit automatisch gelöscht. Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus unserem
              berechtigten Interesse am stabilen und sicheren Betrieb der
              Website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              3. Kontaktaufnahme
            </h2>
            <p className="text-muted-foreground">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
              die von Ihnen übermittelten Daten (Name, E-Mail-Adresse, Inhalt
              der Anfrage) ausschließlich zur Bearbeitung Ihrer Anfrage sowie
              für den Fall von Anschlussfragen. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6
              Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für
              die Zweckerreichung nicht mehr erforderlich sind und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              4. Cookies und Tracking
            </h2>
            <p className="text-muted-foreground">
              Diese Website verwendet keine Cookies zu Analyse- oder
              Marketingzwecken und bindet keine Tracking-Dienste Dritter ein.
              Es werden keine Nutzungsprofile erstellt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              5. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-muted-foreground">Sie haben das Recht:</p>
            <ul className="mt-3 list-disc pl-5 text-muted-foreground">
              <li>
                gemäß Art. 15 DSGVO Auskunft über Ihre bei uns verarbeiteten
                personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger
                oder Vervollständigung Ihrer bei uns gespeicherten
                personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
                personenbezogenen Daten zu verlangen, soweit keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen;
              </li>
              <li>
                gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem
                gängigen, maschinenlesbaren Format zu erhalten oder die
                Übermittlung an einen anderen Verantwortlichen zu verlangen;
              </li>
              <li>
                sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu
                beschweren, insbesondere in dem Mitgliedstaat Ihres
                gewöhnlichen Aufenthaltsorts. Zuständige Aufsichtsbehörde ist
                der Hessische Beauftragte für Datenschutz und
                Informationsfreiheit.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              6. Widerspruchsrecht
            </h2>
            <p className="text-muted-foreground">
              Soweit Ihre personenbezogenen Daten auf Grundlage von berechtigten
              Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeitet werden, haben
              Sie gemäß Art. 21 DSGVO das Recht, Widerspruch gegen die
              Verarbeitung einzulegen, soweit dafür Gründe vorliegen, die sich
              aus Ihrer besonderen Situation ergeben. Richten Sie Ihren
              Widerspruch formlos an die oben genannte E-Mail-Adresse.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              7. Datensicherheit
            </h2>
            <p className="text-muted-foreground">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen
              ein, um Ihre Daten gegen Manipulation, Verlust und unbefugten
              Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden
              entsprechend der technologischen Entwicklung fortlaufend
              verbessert. Die Website wird ausschließlich verschlüsselt via
              TLS/HTTPS ausgeliefert.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium">
              8. Aktualität dieser Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              Diese Datenschutzerklärung hat den Stand Oktober 2026. Durch die
              Weiterentwicklung unserer Website oder aufgrund geänderter
              gesetzlicher Vorgaben kann es notwendig werden, diese Privacy
              Policy anzupassen.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/60 bg-ink-elevated">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs font-light text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Praedion Capital GmbH</span>
          <div className="flex items-center gap-6">
            <Link to="/imprint" className="transition-colors hover:text-gold">
              Imprint
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
