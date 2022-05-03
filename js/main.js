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
   let box = document.querySelector('.box');
   if ( i % 3 === 0 && i % 5 === 0) {
// 3. creare un if per stabilire come comportarsi in caso di numero multiplo di 5
//testo "FizzBuzz"
           console.log("FizzBuzz");
           box.classList.add('pink');
           box.innerText = "FizzBuzz";
// 4. creare un if per stabilire come comportarsi in caso di numero multiplo di 5
//testo "Fizz"
   } else if ( i % 3 === 0) {
           console.log("Fizz");
           box.classList.add('aqua');
           box.innerText = "Fizz";
 // 5. creare un if per stabilire come comportarsi in caso di numero multiplo di 5
        //testo "Buzz"
   } else if ( i % 5 === 0) {
           console.log("Buzz");
           box.classList.add('yellow');
           box.innerText = "Buzz";
   } else {
           console.log(i);
   }

   container.append(box);
}
