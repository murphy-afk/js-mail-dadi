// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

const userEmailList = ["a@g.com", "b@g.com", "c@g.com", "d@g.com" ];
const userEmail = prompt("inserisci la tua email");
for (let i = 0; i < userEmailList.length; i++) {
  if (userEmail === userEmailList[i]) {
    console.log("Acesso approvato");
  }
}

