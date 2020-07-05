
const trailerWindow = document.querySelector("#trailer");
const seriesWindow = document.querySelector("#series");
const castWindow = document.querySelector("#cast");
/*-----кнопки_меню------*/
const trailerBtn1 = document.querySelector("#trailer_btn-1");
const seriesBtn1 = document.querySelector("#series_btn-1");
const castBtn1 = document.querySelector("#cast_btn-1");
const originalsBtт1 = document.querySelector("#originals_btn-1");

const trailerBtn2 = document.querySelector("#trailer_btn-2");
const seriesBtn2 = document.querySelector("#series_btn-2");
const castBtn2 = document.querySelector("#cast_btn-2");
const originalsBtn2 = document.querySelector("#originals_btn-2");

const trailerBtn3 = document.querySelector("#trailer_btn-3");
const seriesBtn3 = document.querySelector("#series_btn-3");
const castBtn3 = document.querySelector("#cast_btn-3");
const originalsBtn3 = document.querySelector("#originals_btn-3");

const trailerBtn4 = document.querySelector("#trailer_btn-4");
const seriesBtn4 = document.querySelector("#series_btn-4");
const castBtn4 = document.querySelector("#cast_btn-4");
const originalsBtn4 = document.querySelector("#originals_btn-4");



seriesBtn1.addEventListener('click', function(){
    seriesWindow.style.marginTop = "0";
    trailerWindow.style.marginTop = "-50%";
    trailerBtn1.classList.remove("active");
    seriesBtn2.classList.add("active");
});
castBtn1.addEventListener('click', function(){
    seriesWindow.style.marginTop = "-50%";
    trailerWindow.style.marginTop = "-50%";
    castWindow.style.marginTop = "0"
    trailerBtn1.classList.remove("active");
    seriesBtn3.classList.remove("active");
    castBtn3.classList.add("active");
});




trailerBtn2.addEventListener('click', function(){
    seriesWindow.style.marginTop = "100%";
    trailerWindow.style.marginTop = "0";
    trailerBtn1.classList.add("active");
    seriesBtn1.classList.remove("active");
});
castBtn2.addEventListener('click', function(){
    seriesWindow.style.marginTop = "-50%";
    trailerWindow.style.marginTop = "-50%";
    castWindow.style.marginTop = "0"
    trailerBtn1.classList.remove("active");
    seriesBtn3.classList.remove("active");
    castBtn3.classList.add("active");
});





trailerBtn3.addEventListener('click', function(){
    seriesWindow.style.marginTop = "100%";
    trailerWindow.style.marginTop = "0";
    trailerBtn1.classList.add("active");
    seriesBtn1.classList.remove("active");
});
seriesBtn3.addEventListener('click', function(){
    seriesWindow.style.marginTop = "0";
    trailerWindow.style.marginTop = "-50%";
    trailerBtn1.classList.remove("active");
    seriesBtn2.classList.add("active");
});