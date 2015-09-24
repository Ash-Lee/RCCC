/* JavaScript Code */


/*========================================*/
  /* Slideshow */
/*========================================*/
var sliderInt = 1,
    sliderNext = 2;


$(document).ready( function() {
    $('#slider > div#1').fadeIn(300);
    startSlider();

    $('#slider > div').hover(
        function() {
            stopLoop();
        },
        function() {
            startSlider();
        }
    );
});


function startSlider() {
    count = $('#slider > div').size();

    loop = setInterval( function() {

        if(sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }

        $('#slider > div').fadeOut(300);
        $('#slider > div#' + sliderNext).fadeIn(300);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 5000)
}


function prev() {
    newSlide = sliderInt - 1;
    if (newSlide === 0) {
        newSlide = 4;
    }
    showSlide(newSlide);
}


function next() {
    newSlide = sliderInt + 1;
    showSlide(newSlide);
}


function stopLoop() {
    window.clearInterval(loop);
}


function showSlide(id) {
    stopLoop();

    if(id > count) {
        id = 1;
    } else if(id < 1) {
        id - count;
    }

    $('#slider > div').fadeOut(300);
    $('#slider > div#' + id).fadeIn(300);

    sliderInt = id;
    sliderNext = id + 1;

    startSlider();
}