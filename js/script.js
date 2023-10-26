const btn = document.querySelector('.btn-menu');
const menu = document.querySelector('.header__menu__sp');
 
btn.addEventListener('click', () => {
  menu.classList.toggle('open-menu')
});

const footer_btn = document.querySelector('.footer__btn-menu');
const footer_menu = document.querySelector('.footer__menu__sp');
 
footer_btn.addEventListener('click', () => {
  footer_menu.classList.toggle('footer__open-menu')
});