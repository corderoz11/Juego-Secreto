

let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function AsignarTextoElemento(elemento,texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;

}
console.log(numeroSecreto);
function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos ===1) ? `vez`:`veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        if(numeroDeUsuario > numeroSecreto) {
            AsignarTextoElemento("p","Numero secreto es menor");
        }else{
             AsignarTextoElemento("p","Numero secreto es mayor"); 
        }
        intentos++;
        limpiarCaja();
}
    
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
   
}
function condicionesIniciales(){
    AsignarTextoElemento("h1","Juego del elemento secreto");
    AsignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos=1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botin de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
 
condicionesIniciales();

function GenerarNumeroSecreto() {

   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
   
    if (listaNumerosSorteados.length==numeroMaximo) {
        AsignarTextoElemento("p","Ya se sortearon todos los numeros posibles");

    }else{

        //Si elnumero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
         return GenerarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }
    }
}