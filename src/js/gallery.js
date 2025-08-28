import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initSwiper() {
  const container = document.querySelector('.swiper.js-gallery-swiper');
  if (!container) return;

  const nextEl = document.querySelector('.js-gallery-button-next');
  const prevEl = document.querySelector('.js-gallery-button-prev');
  const paginationEl = document.querySelector(
    '.swiper-pagination.js-gallery-pagination'
  );

  const swiper = new Swiper(container, {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: paginationEl,
      clickable: true,
      centered: true,
    },
    navigation: { nextEl: nextEl, prevEl: prevEl },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
      1200: { slidesPerView: 3, spaceBetween: 24, centeredSlides: true },
    },
    on: {
      init() {
        toggleNav(this, { nextEl, prevEl });
      },
      resize() {
        toggleNav(this, { nextEl, prevEl });
      },
    },
    grabCursor: true,
  });
}

function toggleNav(sw, { nextEl, prevEl }) {
  const isDesktop = sw.width >= 1200;
  if (!nextEl || !prevEl) return;

  if (isDesktop) {
    prevEl.classList.remove('js-is-hidden');
    nextEl.classList.remove('js-is-hidden');
  } else {
    prevEl.classList.add('js-is-hidden');
    nextEl.classList.add('js-is-hidden');
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
export default initSwiper;
