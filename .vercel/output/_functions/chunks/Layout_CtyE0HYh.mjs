import { c as createComponent } from './astro-component_CgfNjWCw.mjs';
import 'piccolore';
import { p as createRenderInstruction, m as maybeRenderHead, k as renderTemplate, h as addAttribute, q as renderHead, o as renderComponent, v as renderSlot } from './entrypoint_USGmZJpa.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Barre du Drapeau National Malien -->${maybeRenderHead()}<div class="drapeau-bar" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="drapeau-vert" data-astro-cid-3ef6ksr2></div> <div class="drapeau-jaune" data-astro-cid-3ef6ksr2></div> <div class="drapeau-rouge" data-astro-cid-3ef6ksr2></div> </div> <!-- Barre Gouvernementale Administrative --> <div class="gov-bar" data-astro-cid-3ef6ksr2> <div class="container gov-bar-content" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2>RÉPUBLIQUE DU MALI — REGISTRE NATIONAL INTERNET</div> <div class="gov-links" data-astro-cid-3ef6ksr2> <a href="https://agetic.gouv.ml" target="_blank" rel="noopener noreferrer" class="gov-link" data-astro-cid-3ef6ksr2>AGETIC</a> <span style="opacity: 0.3;" data-astro-cid-3ef6ksr2>|</span> <a href="https://amrtp.ml" target="_blank" rel="noopener noreferrer" class="gov-link" data-astro-cid-3ef6ksr2>AMRTP</a> </div> </div> </div> <header class="main-header" data-astro-cid-3ef6ksr2> <div class="container header-container" data-astro-cid-3ef6ksr2> <a href="/" class="brand-logo" aria-label="Retour à l'accueil de Point.ml" data-astro-cid-3ef6ksr2> <div class="logo-text" data-astro-cid-3ef6ksr2>POINT<span data-astro-cid-3ef6ksr2>.ML</span></div> <div class="logo-sub" data-astro-cid-3ef6ksr2>Registre National du Domaine Malien</div> </a> <!-- Hamburger Button (Mobile) --> <button class="menu-toggle" id="menuToggle" aria-label="Ouvrir le menu de navigation" aria-expanded="false" aria-controls="mainNav" data-astro-cid-3ef6ksr2> <svg class="icon-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-3ef6ksr2> <line x1="3" y1="12" x2="21" y2="12" class="line-1" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="6" x2="21" y2="6" class="line-2" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="18" x2="21" y2="18" class="line-3" data-astro-cid-3ef6ksr2></line> </svg> </button> <!-- Navigation principale --> <nav class="main-nav" id="mainNav" aria-label="Menu principal" data-astro-cid-3ef6ksr2> <ul class="nav-list" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/" class="nav-link" data-astro-cid-3ef6ksr2>Rechercher</a></li> <li data-astro-cid-3ef6ksr2><a href="/#regles" class="nav-link" data-astro-cid-3ef6ksr2>Tarifs & Règles</a></li> <li data-astro-cid-3ef6ksr2><a href="/dashboard" class="nav-link" id="navDashboardLink" style="display: none;" data-astro-cid-3ef6ksr2>Mon Dashboard</a></li> <li data-astro-cid-3ef6ksr2><a href="/contact" class="nav-link" data-astro-cid-3ef6ksr2>Support & Contact</a></li> <li class="auth-section" data-astro-cid-3ef6ksr2> <!-- Dynamically toggled via script --> <a href="/connexion" class="btn btn-outline btn-sm" id="headerLoginBtn" data-astro-cid-3ef6ksr2>Espace Client</a> <div id="headerUserMenu" style="display: none; align-items: center; gap: 12px;" data-astro-cid-3ef6ksr2> <span id="headerUserEmail" style="font-size: 0.85rem; font-weight: 600; color: var(--color-accent);" data-astro-cid-3ef6ksr2></span> <button class="btn btn-outline btn-sm" id="headerLogoutBtn" data-astro-cid-3ef6ksr2>Déconnexion</button> </div> </li> </ul> </nav> </div> </header>  ${renderScript($$result, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container footer-container" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <div class="footer-logo" data-astro-cid-sz7xmlte>POINT<span data-astro-cid-sz7xmlte>.ML</span></div> <div class="footer-desc" data-astro-cid-sz7xmlte>
Registre officiel du domaine national de premier niveau (.ml) de la République du Mali. Administré par l'Agence des Technologies de l'Information et de la Communication (AGETIC).
</div> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <h3 class="footer-title" data-astro-cid-sz7xmlte>Ressources</h3> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/#rechercher" data-astro-cid-sz7xmlte>Enregistrer un domaine</a></li> <li data-astro-cid-sz7xmlte><a href="/#regles" data-astro-cid-sz7xmlte>Charte de nommage</a></li> <li data-astro-cid-sz7xmlte><a href="/connexion" data-astro-cid-sz7xmlte>Espace Client</a></li> <li data-astro-cid-sz7xmlte><a href="/contact" data-astro-cid-sz7xmlte>Support Technique</a></li> </ul> </div> <div class="footer-contact" data-astro-cid-sz7xmlte> <h3 class="footer-title" data-astro-cid-sz7xmlte>Autorité Administrative</h3> <p class="contact-info" data-astro-cid-sz7xmlte> <strong data-astro-cid-sz7xmlte>AGETIC Mali</strong><br data-astro-cid-sz7xmlte>
Bibliothèque Nationale, ACI 2000, Bamako
</p> <p class="contact-info" data-astro-cid-sz7xmlte> <strong data-astro-cid-sz7xmlte>Téléphone :</strong> +223 20 23 04 04
</p> </div> <div class="footer-partners" data-astro-cid-sz7xmlte> <h3 class="footer-title" data-astro-cid-sz7xmlte>Partenaires</h3> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="https://agetic.gouv.ml" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte>AGETIC</a></li> <li data-astro-cid-sz7xmlte><a href="https://amrtp.ml" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte>AMRTP (Régulateur)</a></li> <li data-astro-cid-sz7xmlte><a href="https://www.smtd.ml" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte>SMTD (Infrastructure)</a></li> </ul> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <div class="container footer-bottom-container" data-astro-cid-sz7xmlte> <div class="copyright-notice" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
&copy; 2026 Point.ml — Registre National du Domaine de Premier Niveau (.ml). Tous droits réservés.
</p> <p class="copyright-details" data-astro-cid-sz7xmlte>
La base de données WHOIS, la zone de registre DNS du ccTLD .ml, ainsi que l'ensemble des systèmes d'enregistrement et codes de programmation sous-jacents associés à Point.ml font l'objet d'une protection légale exclusive et d'une souveraineté numérique sous la juridiction de la République du Mali. Toute exploitation non autorisée, aspiration automatisée de données (WHOIS harvesting) ou tentative de perturbation des serveurs racines DNS nationaux est passible de poursuites judiciaires pénales.
</p> </div> <div class="footer-legal-links" data-astro-cid-sz7xmlte> <a href="/cgu" data-astro-cid-sz7xmlte>Conditions Générales d'Utilisation</a> <span class="separator" data-astro-cid-sz7xmlte>|</span> <a href="/confidentialite" data-astro-cid-sz7xmlte>Politique de Confidentialité</a> </div> </div> </div> </footer>`;
}, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/components/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Point.ml — Registre National du Domaine Internet du Mali",
    description = "Enregistrez et gérez vos noms de domaine nationaux en .ml. Solution souveraine d'identité numérique administrée par l'AGETIC, République du Mali."
  } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${renderHead()}</head> <body> <a href="#main-content" class="sr-only">Passer au contenu principal</a> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
