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

boton.addEventListener('click', animaciones)


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


function animaciones(){
    imagen.classList.toggle("respaldo")
    imagen2.classList.toggle('respaldo')
    imagen3.classList.toggle("respaldo")
    imagen4.classList.toggle('respaldo')
    imagen5.classList.toggle("respaldo")
    imagen6.classList.toggle('respaldo')
    imagen7.classList.toggle("respaldo")
    imagen8.classList.toggle('respaldo')
    imagen9.classList.toggle("respaldo")
    imagen10.classList.toggle('respaldo')
    imagen11.classList.toggle("respaldo")
    imagen12.classList.toggle('respaldo')
    imagen13.classList.toggle("respaldo")
    imagen14.classList.toggle('respaldo')
    imagen15.classList.toggle("respaldo")
    imagen16.classList.toggle("respaldo")

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
        imagen.classList.toggle("back2")
    }
    function quitarFondo2(){
        imagen2.classList.toggle('back3')
    }
    function quitarFondo3(){
        imagen3.classList.toggle("back2")
    }
    function quitarFondo4(){
        imagen4.classList.toggle('back3')
    }
    function quitarFondo5(){
        imagen5.classList.toggle("back2")
    }
    function quitarFondo6(){
        imagen6.classList.toggle('back3')
    }
    function quitarFondo7(){
        imagen7.classList.toggle("back3")
    }
    function quitarFondo8(){
        imagen8.classList.toggle('back2')
    }
    function quitarFondo9(){
        imagen9.classList.toggle("back3")
    }
    function quitarFondo10(){
    
        imagen10.classList.toggle('back2')
    }
    function quitarFondo11(){
    
        imagen11.classList.toggle("back3")
    }
    function quitarFondo12(){
    
        imagen12.classList.toggle('back2')
    }
    function quitarFondo13(){
    
        imagen13.classList.toggle("back3")
    }
    function quitarFondo14(){
    
        imagen14.classList.toggle('back2')
    }
    function quitarFondo15(){
    
        imagen15.classList.toggle("back3")
    }
    function quitarFondo16(){
    
        imagen16.classList.toggle('back2')
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
        console.log("1: "+value1 + " 2: "+ value2)

        if((tarjetasDestapadas==2)&&(value1 == value2)){
            alert("Son iguales")
            aciertos++
            puntaje.innerHTML = aciertos
            tarjetasDestapadas = 0
        }else if((tarjetasDestapadas==2)&&(value1 != value2)){
            alert("Son Diferetes")
            tarjetasDestapadas = 0

            let div1 = document.querySelector(`[data-value="${value1}"]`)
            let id = div1.id
            let div2 = document.querySelector(`[data-value="${value2}"]`)
            let id2 = div2.id

            let divImagen1 = document.getElementById(id)
            let divImagen2 = document.getElementById(id2)

            let img1 = divImagen1.querySelector('.contenidoCard img:nth-child(2)')
            let img1ID = img1.getAttribute('id')

            let img2 = divImagen2.querySelector('.contenidoCard img:nth-child(2)')
            let img2ID = img2.getAttribute('id')

            console.log("Primera id: " + img1ID +" Segunda id: "+ img2ID)


        }
    }

    function mostrarCard(){
        tarjetasDestapadas++
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = cardv
        }
        if(tarjetasDestapadas == 2){
            tarjetaResult2 = cardv
        }
        validacion(tarjetaResult1, tarjetaResult2, )
    }

    function mostrarCard2(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card2v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card2v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card2v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard3(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card3v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card3v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card3v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard4(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card4v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card4v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card4v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard5(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card5v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card5v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card5v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard6(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card6v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card6v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card6v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard7(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card7v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card7v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card7v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard8(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        console.log(card8v)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card8v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card8v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard9(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card9v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card9v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard10(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card10v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card10v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard11(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card11v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card11v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard12(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card12v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card12v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard13(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card13v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card13v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard14(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card14v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card14v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard15(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card15v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card15v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }

    function mostrarCard16(){
        tarjetasDestapadas++
        console.log("destapdas" + tarjetasDestapadas)
        if(tarjetasDestapadas == 1){
            tarjetaResult1 = card16v
        }else if(tarjetasDestapadas == 2){
            tarjetaResult2 = card16v
        }
        validacion(tarjetaResult1, tarjetaResult2)
    }
}
