const flagPt = document.querySelector('.flag-pt');
const flagEn = document.querySelector('.flag-en');
const flagEs = document.querySelector('.flag-es');

const descriptionSection = document.querySelector('.description-text');
const descriptionPt = `Apaixonado pela web, <strong>Renato Lopes</strong> atua com <strong>Web Design, Front-End e UI</strong>, criando interfaces, websites e aplicações digitais. Experiência com <strong>HTML, CSS, JavaScript, React, WordPress, Drupal, Adobe AEM e Figma</strong>.`;
const descriptionEn = `Passionate about the web, <strong>Renato Lopes</strong> works with <strong>Web Design, Front-End Development, and UI Design</strong>, creating interfaces, websites, and digital applications. Experienced with <strong>HTML, CSS, JavaScript, React, WordPress, Drupal, Adobe AEM, and Figma</strong>.`;
const descriptionEs = `Apasionado por la web, <strong>Renato Lopes</strong> trabaja en <strong>Diseño Web, Front-End y Diseño de Interfaces (UI)</strong>, creando interfaces, sitios web y aplicaciones digitales. Cuenta con experiencia en <strong>HTML, CSS, JavaScript, React, WordPress, Drupal, Adobe AEM y Figma</strong>.`;

(function () {
  descriptionSection.innerHTML = descriptionPt;
})();
flagPt.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionPt;
});
flagEn.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEn;
});
flagEs.addEventListener('click', (e) => {
  e.preventDefault();
  descriptionSection.innerHTML = descriptionEs;
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".make3D").forEach((currentItem) => {
    const clones = parseInt(
      currentItem.getAttribute("data-clones"),
      10
    );

    const firstText = currentItem.querySelector(".text");

    for (let i = 0; i < clones; i++) {
      currentItem.appendChild(
        firstText.cloneNode(true)
      );
    }
  });
});