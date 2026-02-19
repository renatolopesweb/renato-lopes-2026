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

/**
 * Aceita 4 ou 5 parâmetros:
 * 4 params: openProject(title, _stackIgnored, url, thumbHTML)
 * 5 params: openProject(title, _stackIgnored, _, url, thumbHTML)
 */
function openProject(a, b, c, d, e) {
  // Normalização de parâmetros
  // Se e for undefined, significa que vieram 4 parâmetros => c=url, d=thumb
  var title, url, thumbHTML;
  if (typeof e === 'undefined') {
    title     = a;
    url       = c;
    thumbHTML = d;
  } else {
    title     = a;
    url       = d;
    thumbHTML = e;
  }

  var shouldClear =
    title == null || title === '' || title === false ||
    (typeof title === 'string' && title.trim() === '');

  if (isAnimating) return;
  isAnimating = true;

  if (shouldClear) {
    // Remover .is-active dos <li> quando limpar
    var linksUl = document.querySelector('ul.links');
    if (linksUl) {
      linksUl.querySelectorAll('li.is-active').forEach(function(li) {
        li.classList.remove('is-active');
      });
    }

    if (!isFirstLoad && projects.classList.contains('show')) {
      projects.classList.add('hide');
      setTimeout(function() {
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
    setTimeout(function() {
      updateProjectContent(title, url, thumbHTML); // (title, url, thumb)
      projects.classList.remove('hide');
      projects.classList.add('show');
      isAnimating = false;
    }, 400);
  } else {
    updateProjectContent(title, url, thumbHTML); // (title, url, thumb)
    projects.classList.add('show');
    isFirstLoad = false;
    isAnimating = false;
  }
}

/**
 * Atualiza na ordem: thumb -> title -> link (botão fixo .project-link)
 */
function updateProjectContent(title, url, thumbHTML) {
  var t  = document.querySelector('.project-title');
  var l  = document.querySelector('.project-link');  // <a> "ACESSAR SITE"
  var th = document.querySelector('.project-thumb');

  // 1) Thumb
  if (th) th.innerHTML = thumbHTML || '';

  // 2) Title
  if (t) t.innerHTML = title || '';

  // 3) Link do botão fixo
  if (l) {
    if (url) {
      l.setAttribute('href', url);
      // Se quiser garantir sempre nova aba + segurança:
      l.setAttribute('target', '_blank');
      l.setAttribute('rel', 'noopener');
    } else {
      l.removeAttribute('href');
      l.removeAttribute('target');
      l.removeAttribute('rel');
    }
  }

  // Mostra ícones somente quando ABRIR projeto
  document.querySelectorAll('.projects ul i').forEach(function(icon){
    icon.style.display = '';
  });
}

function clearProjectContent() {
  var t  = document.querySelector('.project-title');
  var l  = document.querySelector('.project-link');
  var th = document.querySelector('.project-thumb');

  if (t)  t.innerHTML = '';
  if (l)  { l.removeAttribute('href'); l.removeAttribute('target'); l.removeAttribute('rel'); }
  if (th) th.innerHTML = '';

  // Esconde ícones somente no CLEAR
  document.querySelectorAll('.projects ul i').forEach(function(icon){
    icon.style.display = 'none';
  });
}



function openChatt() {
  const chattContent = document.querySelector('.menu-content');
  chattContent.classList.toggle('menu-content-toggle');

}








        //         // TRANSLATE START
        const flagPt = document.querySelector('.flag-pt');
        const flagEn = document.querySelector('.flag-en');
        const flagEs = document.querySelector('.flag-es');
        
        const descriptionSection = document.querySelector('.description-text');
        const descriptionPt = `Especialista na <strong>criação de website</strong> com propósito e centrado no usuário.`;
        const descriptionEn = `Specialist in <strong>creating purpose websites</strong> centered on the user.`;
        const descriptionEs = `Especialista en la <strong>creación de sitios web</strong> con propósito y centrados en el usuario.`;
        
        const ProjectSection = document.querySelector('.project-select');
        const ProjectPt = `Projetos selecionados`;
        const ProjectEn = `Selected projects`;
        const ProjectEs = `Proyectos seleccionados`;

        const LangSection = document.querySelector('.language-title');
        const LangPt = `Idioma`;
        const LangEn = `Language`;
        const LangEs = `Idioma`;


        const LangCta = document.querySelector('.cta-access');
        const LangCtaPt = `Visitar Website`;
        const LangCtaEn = `Visit Website`;
        const LangCtaEs = `Visitar Sitio Web`;
        
        (function () {
            descriptionSection.innerHTML = descriptionPt
        })();
        flagPt.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionPt
            ProjectSection.innerHTML = ProjectPt
            LangSection.innerHTML = LangPt
            LangCta.innerHTML = LangCtaPt
        })
        flagEn.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionEn
            ProjectSection.innerHTML = ProjectEn
            LangSection.innerHTML = LangEn
            LangCta.innerHTML = LangCtaEn
        })
        flagEs.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionEs
            ProjectSection.innerHTML = ProjectEs
            LangSection.innerHTML = LangEs
            LangCta.innerHTML = LangCtaEs
        })

//        TRANSLATE END

