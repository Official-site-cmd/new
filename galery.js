
    const thumbSwiper = new Swiper(".thumb-slider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        }
      }
    });

    const mainSwiper = new Swiper(".main-slider", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  