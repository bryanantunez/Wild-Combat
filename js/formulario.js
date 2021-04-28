function validarFormulario() {
    $('.alert').remove();
    var nombre = $('#nombre').val(),
        apellido = $('#apellido').val(),
        correo = $('#correo').val(),
        contraseña = $('#contraseña').val();

    if (nombre == "" || nombre == null) {
        cambiarColor("nombre");
        mostrarAlerta("Por favor, ingrese su nombre");
        return false;

    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {
            cambiarColor("nombre")
            mostrarAlerta("No se permiten caracteres especiales o numeros")
            return false;
        }
    }

    if (apellido == "" || apellido == null) {
        cambiarColor("apellido");
        mostrarAlerta("Por favor, ingrese su apellido");
        return false;

    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(apellido)) {
            cambiarColor("apellido")
            mostrarAlerta("No se permiten caracteres especiales o números")
            return false;
        }
    }

    if (correo == "" || correo == null) {
        cambiarColor("correo");
        mostrarAlerta("Por favor, ingrese su correo electrónico");
        return false;

    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(correo)) {
            cambiarColor("correo")
            mostrarAlerta("Formato válido: usuario@mail.com")
            return false;
        }
    }

    if (contraseña == "" || contraseña == null) {
        cambiarColor("contraseña");
        mostrarAlerta("Por favor, ingrese su contraseña");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(contraseña)) {
            cambiarColor("contraseña")
            mostrarAlerta("No se permiten caracteres especiales o números")
            return false;
        }
    }

    $("#formulario").validate({
        rules: {
            contrasena: { required: true, minlength: 8, maxlength: 15, passwordcheck: true },
            contrasenaconfirmar: { required: true, equalTo: "#contrasena", passwordcheck: true }
        },
        messages: {
            contrasena: "Formato contraseña incorrecto.",
            contrasenaconfirmar: "Formato contraseña incorrecto."
        },
        errorLabelContainer: "dt",
        wrapper: "dd"
    });


    $('form').submit();
    return true;

    $('input').focus(function() {
        $('.alert').remove();


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
}