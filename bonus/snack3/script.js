// Crea una variabile con un numero di 4 cifre
//  e calcola la somma di tutte le cifre che compongono il numero.

// il minimo è 1000, il massimo è 9999
// l'intervallo è massimo - minimo 
// scegli un numero random tra l'inizio e la fine dell'intervallo 

const min = 1000;
const max = 9999;
const interval = max - min;
const randomNumber = Math.floor(Math.random() * interval) + min;

console.log(randomNumber);

const t = Math.floor(randomNumber / 1000);
console.log(t);
const h = Math.floor((randomNumber - (t * 1000)) / 100);
console.log(h);
const d = Math.floor((randomNumber - (t * 1000) - (h * 100)) / 10);
console.log(d);
const u = randomNumber - (t * 1000) - (h * 100) - (d * 10);
console.log(u);
const sum = t + h + d + u;
console.log(sum);



