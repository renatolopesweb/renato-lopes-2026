const flagPt = document.querySelector('.flag-pt');
const flagEn = document.querySelector('.flag-en');
const flagEs = document.querySelector('.flag-es');

const descriptionSection = document.querySelector('.description-text');
const descriptionPt = `Olá, sou o <strong class="text-blue">Renato Lopes</strong>, especialista na criação de websites usando tecnologias de CMS como Adobe Experience Manager (AEM), WordPress ou handcoded (HTML, CSS, JS). Também atuo com globalização de páginas web para projetos de pequena e grande escala.`;
const descriptionEn = `Hello, I'm <strong class="text-blue">Renato Lopes</strong>, a specialist in website development using CMS technologies such as Adobe Experience Manager (AEM), WordPress, Drupal or handcoded (HTML, CSS, JS). I also work with web page globalization for small and large scale.`;
const descriptionEs = `Hola, soy <strong class="text-blue">Renato Lopes</strong>, especialista en la creación de sitios web usando tecnologías de CMS como Adobe Experience Manager (AEM), WordPress, Drupal y handcoded (HTML, CSS, JS). También trabajo con globalización de páginas web en pequeña y gran escala.`;

const LangContact = document.querySelector('.language-contact');
const LangContactPt = `Contato`;
const LangContactEn = `Contact`;
const LangContactEs = `Contato`;

const LangCta = document.querySelectorAll('.cta-access');
const LangCtaPt = `Visitar Website`;
const LangCtaEn = `Visit Website`;
const LangCtaEs = `Visitar Sitio Web`;

(function () {
  descriptionSection.innerHTML = descriptionPt;
})();
flagPt.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionPt;
  LangContact.innerHTML = LangContactPt;
  LangCta.forEach(el => el.innerHTML = LangCtaPt);
});
flagEn.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEn;
  LangContact.innerHTML = LangContactEn;
  LangCta.forEach(el => el.innerHTML = LangCtaEn);
});
flagEs.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEs;
  LangContact.innerHTML = LangContactEs;
  LangCta.forEach(el => el.innerHTML = LangCtaEs);
});