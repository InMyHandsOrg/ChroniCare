const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Por si es pantalla muy pequeña
        },
        798: {
            slidesPerView: 3, // Pantallas mayores a 797px
        },
        500: {
            slidesPerView: 2, // Justo 797px o menos
        }
    }
});