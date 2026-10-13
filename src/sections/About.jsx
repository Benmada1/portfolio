import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { languages } from '../data/profile.js';

export default function About() {
  return (
    <section id="apropos" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead number="01" label="À propos" id="about-title" title={<>Construire des outils qui <em>servent</em> au quotidien.</>} />

        <div className="about">
          <Reveal className="about__text">
            <p>
              Je suis développeur Full Stack junior, diplômé d’une licence en développement informatique et basé à
              Casablanca. Mon travail porte surtout sur des applications de gestion : stock, facturation, livraisons,
              parc informatique, ainsi que sur des sites e-commerce.
            </p>
            <p>
              Je m’intéresse à la conception logicielle autant qu’à l’écriture du code : comprendre le besoin, modéliser
              (UML), développer, tester puis déployer. J’utilise principalement Laravel et React, avec MySQL pour les
              données ; WordPress et WooCommerce lorsqu’un site e-commerce répond mieux au besoin.
            </p>
            <p>
              Mes stages chez SEPARATOR et EVOSOLUTION m’ont confronté à des contextes de travail réels. Je suis
              aujourd’hui ouvert aux opportunités d’emploi, de stage et aux missions freelance.
            </p>
          </Reveal>

          <Reveal className="about__aside" delay={80}>
            <h3 className="mini-title">Langues</h3>
            <dl className="facts">
              {languages.map((l) => (
                <div key={l.name} className="facts__row">
                  <dt>{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mini-title">Formation</h3>
            <dl className="facts">
              <div className="facts__row">
                <dt>Licence en développement informatique</dt>
                <dd>SUPEMIR</dd>
              </div>
              <div className="facts__row">
                <dt>Technicien spécialisé en développement informatique</dt>
                <dd>ITSUP</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
