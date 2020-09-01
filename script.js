function Adivinanza(){
    let entrada = document.getElementById(respuesta).value;
    if (entrada == "CoronaVirus")
        respuesta = true
    else 
        respuesta = false
        contador += 1
    return contador
}

function ValidarIntentos(){
    let intentos = Adivinanza()
    if (intentos >= 4)
        let perdio = true
    else
        perdio = false
}