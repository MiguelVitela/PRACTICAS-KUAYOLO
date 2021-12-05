/* When the user clicks the purchase button, render out "something went wrong, please try again"
in the paragraph that has the id="error". */

let errorEl = document.getElementById("error-el")

function compra() {
    console.log("Button clicked")
    errorEl.textContent = "Something went wrong, please try again"
}