const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },

})