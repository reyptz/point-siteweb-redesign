import { c as createComponent } from './astro-component_BbPsvHh3.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_BuI4g7My.mjs';
import { $ as $$Layout } from './Layout_DJOPlI1U.mjs';

const $$Confidentialite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Politique de Confidentialité - Point.ml", "description": "Consultez notre politique de confidentialité des données, l'anonymisation WHOIS et la conformité à la loi malienne de protection des données." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content"> <div class="page-intro"> <div class="container"> <nav class="breadcrumbs" aria-label="Fil d'Ariane"> <a href="/">Accueil</a> &gt; <span>Confidentialité</span> </nav> <h1>Politique de Confidentialité</h1> </div> </div> <section class="section" style="background-color: var(--color-white);"> <div class="container"> <div style="max-width: 800px; line-height: 1.8;"> <h2>1. Protection des données des titulaires de domaine</h2> <p style="margin-bottom: 20px;">
L'administration de Point.ml est soumise à la <strong>Loi N°2013-015 du 21 mai 2013 portant protection des données à caractère personnel en République du Mali</strong>. Nous veillons à ce que les informations collectées lors de l'enregistrement de domaines soient traitées de manière sécurisée et confidentielle.
</p> <h2 style="margin-top: 30px;">2. Données collectées lors de l'enregistrement (WHOIS)</h2> <p style="margin-bottom: 20px;">
Pour enregistrer un nom de domaine en .ml, la charte de nommage exige la collecte des informations de contact suivantes :
</p> <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; padding-left: 20px; list-style-type: square;"> <li>Adresse e-mail du titulaire (utilisée pour l'authentification et l'envoi de confirmations techniques).</li> <li>Identifiants de serveurs de noms (NS).</li> <li>Enregistrements DNS saisis par l'utilisateur.</li> </ul> <p style="margin-bottom: 20px;">
Par défaut, pour les personnes physiques, les données de contact sont masquées dans l'annuaire WHOIS public (anonymisation WHOIS) afin de prévenir le spamming et le harcèlement.
</p> <h2 style="margin-top: 30px;">3. Utilisation et transmission des données</h2> <p style="margin-bottom: 20px;">
Les données ne sont en aucun cas vendues, cédées ou divulguées à des fins de prospection commerciale. Elles ne sont partagées avec des tiers que dans les cas prévus par la loi :
</p> <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; padding-left: 20px; list-style-type: square;"> <li>Requêtes officielles des autorités judiciaires du Mali.</li> <li>Demande d'arbitrage de litige relative aux marques formulée auprès de l'AMRTP.</li> </ul> <h2 style="margin-top: 30px;">4. Sécurité des infrastructures DNS</h2> <p style="margin-bottom: 20px;">
L'AGETIC met en œuvre des mesures de sécurité physiques et logiques strictes pour protéger la base de données du registre et les serveurs DNS de souveraineté contre le piratage, l'altération et l'accès non autorisé.
</p> <h2 style="margin-top: 30px;">5. Droit d'accès et de rectification</h2> <p style="margin-bottom: 20px;">
Chaque titulaire de domaine peut accéder aux données le concernant, les mettre à jour ou les corriger directement en se connectant à son <strong>Dashboard Point.ml</strong>. Pour toute autre demande relative à vos données personnelles, vous pouvez contacter notre Correspondant à la Protection des Données (DPO) :
</p> <p style="font-weight: 600; color: var(--color-primary-dark);">
E-mail : dpo@agetic.gouv.ml
</p> </div> </div> </section> </main> ` })}`;
}, "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/confidentialite.astro", void 0);

const $$file = "C:/Users/Acer/Downloads/Projet/Dev/RND/point/src/pages/confidentialite.astro";
const $$url = "/confidentialite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confidentialite,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
