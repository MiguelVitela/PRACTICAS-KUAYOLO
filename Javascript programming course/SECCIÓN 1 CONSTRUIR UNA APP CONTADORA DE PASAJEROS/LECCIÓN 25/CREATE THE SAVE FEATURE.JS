
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let cuenta = 0

function incremento () {
    cuenta += 1
    countEl.innerText = cuenta
}


function save(){
    let countStr = cuenta + " - "
    saveEl.innerText += countStr
}