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
        const descriptionPt = `Sou especialista na <strong>criação de websites</strong>, com ampla experiência em plataformas CMS e desenvolvimento handcoded. Busco sempre fortalecer e aplicar práticas modernas de cultura digital nos projetos em que participo, aprimorando a comunicação voltada para a web. <a href="https://www.linkedin.com/in/renatolopesweb" target="_blank">linkedin.com/in/renatolopesweb <i class="fa-brands fa-linkedin"></i></a>`;
        const descriptionEn = `I am a specialist in <strong>website creation</strong>, with extensive experience in CMS platforms and handcoded development. I strive to continuously strengthen and apply modern digital culture practices in the projects I participate in, enhancing web‑oriented communication. <a href="https://www.linkedin.com/in/renatolopesweb" target="_blank">linkedin.com/in/renatolopesweb <i class="fa-brands fa-linkedin"></i></a>`;
        const descriptionEs = `Soy especialista en la <strong>creación de sitios web</strong>, con amplia experiencia en plataformas CMS y desarrollo handcoded. Siempre busco fortalecer y aplicar prácticas modernas de cultura digital en los proyectos en los que participo, mejorando la comunicación orientada a la web. <a href="https://www.linkedin.com/in/renatolopesweb" target="_blank">linkedin.com/in/renatolopesweb <i class="fa-brands fa-linkedin"></i></a>`;
        
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

