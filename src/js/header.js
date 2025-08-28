document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-header-menu-open]');
  const closeBtn = document.querySelector('[data-header-menu-close]');
  const mobileMenu = document.querySelector('.js-mobile-menu');
  const categoryLinks = document.querySelectorAll('[data-category-link]');
  // Відкриття меню
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('js-open');
  });

  // Закриття меню
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('js-open');
  });
  // Клік по категорії
  categoryLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Щоб не було миттєвого переходу

      const targetId = link.getAttribute('href')?.replace('#', '');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        mobileMenu.classList.remove('js-open');

        // Миттєвий перехід до секції
        targetSection.setAttribute('tabindex', '-1');
        targetSection.focus();
      }
    });
  });
});
