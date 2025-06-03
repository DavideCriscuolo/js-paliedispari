//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// mi creo delle variabili una per il prompt e una di prova
// const userWord = prompt("Inserisci una parola");

//creo il cilco for per  rovesciare le lettere
let userWord = prompt("Inserisci una parola");

function verifyPali(word) {
  let reverseword = "";
  for (let i = word.length - 1; i >= 0; i--) {
    const wordChar = word[i];

    reverseword = reverseword + wordChar;
  }
  if (reverseword === word) {
    console.log(`La parola ${word} che hai scelto è palindroma`);
  } else {
    console.log(`La parola ${word} che hai scelto non è palindroma`);
  }
  return reverseword;
}
verifyPali(userWord);
