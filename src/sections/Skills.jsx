import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { skillGroups } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="competences" className="section section--tint" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          number="02"
          label="Compétences"
          id="skills-title"
          title={<>Les technologies que <em>j’utilise</em>.</>}
          intro="Regroupées par domaine, telles qu’elles apparaissent dans mes projets et mon CV."
        />
        <div className="skills">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} className="skills__group" delay={(i % 3) * 70}>
              <h3 className="skills__title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
