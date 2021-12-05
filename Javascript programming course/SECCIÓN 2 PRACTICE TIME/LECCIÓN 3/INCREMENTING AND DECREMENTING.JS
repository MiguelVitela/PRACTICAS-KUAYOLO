let myPoints = 3

// Create 2 functions add3Points() and removePoint(), and have them.

function add3Points() {
myPoints += 3
}

function removePoint() {
myPoints -=1
}

// add/remove points to/from myPoints variable.

add3Points() //6
add3Points() //9
add3Points() //12
removePoint() //11
removePoint() //10

// Call the functions to that line below logs out 10

console.log(myPoints)