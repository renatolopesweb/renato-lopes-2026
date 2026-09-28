const flagPt = document.querySelector('.flag-pt');
const flagEn = document.querySelector('.flag-en');
const flagEs = document.querySelector('.flag-es');

const descriptionSection = document.querySelector('.description-text');
const descriptionPt = `Renato Lopes atua com Web Design, Front-End e UI, criando interfaces, websites e aplicações digitais. Experiência com HTML, CSS, JavaScript, React, WordPress, Drupal, Adobe AEM e Figma.`;
const descriptionEn = `Renato Lopes works with Web Design, Front-End Development, and UI Design, creating interfaces, websites, and digital applications. Experienced with HTML, CSS, JavaScript, React, WordPress, Drupal, Adobe AEM, and Figma.`;
const descriptionEs = `Renato Lopes trabaja en Diseño Web, Front-End y Diseño de Interfaces (UI), creando interfaces, sitios web y aplicaciones digitales. Cuenta con experiencia en HTML, CSS, JavaScript, React, WordPress, Drupal, Adobe AEM y Figma.`;

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