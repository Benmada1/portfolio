import { navLinks, profile } from '../data/profile.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p className="site-footer__meta">
            {profile.title}
            <br />
            {profile.location}
          </p>
        </div>

        <nav aria-label="Liens du pied de page">
          <p className="site-footer__label">Navigation</p>
          <ul className="site-footer__list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="site-footer__label">Liens professionnels</p>
          <ul className="site-footer__list">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li>
              <a href={profile.cv.href} download={profile.cv.downloadName}>
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__base">
        <p>© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
