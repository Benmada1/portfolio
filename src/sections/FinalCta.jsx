import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

export default function FinalCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Reveal className="container cta__inner">
        <h2 id="cta-title" className="cta__title">
          Un projet, un stage, un poste à pourvoir ?
        </h2>
        <p className="cta__text">
          Recruteurs, entreprises ou porteurs de projet : écrivez-moi. Je réponds avec plaisir aux propositions
          d’emploi, de stage et de missions freelance.
        </p>
        <div className="cta__actions">
          <a className="btn btn--whatsapp btn--lg" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Écrire sur WhatsApp
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
          <a className="btn btn--light btn--lg" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={20} />
            Envoyer un email
          </a>
          <a className="btn btn--text-light" href="#projets">
            Revoir les projets
            <Icon name="arrowRight" size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
