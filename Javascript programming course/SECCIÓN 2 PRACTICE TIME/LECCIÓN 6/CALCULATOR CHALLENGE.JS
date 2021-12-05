let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create 4 functions add(), substrsct(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num 2.
// Render the result of the calculation on the graph with id="sum-el"


// Example if the user click on the "plus button", you should render 
// "sum: 10" inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function substract() {
    let result = num1 - num2
    sumEl.textContent = "Subs: " + result
}

function divide() {
   let result =  num1 / num2
   sumEl.textContent = "Div: " + result
}

function multiply() {
    result = num1 * num2
    sumEl.textContent = "Mul: " + result
}