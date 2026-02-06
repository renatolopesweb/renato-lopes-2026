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

function updateProjectContent(a, b, d, e) {
  let projectTitle = document.querySelector('.project-title');
  let projectStack = document.querySelector('.project-stack');
  let projectUrl = document.querySelector('.project-url');
  let projectLink = document.querySelector('.project-link');
  let projectThumb = document.querySelector('.project-thumb');

  projectTitle.innerHTML = a;
  projectStack.innerHTML = b;
  projectUrl.innerHTML = d;
  projectLink.href = d;
  projectThumb.innerHTML = e;
}





        //         // TRANSLATE START
        const flagPt = document.querySelector('.flag-pt');
        const flagEn = document.querySelector('.flag-en');
        const flagEs = document.querySelector('.flag-es');
        
        const descriptionSection = document.querySelector('.description-text');
        const descriptionPt = `Olá, sou o <strong>Renato Lopes</strong>, trabalho em criação de websites usando CMSs Adobe AEM, Drupal, Wordpress, Wix e também handcoded HTML/CSS/JS. Para design (UX/UI) uso o Figma.`;
        const descriptionEn = `Hi, I'm <strong>Renato Lopes</strong>, I work with website creation using CMSs Adobe AEM, Drupal, WordPress, Wix, and also handcoded HTML/CSS/JS. For design (UX/UI), I enjoyed in to Figma.`;
        const descriptionEs = `Hola, soy <strong>Renato Lopes</strong>, creando sitios web usando CMSs Adobe AEM, Drupal, WordPress, Wix, y también handcoded HTML/CSS/JS. Para diseño (UX/UI),  uso el Figma.`;
        
        const ProjectSection = document.querySelector('.project-select');
        const ProjectPt = `Projetos selecionados`;
        const ProjectEn = `Selected projects`;
        const ProjectEs = `Proyectos seleccionados`;
        
        (function () {
            descriptionSection.innerHTML = descriptionPt
        })();
        flagPt.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionPt
            ProjectSection.innerHTML = ProjectPt
        })
        flagEn.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionEn
            ProjectSection.innerHTML = ProjectEn
        })
        flagEs.addEventListener('click', (e) => {
            e.preventDefault()
            descriptionSection.innerHTML = descriptionEs
            ProjectSection.innerHTML = ProjectEs
        })

//        TRANSLATE END

