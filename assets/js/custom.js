const flagPt = document.querySelector('.flag-pt');
const flagEn = document.querySelector('.flag-en');
const flagEs = document.querySelector('.flag-es');

const descriptionSection = document.querySelector('.description-text');
const descriptionPt = `Olá, sou o <strong class="text-blue">Renato Lopes</strong>, especialista em <strong class="text-blue">web</strong> com experiência em CMS como Adobe Experience Manager (AEM), WordPress, Drupal ou desenvolvimento handcoded (HTML, CSS, JS).`;
const descriptionEn = `Hello, I'm <strong class="text-blue">Renato Lopes</strong>, a <strong class="text-blue">web</strong> specialist with experience in CMS technologies such as Adobe Experience Manager (AEM), WordPress, Drupal, or custom handcoded (HTML, CSS, JS).`;
const descriptionEs = `Hola, soy <strong class="text-blue">Renato Lopes</strong>, especialista en <strong class="text-blue">web</strong> con experiencia en CMS como Adobe Experience Manager (AEM), WordPress, Drupal o desarrollo handcoded (HTML, CSS, JS).`;

// const LangContact = document.querySelector('.language-contact');
// const LangContactPt = `Contato:`;
// const LangContactEn = `Contact:`;
// const LangContactEs = `Contato:`;

const LangProject = document.querySelector('.language-project');
const LangProjectPt = `Projetos selecionados`;
const LangProjectEn = `Selected projects`;
const LangProjectEs = `Proyectos seleccionados`;

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
  // LangContact.innerHTML = LangContactPt;
  LangProject.innerHTML = LangProjectPt;
  LangCta.forEach(el => el.innerHTML = LangCtaPt);
});
flagEn.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEn;
  // LangContact.innerHTML = LangContactEn;
  LangProject.innerHTML = LangProjectEn;
  LangCta.forEach(el => el.innerHTML = LangCtaEn);
});
flagEs.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEs;
  // LangContact.innerHTML = LangContactEs;
  LangProject.innerHTML = LangProjectEs;
  LangCta.forEach(el => el.innerHTML = LangCtaEs);
});

const trigger = document.querySelector('.js-open-projects');
const projectsSection = document.querySelector('#all-projects');

if (trigger && projectsSection) {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();

    projectsSection.classList.add('is-visible');
    projectsSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
}