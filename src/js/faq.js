import Accordion from 'accordion-js';

new Accordion('.accordion-container', {
  duration: 400,
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  activeClass: 'is-active',
  showMultiple: true,
  heightStyle: 'content',
});
document.querySelectorAll('.ac').forEach(ac => {
  const trigger = ac.querySelector('.ac-trigger');
  const panel = ac.querySelector('.ac-panel');

  trigger.addEventListener('click', () => {
    if (ac.classList.contains('is-active')) {
      // відкриваємо
      panel.style.maxHeight = panel.scrollHeight + "px";
      setTimeout(() => { panel.style.maxHeight = "none"; }, 400); // щоб після анімації висота була авто
    } else {
      // закриваємо
      panel.style.maxHeight = panel.scrollHeight + "px";
      setTimeout(() => { panel.style.maxHeight = "0"; }, 10);
    }
  });
});