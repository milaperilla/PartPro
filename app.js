


//* Obtener los datos del formulario de la base de datos

document.getElementById('formulario').addEventListener('submit', (event) => {

    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailDiv = document.querySelector('#emailDiv');
    const passwordDiv = document.querySelector('#passwordDiv');

    if(email != "claribethperilla29@gmail.com") {
        const  errorEmail = document.createElement('div');
        errorEmail.innerHTML = `
            <div class="incorrect">¡Correo electronico incorrecto!</div>
        `;
        emailDiv.appendChild(errorEmail);

        setTimeout(() => {
            errorEmail.remove();
        }, 1500);
    }

    if(password != 'admin123') {
        const passwordError = document.createElement('div');
        passwordError.innerHTML = `
            <div class="incorrect" >¡Contraseña incorrecta!</div>
        ` 
        passwordDiv.appendChild(passwordError);

        setTimeout(() => {
            passwordError.remove();
        }, 1500);
    }

    if(email == "claribethperilla29@gmail.com" && password == "admin123") {
        window.location.href = 'pagina2.html'
    }

    

})
  