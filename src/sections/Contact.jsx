import { useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { profile } from '../data/profile.js';
import { LIMITS, REQUEST_TYPES, buildWhatsAppUrl, validate } from '../lib/contact.js';

const EMPTY = { name: '', email: '', type: '', budget: '', message: '' };
const ORDER = ['name', 'email', 'type', 'message'];

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [waUrl, setWaUrl] = useState('');
  const formRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Efface l'erreur du champ dès qu'on le corrige
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setWaUrl('');
      const first = ORDER.find((k) => found[k]);
      const el = formRef.current?.elements?.namedItem(first);
      if (el && typeof el.focus === 'function') el.focus();
      return;
    }
    // Aucun envoi automatique : on ouvre WhatsApp avec le message prérempli.
    const url = buildWhatsAppUrl(values);
    setWaUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const errorList = ORDER.filter((k) => errors[k]);
  const field = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `f-${name}-err` : undefined,
  });
  const err = (name) =>
    errors[name] ? (
      <p className="field__error" id={`f-${name}-err`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead
          number="05"
          label="Contact"
          id="contact-title"
          title={<>Parlons de votre <em>projet</em>.</>}
          intro="Emploi, stage ou mission freelance : écrivez-moi directement, ou préparez votre message ci-dessous."
        />

        <div className="contact">
          <Reveal className="contact__info">
            <ul className="contact__list">
              <li>
                <Icon name="mail" />
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <span className="contact__label">Téléphone</span>
                  <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <Icon name="whatsapp" />
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {profile.phoneDisplay}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </div>
              </li>
              <li>
                <Icon name="linkedin" />
                <div>
                  <span className="contact__label">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    ismail-benmada
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </div>
              </li>
              <li>
                <Icon name="github" />
                <div>
                  <span className="contact__label">GitHub</span>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    github.com/Benmada1
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </div>
              </li>
              <li>
                <Icon name="pin" />
                <div>
                  <span className="contact__label">Localisation</span>
                  <span>{profile.location}</span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="contact__formwrap" delay={80}>
            <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-labelledby="form-title">
              <h3 id="form-title" className="form__title">
                Préparer ma demande sur WhatsApp
              </h3>

              {errorList.length > 0 ? (
                <div className="form__summary" role="alert">
                  <p>Merci de corriger {errorList.length > 1 ? 'les champs suivants' : 'le champ suivant'} :</p>
                  <ul>
                    {errorList.map((k) => (
                      <li key={k}>
                        <a href={`#f-${k}`}>{errors[k]}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="field">
                <label htmlFor="f-name">Nom complet</label>
                <input type="text" autoComplete="name" maxLength={LIMITS.name} required {...field('name')} />
                {err('name')}
              </div>

              <div className="field">
                <label htmlFor="f-email">Adresse email</label>
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={LIMITS.email}
                  required
                  {...field('email')}
                />
                {err('email')}
              </div>

              <div className="field">
                <label htmlFor="f-type">Type de demande</label>
                <select required {...field('type')}>
                  <option value="">Choisir…</option>
                  {REQUEST_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {err('type')}
              </div>

              <div className="field">
                <label htmlFor="f-budget">
                  Budget indicatif <span className="field__opt">(facultatif)</span>
                </label>
                <input type="text" maxLength={LIMITS.budget} placeholder="Ex. 5 000 MAD" {...field('budget')} />
              </div>

              <div className="field">
                <label htmlFor="f-message">Description du besoin</label>
                <textarea rows={5} maxLength={LIMITS.message} required {...field('message')} />
                {err('message')}
              </div>

              <button type="submit" className="btn btn--whatsapp btn--lg">
                <Icon name="whatsapp" size={20} />
                Envoyer ma demande sur WhatsApp
              </button>

              <p className="form__note" aria-live="polite">
                {waUrl ? (
                  <>
                    WhatsApp s’ouvre avec votre message prérempli : il ne sera envoyé qu’après votre confirmation dans
                    WhatsApp. Rien ne s’est ouvert ?{' '}
                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                      Ouvrir WhatsApp
                    </a>
                    .
                  </>
                ) : (
                  'Ce formulaire prépare simplement un message WhatsApp : rien n’est envoyé ni enregistré tant que vous ne confirmez pas dans WhatsApp.'
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
