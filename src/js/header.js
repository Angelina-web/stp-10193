document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-header-menu-open]');
  const closeBtn = document.querySelector('[data-header-menu-close]');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Відкриття меню
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  // Закриття меню
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
