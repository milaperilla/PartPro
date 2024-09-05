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
    // const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const spinnerContainerDiv = document.querySelector('.container-div');
    
    

    //Asignar eventos
    inputLinea.addEventListener('blur', validar );
    inputCategoria.addEventListener('blur', validar);
    inputDate.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarInfo);
    
    // Confirmaar que el formulario no este en blanco
     
    
    function crearSpinner() {
        

        spinnerContainerDiv.innerHTML = `
        <div id="spinner" class="hidden">
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
    

    function enviarInfo(e){

        e.preventDefault();

        //Limpiar alerta antes de mostrar una nueva
        limpiarAlerta(formulario);

        //Verificar si todos los campos estan llenos
         if(info.linea === '' || info.categoria === '' || info.modelo === ''){
            mostrarAlerta('Todos los campos son obligatorios', formulario);
            return;

         }
       

        crearSpinner();

        setTimeout(() => {
            spinnerContainerDiv.innerHTML = '';
            

            // Crear una Alerta
            alertaRptoGuardadoExito();
            

        }, 1500);
        

        formulario.reset();

        //Resetear el objeto info despues de enviar el formulario de todos los campos son ovligatorios
        info.linea ='';
        info.categoria ='';
        info.modelo ='';

    }

    function validar(e){
        if(e.target.value.trim() === ""){
            mostrarAlerta(`!El campo ${e.target.id} es obligatorio!`, e.target.parentElement);  
            return;
           
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        info[e.target.id] = e.target.value.trim().toLowerCase();
        
        
        //Comprobar los valores
        // comprobarInfo();
        
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

    

    function alertaRptoGuardadoExito() {
        const alertaExito = document.createElement('P');
            alertaExito.classList.add('estilo-alerta');
            alertaExito.textContent = '¡Repuesto guardado exitosamente!';

            formulario.appendChild(alertaExito);
            

            setTimeout(() => {
                alertaExito.remove();
            },1500);
    }

    
});