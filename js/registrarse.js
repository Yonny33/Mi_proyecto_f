var intentos = 1;

function validar() {

    var usuario = $("#usuario").val();
    var password = $("#contraseña").val();

    if (intentos <= 3) {
        if (usuario == "Raul" && "password" == "1234567") {
            swal("validacion", "Bienvenido", "Success");
            intentos = 1;
        }
        else {
            swal("Validacion", "Usuario y/o Contraseña es Invalido", "error");
            intentos++;
        }
    }
    else {
        swal("Validacion", "Usuario Bloqueado por Exceso de Intentos", "error");
    }

}