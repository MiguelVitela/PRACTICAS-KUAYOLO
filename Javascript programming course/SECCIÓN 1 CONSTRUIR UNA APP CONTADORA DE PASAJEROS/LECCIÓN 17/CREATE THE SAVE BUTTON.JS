let countEl = document.getElementById("count-el")
let cuenta = 0

function incremento () {
    cuenta += 1
    countEl.innerText = cuenta
}

//  Create a function save(), which logs out the count when it´s called
function save(){
    console.log(cuenta)
}