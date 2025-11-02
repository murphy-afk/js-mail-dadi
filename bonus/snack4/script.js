// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

const number = prompt("inserisci un numero");
for (let i = 1; i <= number; i++) {
  let cube = i * i;
  console.log(cube);
}
