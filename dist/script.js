"use strict";var navToggle=document.querySelector(".header__toggle"),nav=document.querySelector(".nav-side"),hamburger=document.querySelector(".hamburger"),hamBef=document.querySelector(".hamburger"),style=window.getComputedStyle(hamBef,"::before"),x=!0;navToggle.addEventListener("click",(function(){document.body.classList.toggle("nav-open"),nav.classList.toggle("vissible"),!0===x?(hamBef.style.setProperty("--san-juan-blue","white"),x=!1):(hamBef.style.setProperty("--san-juan-blue","hsl(207, 33%, 32%)"),x=!0)}));
//# sourceMappingURL=script.js.map

