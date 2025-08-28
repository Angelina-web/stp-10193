document.addEventListener('DOMContentLoaded', () => {
  const photo = document.querySelector('.js-owerview-img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        photo.classList.add('js-visible');
        observer.unobserve(photo);
      }
    });
  });

  observer.observe(photo);
});
