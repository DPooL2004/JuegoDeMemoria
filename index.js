let boton = document.getElementById('botonJugar')
let puntaje = document.getElementById('score')
let aciertos = 0
let tarjetasDestapadas = 0
let tarjetaDestapada1 = null
let tarjetaDestapada2 = null
let tarjetaResult1 = null
let tarjetaResult2 = null

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

let imagen = document.getElementById('imagen')
let imagen2 = document.getElementById('imagen2')
let imagen3 = document.getElementById('imagen3')
let imagen4 = document.getElementById('imagen4')
let imagen5 = document.getElementById('imagen5')
let imagen6 = document.getElementById('imagen6')
let imagen7 = document.getElementById('imagen7')
let imagen8 = document.getElementById('imagen8')
let imagen9 = document.getElementById('imagen9')
let imagen10 = document.getElementById('imagen10')
let imagen11 = document.getElementById('imagen11')
let imagen12 = document.getElementById('imagen12')
let imagen13 = document.getElementById('imagen13')
let imagen14 = document.getElementById('imagen14')
let imagen15 = document.getElementById('imagen15')
let imagen16 = document.getElementById('imagen16')



let cardText = card.querySelector('.contenidoCard span').textContent
let cardText2 = card2.querySelector('.contenidoCard span').textContent
let cardText3 = card3.querySelector('.contenidoCard span').textContent
let cardText4 = card4.querySelector('.contenidoCard span').textContent
let cardText5 = card5.querySelector('.contenidoCard span').textContent
let cardText6 = card6.querySelector('.contenidoCard span').textContent
let cardText7 = card7.querySelector('.contenidoCard span').textContent
let cardText8 = card8.querySelector('.contenidoCard span').textContent
let cardText9 = card9.querySelector('.contenidoCard span').textContent
let cardText10 = card10.querySelector('.contenidoCard span').textContent
let cardText11 = card11.querySelector('.contenidoCard span').textContent
let cardText12 = card12.querySelector('.contenidoCard span').textContent
let cardText13 = card13.querySelector('.contenidoCard span').textContent
let cardText14 = card14.querySelector('.contenidoCard span').textContent
let cardText15 = card15.querySelector('.contenidoCard span').textContent
let cardText16 = card16.querySelector('.contenidoCard span').textContent


let cardv = document.getElementById('Card').dataset.value
let card2v = document.getElementById('Card2').dataset.value
let card3v = document.getElementById('Card3').dataset.value
let card4v = document.getElementById('Card4').dataset.value
let card5v = document.getElementById('Card5').dataset.value
let card6v = document.getElementById('Card6').dataset.value
let card7v = document.getElementById('Card7').dataset.value
let card8v = document.getElementById('Card8').dataset.value
let card9v = document.getElementById('Card9').dataset.value
let card10v = document.getElementById('Card10').dataset.value
let card11v = document.getElementById('Card11').dataset.value
let card12v = document.getElementById('Card12').dataset.value
let card13v = document.getElementById('Card13').dataset.value
let card14v = document.getElementById('Card14').dataset.value
let card15v = document.getElementById('Card15').dataset.value
let card16v = document.getElementById('Card16').dataset.value

boton.addEventListener('click', Jugar)


let tiempodeEspera = 4

function Jugar(){
    finTime = setInterval(()=>{
        tiempodeEspera--;
        if (tiempodeEspera == 3){
            function ponerFondo(imagen){
                imagen.classList.toggle("respaldo")
            }
            ponerFondo(imagen)
            ponerFondo(imagen2)
            ponerFondo(imagen3)
            ponerFondo(imagen4)
            ponerFondo(imagen5)
            ponerFondo(imagen6)
            ponerFondo(imagen7)
            ponerFondo(imagen8)
            ponerFondo(imagen9)
            ponerFondo(imagen10)
            ponerFondo(imagen11)
            ponerFondo(imagen12)
            ponerFondo(imagen13)
            ponerFondo(imagen14)
            ponerFondo(imagen15)
            ponerFondo(imagen16)
        }
        if (tiempodeEspera==0){
            boton.disabled
            animaciones()
        }
    },1000)
}

