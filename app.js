import "./componentes/div-tablas.js"
import "./componentes/div.reclutas.js"
import "./app/render.js"

let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

myModal.addEventListener('click',()=> {
myInput.focus()
})