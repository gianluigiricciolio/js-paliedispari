'use strict';

// Chiedere all’utente di inserire una parola

const palindroma = prompt('Inserire una frase ');
console.log(`La parola inserita è ${palindroma}`);

// Creare una funzione per capire se la parola inserita è palindroma

if(isPalindroma(palindroma)) console.log('Palindroma');
else console.log('Non palindroma');


function isPalindroma (parola){
    let palindroma2="";
    const buffer = new Array(parola.length);

    for (let count = 0; count < parola.length; count++){
        buffer[parola.length-1-count]=parola[count];
    }
    palindroma2=buffer.toString().replace(/,/g,'');
    if(parola!==palindroma2){
        return false;
    } else return true;
}