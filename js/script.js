let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

    

let cart = document.querySelector('.cart');

document.querySelector('#cart-btn').onclick = () =>
{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    login.classList.toggle('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    login.classList.remove('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');
    
}


window.onscroll = () =>
{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },


    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      1020: {
        slidesPerView: 3,

      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },


    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      1020: {
        slidesPerView: 3,

      },
    },
  });