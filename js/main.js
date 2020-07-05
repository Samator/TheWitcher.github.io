const footerBtn = document.querySelector(".play-button");
const footerBtnText = document.querySelector(".play-button-text");

footerBtn.addEventListener('mouseover', function(){
    footerBtn.classList.toggle("play-button-active");
    footerBtnText.style.display = "none";
});
footerBtn.addEventListener('mouseout', function(){
    footerBtn.classList.toggle("play-button-active");
    footerBtnText.style.display = "block";
});




