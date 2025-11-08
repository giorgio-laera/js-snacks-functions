/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
  

// Dichiara la funzione qui.
function iniziali(arrey) {
     const firstcharacters=[];//variabile d'appoggio della FUNZIONE
    for(i=0; i<arrey.length ; i++){

       const primoElemento = arrey[i];//variabile d'appoggio del CICLO
       console.log(primoElemento);

       firstcharacters.push( primoElemento[0])
       console.log("stato attuale arrey",firstcharacters)
    }
    return firstcharacters;
}

// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(iniziali(names))