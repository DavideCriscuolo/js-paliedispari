/*Pari e Dispari
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

let choiseUser = prompt("Sccegli pari o dispari");
let choiseUserNumb = Number(prompt("Scegli un numero da 1 a 5"));

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pcNumber = getRndInteger(1, 5);

function winner(num1, num2) {
  somma = num1 + num2;
  if (choiseUserNumb % 2 === 0 && choiseUser === "pari") {
    console.log(`Hai scelto il numero pari ${choiseUserNumb}`);
  } else {
    console.log(`Hai scelto il numero dispari ${choiseUserNumb}`);
  }

  if (somma % 2 === 0 && choiseUserNumb % 2 === 0) {
    console.log(`La somma dei due numeri è ${somma}. Hai vinto!`);
  } else if (somma % 2 !== 0 && choiseUserNumb % 2 !== 0) {
    console.log(`La somma dei due numeri è ${somma}. Hai vinto!`);
  } else {
    console.log(`La somma dei due numeri è ${somma}. Ha vinto il pc!`);
  }

  return somma;
}

const result = winner(choiseUserNumb, pcNumber);
console.log(result);
