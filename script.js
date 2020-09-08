
let letsPlay = () => {

    let trys = 4;
    const correctAnswer = 'coronavirus';
    let correct = false;
    let answer;
    
        while (trys > 0 && correct != true) {
            trys--;
            answer = prompt(" Tengo Corona, pero no soy Rey \n Ingrese la respuesta").toLowerCase();
            if (answer === correctAnswer) {
                alert( `Felicidades, respondisye correctamente!`);
                correct = true;
            } else if (trys == 3) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Estoy de Moda`);
            } else if (trys == 2) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Soy muy Contagioso \n Ingrese la nueva respuesta:`);
            } else if (trys == 1) {
                alert(`Incorrecto, te queda ${trys} intento, pista: Mi nombre empieza con C  \n Ingrese la nueva respuesta`);
            } else if (trys == 0) {
               alert(`Perdiste! te quedaste sin intentos, la respuesta correcta era ${correctAnswer}`);
            }
        }        
    }