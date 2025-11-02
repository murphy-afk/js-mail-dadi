// Crea due array che hanno un numero di elementi diversi.  
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = [1, 2, 3]

let longer = a;
let shorter = b;
if (a.length < b.length) {
  longer = b;
  shorter = a;
}

const difference = longer.length - shorter.length;
for (let i = 0; i < difference; i++) {
    const newElement = Math.floor(Math.random() * 10);
    shorter.push(newElement)
}

console.log(longer, shorter);
