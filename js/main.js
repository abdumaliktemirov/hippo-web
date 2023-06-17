var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: '6',
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        // Medya
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        500: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        700: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
        1000: {
            slidesPerView: 5,
            spaceBetweenSlides: 30
        },
        1200: {
            slidesPerView: 6,
            spaceBetweenSlides: 30
        },
    }
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

// Щиток правой кнопкой мыши
// document.oncontextmenu = function () {

//     return false;
// }

document.onkeydown = function () {
    var e = window.event || arguments[0];
    // Щит F12
    if (e.keyCode == 123) {

        return false;
        // Щит Ctrl + Shift + I
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {

        return false;
        // Щит Ctrl + Shift + U
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 67)) {

        return false;
        // Щит Ctrl + U
    } else if ((e.ctrlKey) && (e.keyCode == 85)) {

        return false;
        // Щит Shift + F10
    } else if ((e.shiftKey) && (e.keyCode == 121)) {

        return false;
    }
};

// Medya