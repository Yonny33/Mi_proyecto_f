
function validar(formulario) {

    if (formulario.Usuario.value.trim().length == 0) {
    alert("Usuario obligatorio");
    return false;
    }

    if (formulario.contraseña.value.trim().length == 0) {
    alert("Contraseña obligatorio");
    return false;
    }
    
    return true;

}