'use strict';

// MAIN VARIABLES
const navItems = document.querySelectorAll('.nav__link');

console.log('Script is working');

// SCROLLING FROM NAV BAR

navItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
