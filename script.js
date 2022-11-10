'use strict';

// MAIN VARIABLES
const navItems = document.querySelectorAll('.nav__link');
const openMenu = document.querySelector('.menu__btn');
const navbar = document.querySelector('.header__nav-items');

console.log('Script is working');

// SCROLLING FROM NAV BAR

navItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    if (openMenu.classList.value.includes('open')) {
      navbar.style.left = '-100vw';
      openMenu.classList.remove('open');
    }
    console.log(openMenu.classList.value.includes('open'));
  });
});

// OPEN/CLOSE MENU BAR ON MOBILE DEVICES
openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  if (!openMenu.classList.value.includes('open')) {
    navbar.style.left = 0;
    openMenu.classList.add('open');
  } else {
    navbar.style.left = '-100vw';
    openMenu.classList.remove('open');
  }
});
