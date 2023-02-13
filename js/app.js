/*---------------- SCROLL AND CHANGE NAVBAR -----*/

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
/*---------------- SCROLL AND CHANGE NAVBAR END -----*/

/*----start  filtre blog ----*/
let sortBtn = document.querySelector(".filter-menu").children;
let sortItem = document.querySelector(".filter-item").children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }

    this.classList.add("current");

    let targetData = this.getAttribute("data-target");

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove("active");
      sortItem[k].classList.add("delete");

      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
    }
  });
}

/*----End  filtre blog ----*/

/// TESTIMONIALS
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var swiper = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerview: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      autoplay: {
        delay: 1000,
      },

      breakpoints: {
        // when windows width is > = 600px

        600: {
          slidesPerView: 2,
        },
        // when windows width is > = 1024px

        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}
$(document).ready(function () {
  initParadoxWay();
});
