import { c as createComponent } from './astro-component_CgfNjWCw.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_USGmZJpa.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_CtyE0HYh.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Support & Contact - Point.ml", "description": "Contactez le support technique de Point.ml pour toute question sur la configuration DNS, le rachat de domaine ou la gestion de compte." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content"> <div class="page-intro"> <div class="container"> <nav class="breadcrumbs" aria-label="Fil d'Ariane"> <a href="/">Accueil</a> &gt; <span>Contact</span> </nav> <h1>Support & Contact Client</h1> </div> </div> <section class="section" style="background-color: var(--color-white);"> <div class="container"> <div class="grid-2"> <!-- Contact Form --> <div> <h2 style="font-size: 1.4rem; margin-bottom: 20px; color: var(--color-primary-dark);">Soumettre un Ticket d'Assistance</h2> <form id="contactForm" style="display: flex; flex-direction: column; gap: 16px;"> <div class="form-group"> <label for="contactEmail" class="form-label">Adresse E-mail *</label> <input type="email" id="contactEmail" class="form-control" required> </div> <div class="form-group"> <label for="contactDomain" class="form-label">Nom de domaine concerné (facultatif)</label> <input type="text" id="contactDomain" class="form-control" placeholder="exemple.ml"> </div> <div class="form-group"> <label for="contactSubject" class="form-label">Sujet du ticket *</label> <select id="contactSubject" class="form-control" required> <option value="">Sélectionnez une catégorie</option> <option value="dns">Problème de propagation / Zone DNS</option> <option value="transfer">Transfert de domaine</option> <option value="auth">Accès au compte / Récupération</option> <option value="abuse">Signalement d'abus / Phishing</option> <option value="other">Autre question technique</option> </select> </div> <div class="form-group"> <label for="contactMessage" class="form-label">Description du problème *</label> <textarea id="contactMessage" class="form-control" style="min-height: 150px;" required></textarea> </div> <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Envoyer le ticket</button> </form> <div id="contactSuccess" style="display: none; margin-top: 16px; padding: 16px; background-color: rgba(17, 169, 59, 0.15); border-left: 4px solid var(--color-success); border-radius: var(--radius-sm); color: #0b5e20;">
Votre ticket de support a bien été enregistré. Notre équipe d'administration réseau vous répondra sous 24 heures ouvrées.
</div> </div> <!-- Fixed Details --> <div> <h2 style="font-size: 1.4rem; margin-bottom: 20px; color: var(--color-primary-dark);">Coordonnées du Bureau d'Enregistrement</h2> <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 24px; line-height: 1.6;">
Pour toute question d'ordre administratif ou juridique concernant la charte de nommage ou le blocage légal de domaines, vous pouvez vous adresser directement à l'autorité délégataire du ccTLD .ml :
</p> <div style="background-color: var(--color-light); border: 1px solid var(--color-border); padding: 24px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 16px;"> <div> <strong style="color: var(--color-primary-dark); display: block; margin-bottom: 4px;">AGETIC Mali (Direction Générale)</strong> <p style="font-size: 0.9rem; color: var(--color-text-muted);">
Bibliothèque Nationale, ACI 2000, Bamako, Mali
</p> </div> <div> <strong style="color: var(--color-primary-dark); display: block; margin-bottom: 4px;">Assistance Téléphonique</strong> <p style="font-size: 0.9rem; color: var(--color-text-muted);">
Du lundi au vendredi : 08h00 — 16h00 (heure locale)<br>
Téléphone : +223 20 23 04 04
</p> </div> <div> <strong style="color: var(--color-primary-dark); display: block; margin-bottom: 4px;">Signalement d'Abus (Spam, Phishing, Malware)</strong> <p style="font-size: 0.9rem; color: var(--color-text-muted);">
Pour signaler un nom de domaine .ml hébergeant du contenu illicite, envoyez un e-mail à :<br> <a href="mailto:abuse@point.ml" style="color: var(--color-accent); font-weight: 600;">abuse@point.ml</a> </p> </div> </div> </div> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
