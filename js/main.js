/**
 * University of Alberta Minecraft Club - Main JavaScript
 * Lightweight, zero-dependency script for navigation and interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  // 1. Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Dropdown Menus (Mobile & Keyboard accessibility)
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        // On touch / small screens, toggle dropdown on click
        if (window.innerWidth <= 960) {
          e.preventDefault();
          e.stopPropagation();
          
          // Close other open dropdowns
          dropdowns.forEach((d) => {
            if (d !== dropdown) d.classList.remove('open');
          });

          dropdown.classList.toggle('open');
        }
      });
    }
  });

  // 3. Close open menus when clicking anywhere outside
  document.addEventListener('click', (e) => {
    // Close mobile nav if clicked outside
    if (navMenu && navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }

    // Close dropdowns if clicked outside
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains('open') && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  // 4. Close mobile menu when clicking any nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960 && navMenu) {
        navMenu.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
