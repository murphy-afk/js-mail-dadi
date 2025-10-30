// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("inserisci una parola");
const secondWord = prompt("inserisci un'altra parola");

if (firstWord.length <= secondWord.length) {
  console.log(firstWord, secondWord);
}
else {
  console.log(secondWord, firstWord);
}