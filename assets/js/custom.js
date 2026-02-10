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




function openProject(a, b, c, d, e) {
  var shouldClear =
    a == null || a === '' || a === false ||
    (typeof a === 'string' && a.trim() === '');

  if (isAnimating) return;
  isAnimating = true;

  if (shouldClear) {
    // 🔹 Remover .is-active dos <li> da lista quando limpar (clique na imagem)
    var linksUl = document.querySelector('ul.links'); // seleciona o UL, não o DIV
    if (linksUl) {
      linksUl.querySelectorAll('li.is-active').forEach(function(li) {
        li.classList.remove('is-active');
      });
    }
    // 🔹 Fim do patch

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
      updateProjectContent(a, b, c, d, e);

      projects.classList.remove('hide');
      projects.classList.add('show');

      isAnimating = false;
    }, 400);

  } else {
    updateProjectContent(a, b, c, d, e);
    projects.classList.add('show');
    isFirstLoad = false;
    isAnimating = false;
  }
}


function updateProjectContent(a, b, d, e) {
  var projectTitle = document.querySelector('.project-title');
  var projectStack = document.querySelector('.project-stack');
  var projectUrl   = document.querySelector('.project-url');
  var projectLink  = document.querySelector('.project-link');
  var projectThumb = document.querySelector('.project-thumb');

  projectTitle.innerHTML  = a;
  projectStack.innerHTML  = b;
  projectUrl.innerHTML = d;
  projectLink.href     = d;
  projectThumb.innerHTML = e;
}



function clearProjectContent() {
  var t = document.querySelector('.project-title');
  var s = document.querySelector('.project-stack');
  var u = document.querySelector('.project-url');
  var l = document.querySelector('.project-link');
  var th = document.querySelector('.project-thumb');

  if (t) t.innerHTML = '';
  if (s) s.innerHTML = '';
  if (u) u.innerHTML = '';
  if (l) l.removeAttribute('href');
  if (th) th.innerHTML = '';

  // Esconde ícones somente no CLEAR
  document.querySelectorAll('.projects ul i').forEach(function(icon){
    icon.style.display = 'none';
  });
}

function updateProjectContent(a, b, c, d) {
  var t = document.querySelector('.project-title');
  var s = document.querySelector('.project-stack');
  var u = document.querySelector('.project-url');
  var l = document.querySelector('.project-link');
  var th = document.querySelector('.project-thumb');

  if (t) t.innerHTML = a || '';
  if (s) s.innerHTML = b || '';
  if (u) u.innerHTML = c || '';
  if (l) {
    if (c) l.setAttribute('href', c);
    else l.removeAttribute('href');
  }
  if (th) th.innerHTML = d || '';

  // Mostra ícones somente quando ABRIR projeto
  document.querySelectorAll('.projects ul i').forEach(function(icon){
    icon.style.display = '';
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
        const descriptionPt = `Sou especialista em <strong>criação de websites</strong>, com experiência em plataformas CMS e handcoded. Em todos os projetos, priorizo cultura web, atenção aos detalhes e qualidade nas entregas.<br><a href="https://www.linkedin.com/in/renatolopesweb" target="_blank"><i class="fa-brands fa-linkedin"></i>linkedin.com/in/renatolopesweb</a>`;
        const descriptionEn = `I specialize in <strong>website creation</strong>, with experience in CMS platforms and handcoded. In every project, I prioritize web culture, attention to detail, and high-quality delivery. <br><a href="https://www.linkedin.com/in/renatolopesweb" target="_blank"><i class="fa-brands fa-linkedin"></i>linkedin.com/in/renatolopesweb</a>`;
        const descriptionEs = `Soy especialista en la <strong>creación de sitios web</strong>, con experiencia en plataformas CMS y handcoded. En cada proyecto, priorizo la cultura web, la atención al detalle y la calidad en las entregas. <br><a href="https://www.linkedin.com/in/renatolopesweb" target="_blank"><i class="fa-brands fa-linkedin"></i>linkedin.com/in/renatolopesweb</a>`;
        
        const ProjectSection = document.querySelector('.project-select');
        const ProjectPt = `Projetos selecionados`;
        const ProjectEn = `Selected projects`;
        const ProjectEs = `Proyectos seleccionados`;

        const LangSection = document.querySelector('.language-title');
        const LangPt = `Idioma`;
        const LangEn = `Language`;
        const LangEs = `Idioma`;
        
        (function () {
            descriptionSection.innerHTML = descriptionPt
        })();
        flagPt.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionPt
            ProjectSection.innerHTML = ProjectPt
            LangSection.innerHTML = LangPt
        })
        flagEn.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionEn
            ProjectSection.innerHTML = ProjectEn
            LangSection.innerHTML = LangEn
        })
        flagEs.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionEs
            ProjectSection.innerHTML = ProjectEs
            LangSection.innerHTML = LangEs
        })

//        TRANSLATE END

