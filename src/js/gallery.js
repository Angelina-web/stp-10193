import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function initGallerySwiper() {
  const container = document.querySelector('.swiper.gallery-swiper');
  if (!container) return;

  const prev = container.querySelector('.gallery-button-prev');
  const next = container.querySelector('.gallery-button-next');
  const paginationEl = container.querySelector('.swiper-pagination');

  // рахуємо оригінальні (без дуплікатів)
  const slidesCount = container.querySelectorAll('.swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)').length;
  const enableLoop = slidesCount > 3;

  const swiper = new Swiper(container, {
    modules: [Navigation, Pagination, Autoplay],
    loop: enableLoop,
    speed: 700,
    grabCursor: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // мобілка: 1 слайд; десктоп: різні ширини
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: true,
      },
    },

    pagination: { el: paginationEl, clickable: true },
    navigation: { nextEl: next, prevEl: prev },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    on: {
      init(sw) {
        applySizes(sw);
        syncUI(sw);
      },
      resize(sw) {
        applySizes(sw);
        syncUI(sw);
      },
      slideChange(sw) {
        applySizes(sw);
      },
    },
  });

  function applySizes(sw) {
    const isDesktop = window.innerWidth >= 1200;
    const activeSlide = sw.slides[sw.activeIndex];

    sw.slides.forEach((slide) => {
      const img = slide.querySelector('img');
      if (!img) return;

      // плавність
      img.style.transition = 'width .35s ease, height .35s ease, transform .35s ease';
      slide.style.transition = 'width .35s ease';

      if (!isDesktop) {
        // 📱 мобілка — 1 слайд
        slide.style.width = '100%';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.maxHeight = '70vh';
      } else {
        // 🖥 десктоп — активний 400x348, інші 200x174
        if (slide === activeSlide) {
          slide.style.width = '400px';
          img.style.width = '400px';
          img.style.height = '348px';
        } else {
          slide.style.width = '200px';
          img.style.width = '200px';
          img.style.height = '174px';
        }
      }
    });

    // критично: після зміни ширин перерахувати лейаут
    sw.update();
  }

  function syncUI(sw) {
    const isDesktop = window.innerWidth >= 1200;
    const hideArrows = !isDesktop || slidesCount <= 3;

    if (prev && next) {
      prev.style.display = hideArrows ? 'none' : 'flex';
      next.style.display = hideArrows ? 'none' : 'flex';
    }

    if (sw.pagination?.el) {
      sw.pagination.el.style.display = slidesCount <= (isDesktop ? 3 : 1) ? 'none' : 'flex';
      // трохи низу, щоб не налазило на мобілці
      sw.pagination.el.style.bottom = isDesktop ? '80px' : '40px';
    }
  }
}

document.addEventListener('DOMContentLoaded', initGallerySwiper);