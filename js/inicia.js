console.log("correcto");

function validar(formulario) {

    
    if (formulario.contraseña.value.trim().length == 0) {
    alert("Contraseña obligatorio");
    return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(formulario.email.value)) {
    alert("Email obligatorio");
    return false;
    }
    return true;

}