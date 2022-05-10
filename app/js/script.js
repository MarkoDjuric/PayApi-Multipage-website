const navToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav-side');
const hamburger = document.querySelector('.hamburger');
let hamBef = document.querySelector('.hamburger');
let style = window.getComputedStyle(hamBef, '::before');
let x = true;

//Click Event
  navToggle.addEventListener('click', function() {

    document.body.classList.toggle('nav-open');
     nav.classList.toggle('vissible');

  
    if (x===true) {
    
      hamBef.style.setProperty('--san-juan-blue', 'white');
      x = false;
    }else {
  
    hamBef.style.setProperty('--san-juan-blue', 'hsl(207, 33%, 32%)');
    x = true;
    }
  });
