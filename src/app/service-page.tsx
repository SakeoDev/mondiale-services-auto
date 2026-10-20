
import { SITE } from "@/lib/site";

type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  points: readonly string[];
};

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="brand">
            <span className="brand-name">
              MONDIALE <span>SERVICES AUTO</span>
            </span>
            <span className="brand-caption">Assistance automobile</span>
          </a>

          <nav className="nav" aria-label="Navigation principale">
            <a href="/">Accueil</a>
            <a href="/remorquage">Remorquage</a>
            <a href="/transport-vehicule">Transport</a>
            <a href="/achat-vehicule">Achat de véhicules</a>
          </nav>

          <a className="button button-red button-small" href={SITE.phoneLink}>
            ☎ {SITE.phone}
          </a>
        </div>
      </header>

      <main>
        <section className="page-heading">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Fil d’Ariane">
              <a href="/">Accueil</a>
              <span>/</span>
              <span>{service.title}</span>
            </nav>

            <div className="eyebrow">Mondiale Services Auto</div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>

            <div className="hero-actions">
              <a className="button button-red" href={SITE.phoneLink}>
                ☎ Appeler le {SITE.phone}
              </a>
              <a className="button button-outline" href="/">
                Retour à l’accueil
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container service-detail-grid">
            <div className="detail-copy">
              <h2>Comment se déroule votre demande ?</h2>
              <p>
                Chaque situation est différente. Contactez-nous avec les
                informations dont vous disposez pour discuter des modalités
                possibles et des prochaines étapes.
              </p>

              <ul className="detail-list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <aside className="detail-contact">
              <div className="eyebrow">Contact direct</div>
              <h2>Parlons de votre besoin.</h2>
              <p>
                Présentez-nous votre demande par téléphone. Nous pourrons
                échanger sur votre situation et les modalités possibles.
              </p>
              <a className="button button-red" href={SITE.phoneLink}>
                ☎ {SITE.phone}
              </a>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </div>
          <nav className="footer-links" aria-label="Liens de pied de page">
            <a href="/">Accueil</a>
            <a href="/remorquage">Remorquage</a>
            <a href="/transport-vehicule">Transport</a>
            <a href="/achat-vehicule">Achat automobile</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
