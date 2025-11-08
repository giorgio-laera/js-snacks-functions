/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
function saluto(stringa){}

// Dichiara la funzione qui.
function saluto(stringa){
  
    return "ciao "+stringa;
}

// Invoca la funzione qui e stampa il risultato in console

let unSaluto=saluto(userName)

//Risultato atteso se si passa 'Mario': // ciao Mario
alert(unSaluto);