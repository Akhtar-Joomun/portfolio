const menu = document.querySelector('.links1');
const ham = document.querySelector('.btn');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

ham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menu-links');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMenu);
});