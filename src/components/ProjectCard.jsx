import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

/** Visuel de carte : première capture authentique si elle existe, sinon composition typographique. */
function Cover({ project }) {
  const shot = project.screenshots[0];
  if (shot) {
    return (
      <img
        className="card__img"
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <div className="card__typo" aria-hidden="true">
      <span>{project.monogram || project.shortTitle.charAt(0)}</span>
    </div>
  );
}

export default function ProjectCard({ project, index, onOpen, buttonLabel = 'Étude de cas' }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <Reveal as="article" className="card" id={`projet-${project.id}`} delay={(index % 2) * 80}>
      <button
        type="button"
        className="card__media"
        onClick={() => onOpen(project.id)}
        aria-label={`${buttonLabel} : ${project.shortTitle}`}
      >
        <Cover project={project} />
      </button>

      <div className="card__body">
        <p className="card__meta">
          <span className="card__num">{number}</span>
          <span>{project.category}</span>
        </p>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__summary">{project.summary}</p>

        {project.tech.length > 0 ? (
          <ul className="tags" aria-label="Technologies">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ) : null}

        <p className="card__status">{project.status}</p>

        <div className="card__actions">
          <button type="button" className="btn btn--ghost" onClick={() => onOpen(project.id)}>
            {buttonLabel}
            <Icon name="arrowRight" size={18} />
          </button>
          {project.url ? (
            <a className="btn btn--primary" href={project.url} target="_blank" rel="noopener noreferrer">
              Voir le projet
              <Icon name="external" size={18} />
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
