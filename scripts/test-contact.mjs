// Test de la logique du formulaire (validation, message, URL WhatsApp). Lancer : npm run test:contact
import assert from 'node:assert/strict';
import { validate, buildWhatsAppMessage, buildWhatsAppUrl, REQUEST_TYPES } from '../src/lib/contact.js';

const ok = {
  name: 'Sara Alami',
  email: 'sara@example.com',
  type: 'Projet freelance',
  budget: '5 000 MAD',
  message: 'Bonjour, je cherche un site avec catalogue & paiement à la livraison.\nMerci !',
};

// Validation
assert.deepEqual(validate(ok), {});
assert.deepEqual(Object.keys(validate({})).sort(), ['email', 'message', 'name', 'type']);
assert.ok(validate({ ...ok, email: 'pas-un-email' }).email);
assert.ok(validate({ ...ok, email: 'a@b' }).email);
assert.ok(validate({ ...ok, type: 'Autre chose' }).type);
assert.ok(validate({ ...ok, message: 'court' }).message);
assert.deepEqual(validate({ ...ok, budget: '' }), {}, 'le budget est facultatif');
assert.equal(REQUEST_TYPES.length, 6);

// Message
const msg = buildWhatsAppMessage(ok);
assert.ok(msg.startsWith('Bonjour Ismail,'));
assert.ok(msg.includes('Nom : Sara Alami'));
assert.ok(msg.includes('Budget indicatif : 5 000 MAD'));
assert.ok(!buildWhatsAppMessage({ ...ok, budget: '' }).includes('Budget'));

// URL
const url = buildWhatsAppUrl(ok);
assert.ok(url.startsWith('https://wa.me/212654110467?text='));
const decoded = decodeURIComponent(url.split('?text=')[1]);
assert.equal(decoded, msg, 'le texte encodé doit se décoder à l’identique (accents, &, retours à la ligne)');
assert.ok(!url.includes(' ') && !url.includes('\n'));

console.log('OK — logique du formulaire WhatsApp vérifiée.');
