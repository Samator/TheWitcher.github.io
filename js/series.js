const nextBtn = document.querySelector(".next");
let number = document.querySelector(".number-series");
let name = document.querySelector(".next-name");
let seriesName = document.querySelector(".series-name");

let numberSeries = 1

nextBtn.addEventListener('click', function(){
    numberSeries == numberSeries++
    console.log(numberSeries);
    if(numberSeries == 2){
        seriesName.textContent = "Four Marks"
        number.textContent = "03"
        name.textContent = "Betrayer Moon"
    }
    if(numberSeries == 3){
        seriesName.textContent = "Betrayer Moon"
        number.textContent = "04"
        name.textContent = "Of Banquets, Bastards and Burials"
    }
    if(numberSeries == 4){
        seriesName.textContent = "Of Banquets, Bastards and Burials"
        number.textContent = "05"
        name.textContent = "Bottled Appetites"
    }
    if(numberSeries == 5){
        seriesName.textContent = "Bottled Appetites"
        number.textContent = "06"
        name.textContent = "Rare Species"
    }
    if(numberSeries == 6){
        seriesName.textContent = "Rare Species"
        number.textContent = "07"
        name.textContent = "Before A Fall"
    }
    if(numberSeries == 7){
        seriesName.textContent = "Before A Fall"
        number.textContent = "08"
        name.textContent = "Much More"
    }
    if(numberSeries == 8){
        seriesName.textContent = "Much More"
        number.textContent = "00"
        name.textContent = "season 2"
    }
    if(numberSeries == 9){
        numberSeries == 1;
    }
});