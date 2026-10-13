import { profile } from '../data/profile.js';

export const REQUEST_TYPES = [
  'Emploi',
  'Stage',
  'Projet freelance',
  'Création de site web',
  'Application web ou ERP',
  'Autre demande',
];

export const LIMITS = { name: 100, email: 120, budget: 60, message: 1200 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Retourne un objet { champ: message } ; vide si tout est valide. */
export function validate(values) {
  const errors = {};
  const name = (values.name || '').trim();
  const email = (values.email || '').trim();
  const type = (values.type || '').trim();
  const message = (values.message || '').trim();

  if (!name) errors.name = 'Indiquez votre nom complet.';
  else if (name.length < 2) errors.name = 'Le nom doit comporter au moins 2 caractères.';

  if (!email) errors.email = 'Indiquez votre adresse email.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Cette adresse email ne semble pas valide (exemple : nom@domaine.com).';

  if (!type) errors.type = 'Choisissez un type de demande.';
  else if (!REQUEST_TYPES.includes(type)) errors.type = 'Choisissez un type de demande dans la liste.';

  if (!message) errors.message = 'Décrivez brièvement votre besoin.';
  else if (message.length < 10) errors.message = 'Ajoutez quelques précisions (au moins 10 caractères).';

  return errors;
}

/** Message WhatsApp en français, construit à partir des champs saisis. */
export function buildWhatsAppMessage(values) {
  const lines = [
    'Bonjour Ismail,',
    '',
    'Je vous écris depuis votre portfolio.',
    '',
    `Nom : ${values.name.trim()}`,
    `Email : ${values.email.trim()}`,
    `Type de demande : ${values.type.trim()}`,
  ];
  const budget = (values.budget || '').trim();
  if (budget) lines.push(`Budget indicatif : ${budget}`);
  lines.push('', 'Mon besoin :', values.message.trim());
  return lines.join('\n');
}

/** URL wa.me avec texte encodé. */
export function buildWhatsAppUrl(values) {
  return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(values))}`;
}
