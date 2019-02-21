'user strict';

(function () {
  var carousel = new Swiper('.hero-section .swiper-container', {
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var TabSwiper = function (options) {
    var init = function (opts) {
      var lastTabIndex = 0;
      var currentTabIndex = opts.startAtIndex || 0;

      document.querySelector(`.tab-header .swiper-slide[data-index="${currentTabIndex}"]`).classList.add('active')

      var tabHeader = new Swiper('.tab-header .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false,
        freeMode: true,
        slideToClickedSlide: true,
        breakpoints: {
          576: {
            allowTouchMove: true,
            spaceBetween: 0,
            slideToClickedSlide: true,
          },
        },
        on: {
          click: function () {
            var index = this.clickedIndex
            var $currentTab = document.querySelector(`.tab-header .swiper-slide[data-index="${index}"]`)

            currentTabIndex = index

            if (lastTabIndex !== currentTabIndex) {
              document.querySelector(`.tab-header .swiper-slide[data-index="${lastTabIndex}"]`).classList.remove('active')
              $currentTab.classList.add('active')
              lastTabIndex = currentTabIndex
            }

            tabBody.slideTo(index, 500, false)
          }
        }
      })

      var tabBody = new Swiper('.tab-body .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false,
      })
    }

    init.call(this, options);
  }

  let tabSwiper = new TabSwiper({
    startAtIndex: 0,
    headerOptions: {

    },
    bodyOptions: {

    }
  })
})()

// TODO:
// 暴露出tabHeader & tabBody 的 options
// default index 包成 function
// 再更細拆分職責
// tabBody fade / scroll effect