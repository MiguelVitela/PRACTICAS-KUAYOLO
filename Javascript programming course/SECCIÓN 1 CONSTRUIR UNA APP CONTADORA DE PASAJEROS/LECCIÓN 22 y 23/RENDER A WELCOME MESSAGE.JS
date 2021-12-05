// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomEl = document.getElementById("welcome-el")

// Create 2 variables name and greeting that contains your name 
// and the greeting we want to render on the page.

let name = "Miguel"
let greeting = "Hi, my name is "

// Render the welcome message using welcomeEl.innerText.

welcomEl.innerText = greeting + name

// Add an emoji to the end
// WRITE YOUR CODE BELOW HERE 
// HINT: count = count + 1

// La solución es la siguiente
//welcomEl.innerText = welcomEl.innerText + "🤤"

// Aunque existe una manera más corta de realizarlo:

welcomEl.innerText += "🤤"