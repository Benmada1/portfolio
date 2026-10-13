import Icon from '../components/Icon.jsx';
import { profile } from '../data/profile.js';
import { featuredProjects } from '../data/projects.js';

export default function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__kicker">
            {profile.title} · {profile.location}
          </p>
          <h1 id="hero-title" className="hero__title">
            Ismail
            <br />
            <em>BENMADA</em>
          </h1>
          <p className="hero__lead">
            Je conçois et développe des applications web et des solutions de gestion qui répondent à des besoins
            concrets. Du développement Full Stack aux plateformes e-commerce, je transforme les idées en outils
            numériques fonctionnels.
          </p>
          <p className="hero__open">Ouvert aux opportunités d’emploi, de stage et aux missions freelance.</p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#projets">
              Découvrir mes projets
              <Icon name="arrowDown" size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#contact">
              Me contacter
            </a>
            <a className="btn btn--text" href={profile.cv.href} download={profile.cv.downloadName}>
              <Icon name="download" size={18} />
              Télécharger mon CV
            </a>
          </div>

          <ul className="hero__links" aria-label="Profils professionnels">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={20} />
                GitHub<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={20} />
                LinkedIn<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>

        <aside className="hero__index" aria-label="Index des réalisations">
          <p className="hero__index-label">Réalisations</p>
          <ol>
            {featuredProjects.map((p, i) => (
              <li key={p.id}>
                <a href={`#projet-${p.id}`}>
                  <span className="hero__index-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="hero__index-name">{p.shortTitle}</span>
                  <span className="hero__index-cat">{p.category}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