function animaciones(){

    card.addEventListener('click', quitarFondo)
    card2.addEventListener('click', quitarFondo2)
    card3.addEventListener('click', quitarFondo3)
    card4.addEventListener('click', quitarFondo4)
    card5.addEventListener('click', quitarFondo5)
    card6.addEventListener('click', quitarFondo6)
    card7.addEventListener('click', quitarFondo7)
    card8.addEventListener('click', quitarFondo8)
    card9.addEventListener('click', quitarFondo9)
    card10.addEventListener('click', quitarFondo10)
    card11.addEventListener('click', quitarFondo11)
    card12.addEventListener('click', quitarFondo12)
    card13.addEventListener('click', quitarFondo13)
    card14.addEventListener('click', quitarFondo14)
    card15.addEventListener('click', quitarFondo15)
    card16.addEventListener('click', quitarFondo16)



    function quitarFondo(){
        imagen.classList.add("back3")
    }
    function quitarFondo2(){
        imagen2.classList.add('back3')
    }
    function quitarFondo3(){
        imagen3.classList.add("back3")
    }
    function quitarFondo4(){
        imagen4.classList.add('back3')
    }
    function quitarFondo5(){
        imagen5.classList.add("back3")
    }
    function quitarFondo6(){
        imagen6.classList.add('back3')
    }
    function quitarFondo7(){
        imagen7.classList.add("back3")
    }
    function quitarFondo8(){
        imagen8.classList.add('back3')
    }
    function quitarFondo9(){
        imagen9.classList.add("back3")
    }
    function quitarFondo10(){
    
        imagen10.classList.add('back3')
    }
    function quitarFondo11(){
    
        imagen11.classList.add("back3")
    }
    function quitarFondo12(){
    
        imagen12.classList.add('back3')
    }
    function quitarFondo13(){
    
        imagen13.classList.add("back3")
    }
    function quitarFondo14(){
    
        imagen14.classList.add('back3')
    }
    function quitarFondo15(){
    
        imagen15.classList.add("back3")
    }
    function quitarFondo16(){
    
        imagen16.classList.add('back3')
    }

    let tiempo = 60
    let temporizador = document.getElementById('temporizador')
    let time = false;
    let finTime = null

    if(time==false){
        tiempoJuego();
        time = true;
    }

    function tiempoJuego(){
        finTime = setInterval(()=>{
            tiempo--;
            temporizador.innerHTML = ` ${tiempo} segundos`;
            if(aciertos==8){
                alert('Fin del Juego Ganador!')
                clearInterval(finTime);
                tiempo==0
                temporizador.innerHTML = 'Ganaste!';
            }
            if (tiempo==0){
                clearInterval(finTime);
                alert('Se acabo el tiempo!')
            }
        },1000)
    }

    // Comparacion Cards
    card.addEventListener('click', mostrarCard)
    card9.addEventListener('click', mostrarCard9)

    card2.addEventListener('click', mostrarCard2)
    card10.addEventListener('click', mostrarCard10)

    card3.addEventListener('click', mostrarCard3)
    card12.addEventListener('click', mostrarCard12)

    card4.addEventListener('click', mostrarCard4)
    card11.addEventListener('click', mostrarCard11)

    card5.addEventListener('click', mostrarCard5)
    card14.addEventListener('click', mostrarCard14)

    card6.addEventListener('click', mostrarCard6)
    card13.addEventListener('click', mostrarCard13)

    card7.addEventListener('click', mostrarCard7)
    card15.addEventListener('click', mostrarCard15)

    card8.addEventListener('click', mostrarCard8)
    card16.addEventListener('click', mostrarCard16)

    function validacion(value1, value2){

        if((tarjetasDestapadas==2)&&(value1 == value2)){
            aciertos++
            puntaje.innerHTML = aciertos
            tarjetasDestapadas = 0
            
            quitarCarta(tarjetaDestapada1)
            quitarCarta(tarjetaDestapada2)

            function quitarCarta(carta) {
                // Busca la carta por su valor (data-value)
                let cartaElement = document.querySelector(`[data-value="${carta}"]`);
                if (cartaElement) {
                    cartaElement.querySelector(".contenidoCard img").classList.add("ocultar");
                    cartaElement.querySelector(".contenidoCard span").classList.add("ocultar");
                }
            }
        }else if((tarjetasDestapadas==2)&&(value1 != value2)){
            tarjetasDestapadas = 0
            alert("Son Diferentes")
            quitarFondoDeLaCarta(tarjetaDestapada1)
            quitarFondoDeLaCarta(tarjetaDestapada2)
        }
            function quitarFondoDeLaCarta(carta) {
                // Busca la carta por su valor (data-value)
                let cartaElement = document.querySelector(`[data-value="${carta}"]`);
                if (cartaElement) {
                    cartaElement.querySelector(".contenidoCard img:nth-child(2)").classList.remove("back3");
                    cartaElement.querySelector(".contenidoCard img:nth-child(2)").classList.add("respaldo2");
                }
            }
    }

    function mostrarCard(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText
            tarjetaDestapada1 = cardv
        }
        if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText
            tarjetaDestapada2 = cardv
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard2(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText2
            tarjetaDestapada1 = card2v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText2
            tarjetaDestapada2 = card2v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard3(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText3
            tarjetaDestapada1 = card3v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText3
            tarjetaDestapada2 = card3v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard4(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText4
            tarjetaDestapada1 = card4v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText4
            tarjetaDestapada2 = card4v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard5(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText5
            tarjetaDestapada1 = card5v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText5
            tarjetaDestapada2 = card5v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard6(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText6
            tarjetaDestapada1 = card6v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText6
            tarjetaDestapada2 = card6v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard7(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText7
            tarjetaDestapada1 = card7v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText7
            tarjetaDestapada2 = card7v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard8(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText8
            tarjetaDestapada1 = card8v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText8
            tarjetaDestapada2 = card8v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard9(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText9
            tarjetaDestapada1 = card9v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText9
            tarjetaDestapada2 = card9v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard10(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText10
            tarjetaDestapada1 = card10v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText10
            tarjetaDestapada2 = card10v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard11(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText11
            tarjetaDestapada1 = card11v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText11
            tarjetaDestapada2 = card11v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard12(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText12
            tarjetaDestapada1 = card12v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText12
            tarjetaDestapada2 = card12v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard13(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText13
            tarjetaDestapada1 = card13v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText13
            tarjetaDestapada2 = card13v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard14(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText14
            tarjetaDestapada1 = card14v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText14
            tarjetaDestapada2 = card14v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard15(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText15
            tarjetaDestapada1 = card15v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText15
            tarjetaDestapada2 = card15v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard16(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardText16
            tarjetaDestapada1 = card16v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardText16
            tarjetaDestapada2 = card16v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }
}
