// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let number = prompt("inserisci un numero");
if (number % 2 === 0) {
  console.log(number)
}
else {
  console.log(parseInt(number) + 1);
  
}