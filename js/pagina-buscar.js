//Variables
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 25;

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