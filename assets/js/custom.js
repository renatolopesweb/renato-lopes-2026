// HEADER SHRINK
// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//         header.classList.add('shrink');
//     } else {
//         header.classList.remove('shrink');
//     }
// });


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

// MENU MOBILE
const navButton = document.querySelector('.nav-button');
const navSection = document.querySelector('.nav-section');
const icon = navButton.querySelector('i');

navButton.addEventListener('click', () => {
    navSection.classList.toggle('active');

    if (navSection.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


// MODAL SOBRE
const modal = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.btn-close');
const linkAbout = document.querySelector('.link-about');

// abrir modal
if (linkAbout) {
    linkAbout.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');

        // opcional: fechar menu ao abrir modal
        navSection.classList.remove('active');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
}

// fechar modal no X
if (btnClose) {
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// fechar clicando fora do conteúdo
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}


// FECHAR MENU
const overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', () => {
        navSection.classList.remove('active');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
}

const closeIcon = document.querySelector('.close-icon');

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        navSection.classList.remove('active');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
}
// fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});