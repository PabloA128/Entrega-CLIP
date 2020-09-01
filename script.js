function Adivinanza(){
    event.preventDefault
    var entrada = document.getElementById('respuesta').value;
    console.log(entrada)
    if (entrada == "CoronaVirus")
        respuesta = true
    else 
        respuesta = false
        contador += 1
    return contador
}

function ValidarIntentos(){
    var intentos = Adivinanza()
    var perdio = true;
    if (intentos >= 4)
        perdio = true
    else
        perdio = false
}