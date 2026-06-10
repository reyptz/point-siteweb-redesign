import { c as createComponent } from './astro-component_CgfNjWCw.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_USGmZJpa.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_CtyE0HYh.mjs';

const $$Connexion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Espace Connexion & Inscription - Point.ml", "description": "Connectez-vous à votre espace client Point.ml ou créez un compte pour réserver et administrer vos noms de domaine .ml." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content"> <div class="page-intro"> <div class="container"> <nav class="breadcrumbs" aria-label="Fil d'Ariane"> <a href="/">Accueil</a> &gt; <span>Authentification</span> </nav> <h1>Espace Client Point.ml</h1> </div> </div> <section class="section" style="background-color: var(--color-white);"> <div class="container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 1000px; margin: 0 auto;"> <!-- Bloc 1: Connexion --> <div style="border-right: 1px solid var(--color-border); padding-right: 48px;"> <h2 style="font-size: 1.4rem; margin-bottom: 20px; color: var(--color-primary-dark);">Se Connecter</h2> <form id="loginForm"> <div class="form-group"> <label for="loginEmail" class="form-label">Adresse E-mail *</label> <input type="email" id="loginEmail" class="form-control" required> </div> <div class="form-group"> <label for="loginPassword" class="form-label">Mot de passe *</label> <input type="password" id="loginPassword" class="form-control" required> </div> <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Accéder à mon espace</button> </form> <div id="loginError" style="display: none; margin-top: 12px; font-size: 0.9rem; color: var(--color-danger); font-weight: 600;">
Identifiants incorrects ou compte inexistant.
</div> </div> <!-- Bloc 2: Inscription --> <div> <h2 style="font-size: 1.4rem; margin-bottom: 20px; color: var(--color-primary-dark);">Créer un Compte</h2> <form id="signupForm"> <div class="form-group"> <label for="signupEmail" class="form-label">Adresse E-mail *</label> <input type="email" id="signupEmail" class="form-control" required> </div> <div class="form-group"> <label for="signupPassword" class="form-label">Mot de passe *</label> <input type="password" id="signupPassword" class="form-control" minlength="6" required> </div> <div class="form-group"> <label for="signupConfirm" class="form-label">Confirmer le mot de passe *</label> <input type="password" id="signupConfirm" class="form-control" minlength="6" required> </div> <div class="form-group" style="display: flex; gap: 8px; align-items: flex-start;"> <input type="checkbox" id="signupAccept" style="margin-top: 4px;" required> <label for="signupAccept" style="font-size: 0.85rem; color: var(--color-text-muted);">
J'accepte la Charte de nommage du .ml et certifie l'exactitude des informations fournies. *
</label> </div> <button type="submit" class="btn btn-secondary" style="width: 100%;">Créer mon compte client</button> </form> <div id="signupError" style="display: none; margin-top: 12px; font-size: 0.9rem; color: var(--color-danger); font-weight: 600;">
Les mots de passe ne correspondent pas ou cet e-mail est déjà utilisé.
</div> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/connexion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/connexion.astro", void 0);

const $$file = "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Connexion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
