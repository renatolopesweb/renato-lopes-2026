const flagPt = document.querySelector('.flag-pt');
const flagEn = document.querySelector('.flag-en');
const flagEs = document.querySelector('.flag-es');

const descriptionSection = document.querySelector('.description-text');
const descriptionPt = `Olá, sou especialista em CMS como Adobe Experience Manager (AEM), WordPress, Drupal ou desenvolvimento handcoded (HTML, CSS, JS). Entre em contato via `;
const descriptionEn = `Hello, I'm specialist in CMS technologies such as Adobe Experience Manager (AEM), WordPress, Drupal, or custom handcoded (HTML, CSS, JS). Get in touch on `;
const descriptionEs = `Hola, soy especialista en CMS como Adobe Experience Manager (AEM), WordPress, Drupal o desarrollo handcoded (HTML, CSS, JS). Ponte en contacto a través de `;

// const LangContact = document.querySelector('.language-contact');
// const LangContactPt = `Entre em contato via`;
// const LangContactEn = `Get in touch via `;
// const LangContactEs = `Ponte en contacto a través de `;

const LangProject = document.querySelector('.language-project');
const LangProjectPt = `Projetos selecionados`;
const LangProjectEn = `Selected projects`;
const LangProjectEs = `Proyectos seleccionados`;

const LangCta = document.querySelectorAll('.cta-access');
const LangCtaPt = `Link do Projeto`;
const LangCtaEn = `Project Link`;
const LangCtaEs = `Enlace del Proyecto`;

const LangFooter = document.querySelector('.language-footer');
const LangFooterPt = `Feito com: `;
const LangFooterEn = `Built with:`;
const LangFooterEs = `Hecho con:`;

(function () {
  descriptionSection.innerHTML = descriptionPt;
})();
flagPt.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionPt;
  // LangContact.innerHTML = LangContactPt;
  LangProject.innerHTML = LangProjectPt;
  LangFooter.innerHTML = LangFooterPt;
  LangCta.forEach(el => el.innerHTML = LangCtaPt);
});
flagEn.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEn;
  // LangContact.innerHTML = LangContactEn;
  LangProject.innerHTML = LangProjectEn;
  LangFooter.innerHTML = LangFooterEn;
  LangCta.forEach(el => el.innerHTML = LangCtaEn);
});
flagEs.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEs;
  // LangContact.innerHTML = LangContactEs;
  LangProject.innerHTML = LangProjectEs;
  LangFooter.innerHTML = LangFooterEs;
  LangCta.forEach(el => el.innerHTML = LangCtaEs);
});


document.addEventListener("DOMContentLoaded", () => {
  const btnProjects = document.getElementById("btnProjects");
  // const btnContact = document.getElementById("btnContact");
  const projects = document.querySelector(".projects");
  // const contact = document.querySelector(".contact");

btnProjects.addEventListener("click", () => {
  projects.classList.add("show");
  // contact.classList.remove("show");
});

// btnContact.addEventListener("click", () => {
//   contact.classList.add("show");
//   projects.classList.remove("show");
// });
});