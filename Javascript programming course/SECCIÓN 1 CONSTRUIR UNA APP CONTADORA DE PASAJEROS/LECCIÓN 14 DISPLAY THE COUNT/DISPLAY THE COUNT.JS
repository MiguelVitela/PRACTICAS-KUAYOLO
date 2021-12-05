// Inicia la cuenta en 0
// Listen for clicks on the increment button
// Increment the count variable when the button is cliked (log it out)
// Change the count-el in the HTML to reflect the new count

let countEL = document.getElementById("count-el")

console.log(countEL)

let contador = 0

function conteo() {
    contador = contador + 1
    countEL.innerText = contador
}