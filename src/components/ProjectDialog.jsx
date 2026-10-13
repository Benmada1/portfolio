import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

/** Étude de cas : <dialog> natif (focus piégé, Échap, retour du focus gérés par le navigateur). */
export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.documentElement.classList.remove('no-scroll');
      if (dialog.open) dialog.close();
    };
  }, []);

  // Clic sur le fond (hors contenu) = fermeture
  const onBackdrop = (e) => {
    if (e.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={() => {
        // Ignore l'événement « close » déclenché par un simple re-montage (StrictMode en développement)
        if (ref.current && !ref.current.open) onClose();
      }}
      onClick={onBackdrop}
    >
      <div className="dialog__panel">
        <header className="dialog__head">
          <div>
            <p className="dialog__cat">{project.category}</p>
            <h2 id="dialog-title" className="dialog__title">
              {project.title}
            </h2>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <Icon name="close" size={22} />
            <span className="sr-only">Fermer l’étude de cas</span>
          </button>
        </header>

        <div className="dialog__content">
          <div className="dialog__text">
            {project.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="dialog__status">
              <strong>Statut :</strong> {project.status}
            </p>
          </div>

          <div className="dialog__facts">
            {project.features.length > 0 ? (
              <section aria-labelledby="dlg-features">
                <h3 id="dlg-features" className="dialog__h">
                  Fonctionnalités
                </h3>
                <ul className="check-list">
                  {project.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={16} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.tech.length > 0 ? (
              <section aria-labelledby="dlg-tech">
                <h3 id="dlg-tech" className="dialog__h">
                  Technologies
                </h3>
                <ul className="tags">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.url ? (
              <a className="btn btn--primary" href={project.url} target="_blank" rel="noopener noreferrer">
                Voir le projet
                <Icon name="external" size={18} />
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            ) : null}
          </div>
        </div>

        {project.screenshots.length > 0 ? (
          <section className="dialog__shots" aria-labelledby="dlg-shots">
            <h3 id="dlg-shots" className="dialog__h">
              Captures de l’application
            </h3>
            {project.screenshots.map((s) => (
              <figure key={s.src} className="shot">
                <img src={s.src} width={s.width} height={s.height} alt={s.alt} loading="lazy" decoding="async" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </section>
        ) : null}
      </div>
    </dialog>
  );
}
