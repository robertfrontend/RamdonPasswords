const btnGeneral = document.getElementById('botonGeneral'),
    resultadoHTML = document.getElementById('resultado'),
    cantidadInput = document.getElementById('cantidad'),
    alerta = document.getElementById('alerta')

class Interfaz {
    alerta( texto ){
        alerta.innerHTML += `
            <small id="emailHelp" class="form-text text-muted"
            id="alerta">
                ${texto}
            </small>
        `;
    }
}

btnGeneral.addEventListener('click', () => {

    function generalPass(length) {
        const caracteres = 
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&@!'
        var charactersLength = caracteres.length;   
        let resultado = '';
        for( var i = 0; i  < length; i++ ){
    
            resultado += caracteres.charAt(Math.floor(Math.random() * charactersLength)) 
        }
        return resultado;
    } 

    if( cantidadInput.value === '') {

        const newUi = new Interfaz();
        newUi.alerta(`Introduce una cantidad de caracteres`)

    }else if(cantidadInput.value > 30 ){

        const newUi = new Interfaz();
        newUi.alerta(`Introduce una cantidad menor a 30`)

    }else if(cantidadInput.value < 8){

        const newUi = new Interfaz();
        newUi.alerta(`Introduce una cantidad mayor a 8`)
        
    }else {
        resultadoHTML.innerHTML = generalPass(cantidadInput.value)
    }

    setTimeout(() => {
        alerta.innerHTML = '';
    },3000)


})