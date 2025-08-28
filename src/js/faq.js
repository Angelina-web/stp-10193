import Accordion from 'accordion-js';

new Accordion('.js-accordion-container', {
  duration: 400,
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  activeClass: 'js-is-active',
  showMultiple: true,
  heightStyle: 'content',
});
document.querySelectorAll('.ac').forEach(ac => {
  const trigger = ac.querySelector('.ac-trigger');
  const panel = ac.querySelector('.ac-panel');

  trigger.addEventListener('click', () => {
    if (ac.classList.contains('js-is-active')) {
      // відкриваємо
      panel.style.maxHeight = panel.scrollHeight + 'px';
      setTimeout(() => {
        panel.style.maxHeight = 'none';
      }, 400); // щоб після анімації висота була авто
    } else {
      // закриваємо
      panel.style.maxHeight = panel.scrollHeight + 'px';
      setTimeout(() => {
        panel.style.maxHeight = '0';
      }, 10);
    }
  });
});
