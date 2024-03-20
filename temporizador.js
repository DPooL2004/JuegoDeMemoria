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


