import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow, Lazy } from 'swiper/modules';
import 'swiper/css/bundle';

function initSwiper() {
  const container = document.querySelector('.swiper.gallery-swiper');
  if (!container) return;

  const slidesCount = container.querySelectorAll('.swiper-slide').length;
  const enableLoop = slidesCount > 3;

   const paginationEl = container.querySelector('.swiper-pagination');
  const nextEl = container.querySelector('.gallery-button-next');
  const prevEl = container.querySelector('.gallery-button-prev');

const swiper = new Swiper(container, {
  modules: [Navigation, Pagination, Autoplay, EffectCoverflow, Lazy],
  loop: enableLoop,              
  grabCursor: true,
  centeredSlides: true,
   spaceBetween: 24,
   effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1.2,
    slideShadows: false,
  },
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
     nextEl: nextEl,   
      prevEl: prevEl,
  },
lazy: {
      loadPrevNext: true,
    }, 
  breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16, effect: 'slide', loop: slidesCount > 1, centeredSlides: false, },
      1200: { slidesPerView: 3, spaceBetween: 24, effect: 'coverflow',   loop: enableLoop, centeredSlides: true,},
    }, 
  });
   container.addEventListener('mouseenter', () => swiper.autoplay.stop());
  container.addEventListener('mouseleave', () => swiper.autoplay.start());     
}
  export default initSwiper;