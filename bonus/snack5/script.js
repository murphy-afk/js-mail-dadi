// Snack 5
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi
//  e una lista di cognomi,
//   e da queste vuole generare una falsa lista di 5 invitati con nome e cognome.

const nomi = [
  "Albert",
  "Leonardo",
  "Marilyn",
  "Michael",
  "Serena",
  "Elon",
  "Frida",
  "Steve",
  "Beyoncé",
  "David"
];

const cognomi = [
  "Einstein",
  "da Vinci",
  "Monroe",
  "Jackson",
  "Williams",
  "Musk",
  "Kahlo",
  "Jobs",
  "Knowles",
  "Beckham"
];

const guests = [];

for (let i = 0; i < 5; i++) {
  const randomIndexName = Math.floor(Math.random() * nomi.length - 1);
  const randomIndexLastName = Math.floor(Math.random() * cognomi.length - 1);
  const newName = nomi.at(randomIndexName);
  const newLastName = cognomi.at(randomIndexLastName);
  const newGuest = `${newName} ${newLastName}`;
  guests.push(newGuest);
}
console.log(guests);
