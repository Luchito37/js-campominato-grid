/*
Consegna
Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/








let text = "";


for (let i = 1; i <= 100; i++) {


console.log ("calcolo dei numeri")

let text = i.toString();

console.log (text)

const resultListHtml = document.querySelector(".result-list");


resultListHtml.innerHTML += `<a href="#">
                                ${text}
                                </a>`; 

}