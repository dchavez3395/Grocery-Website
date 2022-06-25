const searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector('#cart-btn').onclick = () =>{
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

const loginForm = document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}

const navbar = document.querySelector(".navbar");
const menu = document.querySelector('#menu-btn');


document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingForm.classList.remove('active');
  loginForm.classList.remove('active');
}



window.onscroll = () =>{
  searchForm.classList.remove('active');
  shoppingForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
       loop: true,
       spaceBetween: 20,
       autoplay: {
         delay: 2800,
         disableOnInteraction: false,
       },
       centeredSlides: true,
       breakpoints: {
         "@0.00": {
           slidesPerView: 1,
         },
         "@0.768": {
           slidesPerView: 2,
         },
         "@1.26": {
           slidesPerView: 3,
         },
       },
     });

     var swiper = new Swiper(".review-slider", {
            loop: true,
            spaceBetween: 20,
            autoplay: {
              delay: 2800,
              disableOnInteraction: false,
            },
            centeredSlides: true,
            breakpoints: {
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.768": {
                slidesPerView: 2,
              },
              "@1.26": {
                slidesPerView: 3,
              },
            },
          });
