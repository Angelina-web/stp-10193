import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow, Lazy } from 'swiper';
import 'swiper/css';

function initSwiper() {
  const container = document.querySelector('.swiper.gallery-swiper');
  if (!container) return;

  const slidesCount = container.querySelectorAll('.swiper-slide').length;
  const maxSlidesPerView = 3;
  const enableLoop = slidesCount > maxSlidesPerView;

const swiper = new Swiper(container, {
  loop: enableLoop,              
  effect: 'coverflow',      
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
   spaceBetween: 24,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
   observer: true,
    observeParents: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
   speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
lazy: {
      loadPrevNext: true,
    }, 
  breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      1200: { slidesPerView: 3, spaceBetween: 24 },
    }, 
  });
   container.addEventListener('mouseenter', () => swiper.autoplay.stop());
  container.addEventListener('mouseleave', () => swiper.autoplay.start());     
}
  export default initSwiper;