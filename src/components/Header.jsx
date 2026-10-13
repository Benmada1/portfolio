import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { navLinks, profile } from '../data/profile.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('accueil');

  // Ombre discrète une fois la page défilée
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lien actif selon la section visible
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Échap ferme le menu ; défilement du fond bloqué pendant l'ouverture
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('no-scroll');
    };
  }, [open]);

  // Repasse en mode bureau : on referme le menu mobile
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container site-header__bar">
        <a className="brand" href="#accueil" onClick={close} aria-label="Ismail BENMADA — retour à l’accueil">
          Ismail <span>BENMADA</span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} id="menu-principal" aria-label="Navigation principale">
          <ul className="nav__list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link ${active === id ? 'is-active' : ''}`}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav__cta" href="#contact" onClick={close}>
            Me contacter
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
      </div>
      {/* Clic hors menu (mobile) */}
      {open ? <div className="nav-backdrop" onClick={close} aria-hidden="true" /> : null}
      <span className="sr-only">{profile.title}</span>
    </header>
  );
}
