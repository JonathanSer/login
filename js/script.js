const contenido = document.querySelector('.contenido');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-link');
const btn = document.querySelector('.btnLogin');
const iconCerrar = document.querySelector('.icon-cerrar');

//const modo1 = document.querySelector('.modo-uno');
//const modo2 = document.querySelector('.modo-dos');

//document.body.style.background = "url('../img/imagen.jpg') no-repeat";
//document.body.style.backgroundSize = "cover";

registrarLink.addEventListener('click', () => {
    contenido.classList.add('activo');
})

loginLink.addEventListener('click', () => {
    contenido.classList.remove('activo');
})

btn.addEventListener('click', () => {
    contenido.classList.add('activo-btn');
})

iconCerrar.addEventListener('click', () => {
    contenido.classList.remove('activo-btn');
})

/*
modo1.addEventListener('click', () => {
    document.body.style.background = "url('../img/paisaje.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
})

modo2.addEventListener('click', () => {
    document.body.style.background = "url('../img/imagen.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
})*/

//Validaciones
document.getElementById('btn-login').addEventListener('click', function() {
    const email = document.getElementById('login-correo').value.trim();
    const pass = document.getElementById('login-pass').value.trim();

    if (email === '' || pass === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validación simple formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    // Validar contraseña mínimo 6 caracteres (puedes cambiar esto)
    if (pass.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    // Aquí puedes agregar validación con usuario predeterminado si quieres
    // Por ejemplo:
    const usuarioValido = "usuario@gmail.com";
    const passValida = "123456";

    if (email === usuarioValido && pass === passValida) {
        // Redirigir si todo está bien
        window.location.href = 'dashboard.html'; // Cambia por la página a la que quieres ir
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});


document.querySelector('.registro form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío inmediato

    const usuario = document.getElementById('registro-usuario').value.trim();
    const correo = document.getElementById('registro-correo').value.trim();
    const pass = document.getElementById('registro-pass').value.trim();
    const terminos = document.getElementById('registro-terminos').checked;

    if (usuario === '' || correo === '' || pass === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    if (!validarContrasena(pass)) return;

    if (!terminos) {
        alert('Debes aceptar los términos y condiciones.');
        return;
    }

    // Aquí podrías agregar lógica para enviar el registro a un servidor o guardarlo

    alert('Registro exitoso!');

    // Redirigir a página de bienvenida o login
    window.location.href = 'bienvenido.html'; // Cambia a tu URL deseada
});

function validarContrasena(pass) {
    if (pass.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
    if (!/[A-Z]/.test(pass)) {
        alert('La contraseña debe contener al menos una letra mayúscula.');
        return false;
    }
    if (!/[a-z]/.test(pass)) {
        alert('La contraseña debe contener al menos una letra minúscula.');
        return false;
    }
    if (!/[0-9]/.test(pass)) {
        alert('La contraseña debe contener al menos un número.');
        return false;
    }
    if (!/[\W_]/.test(pass)) {
        alert('La contraseña debe contener al menos un carácter especial.');
        return false;
    }
    return true;
}
