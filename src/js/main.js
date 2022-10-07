$('#js-carousel-1').owlCarousel({
    loop: true,
    autoplay: true,
    slideTransition: 'linear',
    items: 2,
    nav: false,
    dots: false,

    responsive: {
        600: {
            items: 3
        }
    }
});

var sec = 1800,
    countDiv = document.getElementById("timer"),
    countDown   = setInterval(function () {
        'use strict';

        secpass();
    }, 1000);

function secpass() {
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + remSec;
    if (sec > 0) {
        sec = sec - 1;
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = 'countdown done';
    }
}
