import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { education, internships } from '../data/experience.js';

export default function Experience({ onOpen }) {
  return (
    <section id="experiences" className="section section--tint" aria-labelledby="exp-title">
      <div className="container">
        <SectionHead
          number="04"
          label="Formation et expériences"
          id="exp-title"
          title={<>Parcours et <em>stages</em>.</>}
        />

        <div className="exp">
          <Reveal className="exp__col">
            <h3 className="mini-title">Expériences</h3>
            <ol className="timeline">
              {internships.map((item) => (
                <li key={item.company} className="timeline__item">
                  <p className="timeline__meta">
                    {item.role} · {item.place}
                  </p>
                  <h4 className="timeline__title">{item.company}</h4>
                  <p className="timeline__mission">{item.mission}</p>
                  <ul className="dash-list">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <button type="button" className="btn btn--text" onClick={() => onOpen(item.projectId)}>
                    Voir la réalisation
                    <Icon name="arrowRight" size={18} />
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="exp__col" delay={80}>
            <h3 className="mini-title">Formation</h3>
            <ol className="timeline">
              {education.map((item) => (
                <li key={item.title} className="timeline__item">
                  <p className="timeline__meta">{item.period}</p>
                  <h4 className="timeline__title">{item.title}</h4>
                  <p className="timeline__mission">{item.place}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
