function validarFormulario() {
    $('.alert').remove();
    var nombre = $('#nombre').val(),
        correo = $('#correo').val(),
        numero = $('#numero').val(),
        mensaje = $('#mensaje').val();

    if (nombre == "" || nombre == null) {
        cambiarColor("nombre");
        mostrarAlerta("Campo obligatorio");
        return false;

    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {
            cambiarColor("nombre")
            mostrarAlerta("No se permiten caracteres especiales o numeros")
            return false;
        }
    }
    if (correo == "" || correo == null) {
        cambiarColor("correo");
        mostrarAlerta("Campo obligatorio");
        return false;

    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(correo)) {
            cambiarColor("correo")
            mostrarAlerta("Formato válido: usuario@mail.com")
            return false;
        }
    }

    if (numero == "" || numero == null) {
        cambiarColor("numero");
        mostrarAlerta("Campo obligatorio");
        return false;

    } else {
        var expresion = /^[0-9]+$/;
        if (!expresion.test(numero)) {
            cambiarColor("numero")
            mostrarAlerta("Por favor escriba solamente con números")
            return false;
        }
    }

    if (mensaje == "" || mensaje == null) {
        cambiarColor("mensaje");
        mostrarAlerta("Campo obligatorio");
        return false;

    }

    $('form').submit();
    return true;

}

$('input').focus(function() {
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('numero');

});

$('textarea').focus(function() {
    $('.alert').remove();
    colorDefault('mensaje');
})

function colorDefault(dato) {
    $('#' + dato).css({
        border: "1px solid #999"
    })
}

function cambiarColor(dato) {
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}
/* Este es el mensaje de error que se ve por pantalla*/
function mostrarAlerta(texto) {
    $('#nombre').before('<div class="alert">Error: ' + texto + '</div>')
}














/*var boton = document.createElement("button");
boton.type = "button";
document.body.appendChild(boton);

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const section = document.getElementById("formulario")
const parrafo = document.getElementById("alertas")

section.addEventListener("submit", e => {
    e.preventDefault()
    let warnings =""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] + @ [a-zA-Z0-9 -] + (?: \. [ a-zA-Z0-9 -] +) * $ /

    if (nombre.value.length < 3) {
        warnings +='el nombre no es válido <br>'
        entrar = true
    }

    if (apellido.value.length < 3) {
        warnings +='el apellido no es válido <br>'
        entrar = true
    }

    if(!regexEmail.test(email.value))
    warnings +='el email no es válido <br>'

    if(contraseña.value.length < 8) {
        warnings +='La contraseña no es válida <br>'
        entrar = true
    }

    
    
}) */