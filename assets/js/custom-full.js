(function () {
  var linksList = document.querySelector('.links');
  if (!linksList) return;

  linksList.addEventListener('click', function (evt) {
    var anchor = evt.target.closest('a');
    if (!anchor || !linksList.contains(anchor)) return;

    if (anchor.getAttribute('href') === '#') {
      evt.preventDefault();
    }

    var item = anchor.closest('li');
    if (!item) return;

    var items = linksList.querySelectorAll('li.is-active');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('is-active');
    }
    item.classList.add('is-active');
  });
})();

let projects = document.querySelector('.projects');
let isFirstLoad = true;
let isAnimating = false;

function openProject(a, c, d, e) {
  var title, url, thumbHTML;
  if (typeof e === 'undefined') {
    title = a;
    url = c;
    thumbHTML = d;
  } else {
    title = a;
    url = d;
    thumbHTML = e;
  }

  var shouldClear =
    title == null || title === '' || title === false ||
    (typeof title === 'string' && title.trim() === '');

  if (isAnimating) return;
  isAnimating = true;

  if (shouldClear) {
    var linksUl = document.querySelector('ul.links');
    if (linksUl) {
      linksUl.querySelectorAll('li.is-active').forEach(function (li) {
        li.classList.remove('is-active');
      });
    }

    if (!isFirstLoad && projects.classList.contains('show')) {
      projects.classList.add('hide');
      setTimeout(function () {
        clearProjectContent();
        projects.classList.remove('hide');
        projects.classList.remove('show');
        isAnimating = false;
      }, 400);
    } else {
      clearProjectContent();
      projects.classList.remove('show');
      isAnimating = false;
    }
    return;
  }

  if (!isFirstLoad) {
    projects.classList.add('hide');
    setTimeout(function () {
      updateProjectContent(title, url, thumbHTML);
      projects.classList.remove('hide');
      projects.classList.add('show');
      isAnimating = false;
    }, 400);
  } else {
    updateProjectContent(title, url, thumbHTML);
    projects.classList.add('show');
    isFirstLoad = false;
    isAnimating = false;
  }
}

function updateProjectContent(title, url, thumbHTML) {
  var t = document.querySelector('.project-title');
  var l = document.querySelector('.project-link');
  var th = document.querySelector('.project-thumb');

  if (th) th.innerHTML = thumbHTML || '';
  if (t) t.innerHTML = title || '';

  if (l) {
    if (url) {
      l.setAttribute('href', url);
      l.setAttribute('target', '_blank');
      l.setAttribute('rel', 'noopener');
    } else {
      l.removeAttribute('href');
      l.removeAttribute('target');
      l.removeAttribute('rel');
    }
  }

  document.querySelectorAll('.projects ul i').forEach(function (icon) {
    icon.style.display = '';
  });
}

function clearProjectContent() {
  var t = document.querySelector('.project-title');
  var l = document.querySelector('.project-link');
  var th = document.querySelector('.project-thumb');

  if (t) t.innerHTML = '';
  if (l) { l.removeAttribute('href'); l.removeAttribute('target'); l.removeAttribute('rel'); }
  if (th) th.innerHTML = '';

  document.querySelectorAll('.projects ul i').forEach(function (icon) {
    icon.style.display = 'none';
  });
}

function openChatt() {
  const chattContent = document.querySelector('.menu-content');
  chattContent.classList.toggle('menu-content-toggle');
}

const flagPt = document.querySelector('.flag-pt');
const flagEn = document.querySelector('.flag-en');
const flagEs = document.querySelector('.flag-es');

const descriptionSection = document.querySelector('.description-text');
const descriptionPt = `Especialista em <strong>criação de websites</strong> com propósito, centrados no usuário e sob medida para pessoas e empresas que valorizam uma presença digital profissional.`;
const descriptionEn = `Specialist in <strong>creating purposeful, user-centered websites</strong> tailored for individuals and businesses that value a professional digital presence.`;
const descriptionEs = `Especialista en la <strong>creación de sitios web</strong> con propósito, centrados en el usuario y hechos a medida para personas y empresas que valoran una presencia digital profesional.`;

const ProjectSection = document.querySelector('.project-select');
const ProjectPt = `Projetos selecionados`;
const ProjectEn = `Selected projects`;
const ProjectEs = `Proyectos seleccionados`;

const LangSection = document.querySelector('.language-title');
const LangPt = `Idioma`;
const LangEn = `Language`;
const LangEs = `Idioma`;

const LangContact = document.querySelector('.language-contact');
const LangContactPt = `Contato`;
const LangContactEn = `Contact`;
const LangContactEs = `Contato`;

const LangCta = document.querySelector('.cta-access');
const LangCtaPt = `Visitar Website`;
const LangCtaEn = `Visit Website`;
const LangCtaEs = `Visitar Sitio Web`;

(function () {
  descriptionSection.innerHTML = descriptionPt;
})();
flagPt.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionPt;
  ProjectSection.innerHTML = ProjectPt;
  LangContact.innerHTML = LangContactPt;
  LangSection.innerHTML = LangPt;
  LangCta.innerHTML = LangCtaPt;
});
flagEn.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEn;
  ProjectSection.innerHTML = ProjectEn;
  LangSection.innerHTML = LangEn;
  LangContact.innerHTML = LangContactEn;
  LangCta.innerHTML = LangCtaEn;
});
flagEs.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEs;
  ProjectSection.innerHTML = ProjectEs;
  LangContact.innerHTML = LangContactEs;
  LangSection.innerHTML = LangEs;
  LangCta.innerHTML = LangCtaEs;
});