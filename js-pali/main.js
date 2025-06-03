//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// mi creo delle variabili una per il prompt e una di prova
const userWord = prompt("Inserisci una parola");
const word = "davide";
let reverseword = "";
//creo il cilco for per  rovesciare le lettere
for (let i = word.length - 1; i >= 0; i--) {
  const wordChar = word[i];
  reverseword = reverseword + wordChar;
  if (reverseword === word) {
    console.log("è palindorma");
  } else {
    console.log("non è palindorma");
  }
}

function verifyPali() {}
