document.addEventListener('DOMContentLoaded', function() {

        const info = {
            linea: '',
            categoria: '',
            modelo: ''
        }
        
    //Seleccionar elementos de la interfaz
    const inputLinea = document.querySelector('#linea');
    const inputCategoria = document.querySelector('#categoria');
    const formulario = document.querySelector('#formulario');
    const inputDate = document.querySelector('#modelo');

    
    

    //Asignar eventos
    inputLinea.addEventListener('blur', validar );
    inputCategoria.addEventListener('blur', validar);
    inputDate.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() === ""){
            mostrarAlerta(`!El campo ${e.target.id} es obligatorio!`, e.target.parentElement);  
            return;
           
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        info[e.target.id] = e.target.value.trim().toLowerCase();
        console.log(info);
        
        
    }  
    
    function mostrarAlerta(mensaje, referencia){

        //Comprueba si ya existe una alerta
        limpiarAlerta(referencia);
        
        //Generar alerta en HTML
        const error = document.createElement('P')
        error.textContent = mensaje;
        error.classList.add('estilo');
        
        //Inyectar el error al formulario
        referencia.appendChild(error)
        
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.estilo');
        if(alerta){
            alerta.remove();
        }
    }

});