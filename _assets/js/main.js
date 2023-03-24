/*

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/

const container = document.querySelector(".container"); // Selezione del Container nel DOM

for (let numberGenerator = 1; numberGenerator <= 100; numberGenerator++) { // Ciclo per generare dei numeri da 1 a 100

    let output = "";

    if (output == "") { // se la variabile output è vuota
        output += numberGenerator; // inseriamo il numero stesso
    } if (numberGenerator % 3 == 0) { // se il numero è divisibile per 3
        output = 'Fizz'; // aggiungiamo "Fizz"
    } if (numberGenerator % 5 == 0) { // se il numero è divisibile per 5
        output = 'Buzz'; // aggiungiamo "Buzz"
    } if (numberGenerator % 3 == 0 && numberGenerator % 5 == 0) { // se il numero è divisibile sia per 3 che per 5
        output = 'FizzBuzz'; // sostituiamo con "FizzBuzz"
    }

    const box = document.createElement('div'); // div che va dentro al container
    box.textContent = output; // output che va dentro i box
    box.classList.add("box"); // aggiunta classe box a tutti i div dentro il container

    if (output === 'Fizz') {
        box.classList.add('fizz');
    } else if (output === 'Buzz') {
        box.classList.add('buzz');
    } else if (output === 'FizzBuzz') {
        box.classList.add('fizzbuzz');
    } else {
        box.classList.add('box');
    }

    container.append(box);
}