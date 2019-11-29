const menu = document.querySelector('.header__menu');
const menuMobile = document.querySelector('.header__mobile');
const menuDesk = document.querySelector('.header__nav');


function toggleMenu() {
  menuMobile.classList.toggle('change');
  menuDesk.classList.toggle('ativo');
  menu.classList.toggle('ativo');
}

menuMobile.addEventListener('click', toggleMenu);