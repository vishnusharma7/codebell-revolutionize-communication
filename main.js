// const nav = document.querySelector('.nav');

// window.addEventListener('scroll', () => {
// const scrollY = window.scrollY;

// const opacity = Math.min(0.8, scrollY / 200); // Adjust 200 to control when the effect starts
// const blur = Math.min(5, scrollY / 10);

// nav.style.backgroundColor = `rgba(255, 255, 255, ${0})`;
// nav.style.backdropFilter = `blur(${20}px)`;
// });
// ---------------------hamburger---------------------
const toggleBtn = document.querySelector(".mobile-view-menu-icon");
const toggleBtnIcon = toggleBtn.querySelector("i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
  toggleBtnIcon.classList.toggle("fa-xmark", isOpen);
};

document.addEventListener("DOMContentLoaded", function () {
  const questionBoxes = document.querySelectorAll(".question-box");

  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 200) {
    document.querySelector(".nav").classList.add("sticky-nav");
  } else {
    document.querySelector(".nav").classList.remove("sticky-nav");
  }
};

// let heroSectionSlide = new Swiper(".container", {
  
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 6000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
   
//   },
 
  
// });





let reviewCustomer = new Swiper(".reviews-feedback", {
  spaceBetween: 5,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
   
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// video script

function showVideoPopup() {
  var videoPopupContainer = document.getElementById('videoPopupContainer');
  videoPopupContainer.style.display = 'block';
}

function hideVideoPopup() {
  var videoPopupContainer = document.getElementById('videoPopupContainer');
  videoPopupContainer.style.display = 'none';
  var videoElement = document.querySelector('.video-popup');
    videoElement.pause();

}