//Variables
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 25;

//Seleccionar elementos de la interfaz
const inputModelo = document.querySelector('#year');

const spinnerContainerDiv = document.querySelector('.container-div');

document.addEventListener('DOMContentLoaded', function() {
    
    //Llenar las opciones del selct modelo - llamado a la funcion
    selectYear()
    
});
//FUNCIONES
//Generar los años de select
function selectYear(){

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de año al select
    }
}

function crearSpinner() {

    spinnerContainerDiv.innerHTML = `
    <div id="spinner">
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
    </div>
    `;
}

crearSpinner();

        setTimeout(() => {
            spinnerContainerDiv.innerHTML = '';
            

            // Crear una Alerta
            alertaRptoGuardadoExito();
            

        }, 1500);
        function alertaRptoGuardadoExito() {
            const alertaExito = document.createElement('P');
                alertaExito.classList.add('estilo-alerta');
                alertaExito.textContent = '¡Repuesto guardado exitosamente!';
    
                formulario.appendChild(alertaExito);
                
    
                setTimeout(() => {
                    alertaExito.remove();
                },1500);
        }