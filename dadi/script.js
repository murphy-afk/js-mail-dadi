// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const humanNumber = Math.floor(Math.random() * 6) + 1;
console.log(humanNumber);
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);
if (humanNumber === computerNumber) {
  console.log("parità");
}
else if (humanNumber > computerNumber) {
  console.log("vince il Giocatore");
}
else {
  console.log("vince il Computer");
}

