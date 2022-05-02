//Consegna:
//Scrivi un programma che stampi in console i numeri da 1 a 100.
//MILESTONE 1
//Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//MILESTONE 2
//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
//MILESTONE 3
//Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// 1. inserire contaainer fino a 100
const container = document.querySelector('.container-small');
console.log(container)
// 2. strutturare un for per numerazione fino a 100
for( let i = 1; i <= 100; i++ ) {
   container.innerHTML += "<div class='box'></div>";
}
// 3. creare una variabile per i multipli
let multipli = i;
// 4. creare una variabile per il testo
let boxtext;
// 4.1 creare una variabile per lo stile
let boxcolor
// 5.creare un if per stabilire come comportarsi in caso di numero multiplo di 3
        //testo "Fizz"
if (multipli !=(multipli % 3)(multipli % 5)) {
    container.innerHTML += "<div class='box'></div>";
} else if (multipli = (multipli % 3)) {
    container.innerHTML += "<div class='box aqua'></div>";
}
// 6. creare un if per stabilire come comportarsi in caso di numero multiplo di 3
        //colore "rgb(98;211;164)"
// 7. creare un if per stabilire come comportarsi in caso di numero multiplo di 3
        //testo "Fizz"
// 8. creare un if per stabilire come comportarsi in caso di numero multiplo di 5
        //testo "Buzz"
// 9. creare un if per stabilire come comportarsi in caso di numero multiplo di 3 e di 5
        //testo "FizzBuzz"