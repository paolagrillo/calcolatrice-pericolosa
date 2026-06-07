let display = document.getElementById("display");
let nuovoCalcolo = false;

function cancella() {
    display.value = "0";
}




function premiNumero(numero) {
    if (nuovoCalcolo || display.value === "0") {
        display.value = numero;
        nuovoCalcolo = false;
    } else {
        display.value += numero;
    }
}




function addizione() {
    display.value += "+";
}

function sottrazione() {
    display.value += "-";
}

function moltiplicazione() {
    display.value += "*";
}

function divisione() {
    display.value += "/";
}




function risultato() {
    let calcolo = eval(display.value);
    if (calcolo === Infinity || isNaN(calcolo)) {
        display.value = "Errore";
    } else {
        display.value = calcolo;
    }
    nuovoCalcolo = true;
}





let canc = document.querySelectorAll(".btn-canc");
canc.forEach(function (canc) {
    canc.addEventListener("click", function () { cancella(); });
});

let bottoni = document.querySelectorAll(".btn-numero");
bottoni.forEach(function (bottone) {
    bottone.addEventListener("click", function () { premiNumero(bottone.textContent); });
});

let piu = document.querySelectorAll(".btn-piu");
piu.forEach(function (piu) {
    piu.addEventListener("click", function () { addizione(); });
});

let meno = document.querySelectorAll(".btn-meno");
meno.forEach(function (meno) {
    meno.addEventListener("click", function () { sottrazione(); });
});

let per = document.querySelectorAll(".btn-per");
per.forEach(function (per) {
    per.addEventListener("click", function () { moltiplicazione(); });
});

let diviso = document.querySelectorAll(".btn-diviso");
diviso.forEach(function (diviso) {
    diviso.addEventListener("click", function () { divisione(); });
});

let uguale = document.querySelectorAll(".btn-uguale");
uguale.forEach(function (uguale) {
    uguale.addEventListener("click", function () { risultato(); });
});



function canc1() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

let bottoneCanc1 = document.querySelectorAll(".btn-canc1");
bottoneCanc1.forEach(function (bottone) {
    bottone.addEventListener("click", function () { canc1(); });
});



function punto() {
    let ultimoNumero = display.value.split(/[\+\-\*\/]/).pop();
    if (!ultimoNumero.includes(".")) {
        display.value += ".";
    }
}

let puntino = document.querySelectorAll(".btn-punto");
puntino.forEach(function(point) {
    point.addEventListener("click", function () { punto(); });
});