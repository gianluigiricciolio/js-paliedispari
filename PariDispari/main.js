'use strict';


// L’utente sceglie pari o dispari
const scelta = sceltaTipo();
console.log(scelta);
// inserisce un numero da 1 a 5
const numeroUtente = sceltaNumero();
console.log(numeroUtente);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const numeroComputer = sceltaNumeroComputer();
console.log(numeroComputer);

// Sommiamo i due numeri

const somma = numeroUtente+numeroComputer;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
if(scelta===pariDispari(somma)) console.log('Hai vinto');
else console.log('Ha vinto il PC');


// FUNZIONI

function sceltaNumeroComputer() {
    return Math.ceil(Math.random()*5);
}

function sceltaNumero() {
    let buffer;
    do {
        buffer = prompt('Scegli un numero da 1 a 5');
    } while (buffer<1 || buffer>5 || isNaN(buffer));
    return Math.floor(Number(buffer));
}

function sceltaTipo() {
    let buffer;
    do {
        buffer=prompt('Pari o dispari').toLowerCase();
    } while(  buffer!=="pari" && buffer!=="dispari");
    return buffer;
}

function pariDispari(num){
    if(num%2==0) return "pari";
    return "dispari";
}