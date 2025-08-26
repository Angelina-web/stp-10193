import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function initSwiper() {
  const container = document.querySelector('.swiper.gallery-swiper');
  if (!container) return;

  const nextEl = document.querySelector('.gallery-button-next');
  const prevEl = document.querySelector('.gallery-button-prev');
  const paginationEl = document.querySelector('.swiper-pagination');

  const slidesCount = container.querySelectorAll('.swiper-slide').length;
  const isDesktop = window.innerWidth >= 1200;
  const slidesPerView = isDesktop ? 3 : 1;

  const swiper = new Swiper(container, {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    slidesPerView: slidesPerView,
    spaceBetween: isDesktop ? 24 : 16,
    observer: true,
    observeParents: true,
    loop: true,
    effect: isDesktop ? 'coverflow' : 'slide',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1.5,
      slideShadows: false,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    navigation: { nextEl: nextEl, prevEl: prevEl },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 18},
      1200: { slidesPerView: 3, spaceBetween: 24 },
    },
    on: {
      init() {
        toggleNav(this, { nextEl, prevEl, paginationEl });
      },
      resize() {
        toggleNav(this, { nextEl, prevEl, paginationEl });
      },
      slideChange() {
        toggleNav(this, { nextEl, prevEl, paginationEl });
      },
    },
    grabCursor: true,
    centeredSlides: true,
  });
  container.addEventListener('mouseenter', () => swiper.autoplay.stop());
  container.addEventListener('mouseleave', () => swiper.autoplay.start());
}

function toggleNav(sw, { nextEl, prevEl, paginationEl }) {
const total = sw.slides.length - sw.loopedSlides * 2;
  const visible = Math.floor(sw.params.slidesPerView) || 1;
  const hideAll = total <= visible;

  if (prevEl && nextEl) {
    if (hideAll) {
      prevEl.classList.add('is-hidden');
      nextEl.classList.add('is-hidden');
    } else {
      prevEl.classList.remove('is-hidden');
      nextEl.classList.remove('is-hidden');
      prevEl.classList.toggle('swiper-button-disabled', sw.isBeginning);
      nextEl.classList.toggle('swiper-button-disabled', sw.isEnd);
    }
  }
}
document.addEventListener('DOMContentLoaded', initSwiper);
export default initSwiper;
