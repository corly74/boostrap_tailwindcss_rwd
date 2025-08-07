
// <!-- Initialize Swiper -->


// $(function () {


//     var swiper1 = new Swiper('#video_swiper', {
       
//         autoplay: stop,
//         loop: true,
//         slidesPerView: 3,
//         spaceBetween: 15,
//         speed: 2000,
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 15,
//             },
//             768: {
//                 slidesPerView: 3,
//                 spaceBetween: 15,

//             }


//         },


//         freeMode: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },


//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },



//     });

//     var swiper2 = new Swiper('#student_swiper', {
//         autoplay: {
//             delay: 5000,
//         },
//         loop: true,
//         slidesPerView: 3,
//         spaceBetween: 15,

//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 15,
//             },
//             768: {
//                 slidesPerView: 2,
//                 spaceBetween: 15,

//             },
//             1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 15,

//             }

//         },


//         freeMode: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },


//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },



//     });



//     var mySwiper3 = new Swiper('#bannar_slider', {
//         spaceBetween: 30,
//         effect: 'fade',

//         autoplay: true,
//         autoplay: {
//             speed: 1500,
//             pause: 6000,
//             delay: 3000, 
//             stopOnLastSlide: false,
//             disableOnInteraction: true,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },

//     })



// });

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper3 = new Swiper('#bannar_slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true, // 建議搭配 fade 效果使用

    speed: 1500, // 動畫切換速度 (ms)
    
    autoplay: {
      delay: 3000, // 每張圖片停留時間
      disableOnInteraction: false, // 使用者滑動後仍自動播放
    },

    pagination: {
      el: '#bannar_slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '#bannar_slider .swiper-button-next',
      prevEl: '#bannar_slider .swiper-button-prev',
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper2 = new Swiper('#student_swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    freeMode: true,
    spaceBetween: 15,
    slidesPerView: 3,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    },

    pagination: {
      el: '#student_swiper .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '#student_swiper .swiper-button-next',
      prevEl: '#student_swiper .swiper-button-prev',
    },
  });
});