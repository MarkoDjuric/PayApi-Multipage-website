const navToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav-side');
const hamburger = document.querySelector('.hamburger');
let hamBef = window.getComputedStyle(hamburger, '::before');
let color = style.getPropertyValue('background-color');


navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  nav.classList.toggle('vissible');

color.style.background= "white";
  
});
