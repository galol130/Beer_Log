/////////////// Scripts para Search.html /////////////// 

window.history.forward(1); //Makes it difficult to use the "back" button in the browser

//Script para slider Alcohol
var sliderAlcMin = document.getElementById("alc_min");
var outputAlcMin = document.getElementById('alc_min_val');
outputAlcMin.innerHTML = sliderAlcMin.value / 10;
console.log(sliderAlcMin.value);

sliderAlcMin.oninput = function () {
    outputAlcMin.innerHTML = this.value / 10;
    console.log(this.value);
}

var sliderAlcMax = document.getElementById("alc_max");
var outputAlcMax = document.getElementById('alc_max_val');
outputAlcMax.innerHTML = sliderAlcMax.value / 10;
console.log(sliderAlcMax.value);

sliderAlcMax.oninput = function () {
    outputAlcMax.innerHTML = this.value / 10;
    console.log(this.value);
}
//Fin script para slider Alcohol

//Script para switch Alcohol
let alcRangeActive = false;
function ShowAlcSlider() {
    let checkBoxAlc = document.getElementById("toggleAlc");
    let sliderAlcLeft = document.getElementById("sliderAlcMin");
    let sliderAlcRight = document.getElementById("sliderAlcMax");

    if (checkBoxAlc.checked == true) {
        sliderAlcLeft.style.opacity = 1;
        sliderAlcRight.style.opacity = 1;
        return alcRangeActive = true;
    }
    else {
        sliderAlcLeft.style.opacity = 0.1;
        sliderAlcRight.style.opacity = 0.1;
        return alcRangeActive = false;
    }

}
//Fin script para switch Alcohol


//Script para slider Amargo
var sliderBitMin = document.getElementById("bit_min");
var outputBitMin = document.getElementById('bit_min_val');
outputBitMin.innerHTML = sliderBitMin.value;
console.log(sliderBitMin.value);

sliderBitMin.oninput = function () {
    outputBitMin.innerHTML = this.value;
    console.log(this.value);
}

var sliderBitMax = document.getElementById("bit_max");
var outputBitMax = document.getElementById('bit_max_val');
outputBitMax.innerHTML = sliderBitMax.value;
console.log(sliderBitMax.value);

sliderBitMax.oninput = function () {
    outputBitMax.innerHTML = this.value;
    console.log(this.value);
}
//Fin script para slider Amargo

//Script para switch Amargo
let bitRangeActive = false;
function ShowBitSlider() {
    let checkBoxBit = document.getElementById("toggleBit");
    let sliderBitLeft = document.getElementById("sliderBitMin");
    let sliderBitRight = document.getElementById("sliderBitMax");

    if (checkBoxBit.checked == true) {
        sliderBitLeft.style.opacity = 1;
        sliderBitRight.style.opacity = 1;
        return bitRangeActive = true;
    }
    else {
        sliderBitLeft.style.opacity = 0.1;
        sliderBitRight.style.opacity = 0.1;
        return bitRangeActive = false;
    }
}
//Fin script para switch Amargo


//Script para slider Color
var sliderColMin = document.getElementById("col_min");
var outputColMin = document.getElementById('col_min_val');
outputColMin.innerHTML = sliderColMin.value;
console.log(sliderColMin.value);

sliderColMin.oninput = function () {
    outputColMin.innerHTML = this.value;
    console.log(this.value);
}

var sliderColMax = document.getElementById("col_max");
var outputColMax = document.getElementById('col_max_val');
outputColMax.innerHTML = sliderColMax.value;
console.log(sliderColMax.value);

sliderColMax.oninput = function () {
    outputColMax.innerHTML = this.value;
    console.log(this.value);
}
//Fin script para slider Color

//Script para switch Color
let colRangeActive = false;
function ShowColSlider() {
    let checkBoxCol = document.getElementById("toggleCol");
    let sliderColLeft = document.getElementById("sliderColMin");
    let sliderColRight = document.getElementById("sliderColMax");

    if (checkBoxCol.checked == true) {
        sliderColLeft.style.opacity = 1;
        sliderColRight.style.opacity = 1;
        return colRangeActive = true;
    }
    else {
        sliderColLeft.style.opacity = 0.1;
        sliderColRight.style.opacity = 0.1;
        return colRangeActive = false;
    }
}
//Fin script para switch Color



//Script de búsqueda por palabra ingresada
let inputWords = document.getElementById('wordsToSearch')
inputWords.focus();
inputWords.addEventListener('keyup',function(event){
    if (event.keyCode===13){
        event.preventDefault();
        document.getElementById('button_search').click();
    }
})

let searchButton = document.getElementById('button_search');

searchButton.addEventListener('click', function () {
    let urlStart = 'https://api.punkapi.com/v2/beers/?';
    inputWords = document.getElementById('wordsToSearch').value;
    let urlFinal = '';
    let urlAlc = '';
    let urlBit = '';
    let urlCol = '';
    let urlName = '';

    if (alcRangeActive == true) {
        let alcMin = document.getElementById('alc_min').value;
        let alcMax = document.getElementById('alc_max').value;
        urlAlc = 'abv_gt=' + (alcMin / 10) + '&' + 'abv_lt=' + (alcMax / 10) + '&';
    }
    if (bitRangeActive == true) {
        let bitMin = document.getElementById('bit_min').value;
        let bitMax = document.getElementById('bit_max').value;
        urlBit = 'ibu_gt=' + bitMin + '&' + 'ibu_lt=' + bitMax + '&';
    }
    if (colRangeActive == true) {
        let colMin = document.getElementById('col_min').value;
        let colMax = document.getElementById('col_max').value;
        urlCol = 'ebc_gt=' + colMin + '&' + 'ebc_lt=' + colMax + '&';

    }
    if (inputWords === "") {
        urlName = "";
    }
    else {
        urlName = 'beer_name=' + inputWords + '&';
        sessionStorage.setItem('searchedWord',inputWords);
    }
    console.log(inputWords);
    urlFinal = urlStart + urlName + urlAlc + urlBit + urlCol;
    console.log(urlFinal);
  
    sessionStorage.setItem('urlSearch',urlFinal);
    location.href = 'ResultBeers.html';

})


