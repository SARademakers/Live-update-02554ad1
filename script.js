var input = document.querySelector('input');
var totaal = document.querySelector('h2');
let time = document.querySelector('p');
const pi = 3.14;

showTime();

setInterval(() => {
    showTime();
}, 1000);

function showTime() {
    time.innerText = "Het is: " + getTime();
}

function getTime() {
    var date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}

function omtrek() {    
    return input.value * pi;
}

function oppervlakte() {
    let oppervlakten = input.value
    return (oppervlakten * oppervlakten * pi * 0.25);
}

function eindtotaal() {
    totaal.innerText = "Omtrek: " +  omtrek() + " Oppervlakte: " + oppervlakte();
}