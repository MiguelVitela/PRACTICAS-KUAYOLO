// Grab the count-el element, store it in a countEl variable.

let countEl = document.getElementById("count-el")

console.log(countEl)

let cuenta = 0

function incremento () {
    cuenta += 1
    // Set countEl's innerText to the count 
    countEl.innerText = cuenta
}