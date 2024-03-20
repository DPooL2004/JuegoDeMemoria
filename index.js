let card = document.getElementById('Card')
let card2 = document.getElementById('Card2')
let card3 = document.getElementById('Card3')
let card4 = document.getElementById('Card4')
let card5 = document.getElementById('Card5')
let card6 = document.getElementById('Card6')
let card7 = document.getElementById('Card7')
let card8 = document.getElementById('Card8')
let card9 = document.getElementById('Card9')
let card10 = document.getElementById('Card10')
let card11 = document.getElementById('Card11')
let card12 = document.getElementById('Card12')
let card13 = document.getElementById('Card13')
let card14 = document.getElementById('Card14')
let card15 = document.getElementById('Card15')
let card16 = document.getElementById('Card16')


card.addEventListener('click', quitarFondo)
card2.addEventListener('click', quitarFondo2)



function quitarFondo(){
    document.getElementById('imagen').setAttribute("src", " ")
}

function quitarFondo2(){
    document.getElementById('imagen2').setAttribute("src", " ")
}
