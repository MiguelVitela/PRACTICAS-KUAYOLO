let firstCard = 10
let secondCard = 14
let sum = firstCard + secondCard
let hasBlacjck = false
let isAlive = true
// 1. Declare a variable called message and assign its the value of an empty string
let message = " "
// 2. Reassign the message variable to the string we´re logging out.

if (sum <= 20) {
    message = ("Do you want to draw a new card?")
} else if (sum === 21) {
    message = ("Congratulations, You've got a blackjacket!!")
    hasBlacjck = true
} else {
    message = ("Sorry You're out of the game")
    isAlive = false
}


// 3. Log it out
console.log(message)