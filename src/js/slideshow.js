const track =
    document.querySelector(".slides-track");

const indicators =
    document.querySelectorAll(".indicator");

let slideAtual = 0;

const totalSlides = 3;

function atualizarSlideshow(){

    track.style.transform =
        `translateX(-${slideAtual * 33.333}%)`;

    indicators.forEach(indicator => {

        indicator.classList.remove("active");

    });

    indicators[slideAtual]
        .classList.add("active");

}

setInterval(() => {

    slideAtual++;

    if(slideAtual >= totalSlides){

        slideAtual = 0;

    }

    atualizarSlideshow();

}, 4000);