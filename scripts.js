
(function () {

    var prode = document.getElementsByName("prode")[0];


    var validarNombre = function (e) {
        if (prode.Nombre.value == 0) {
            alert("Tiene que completar el Nombre");
            prode.Nombre.focus();
            e.preventDefault();
        }
    };

    var validarApellido = function (e) {
        if (prode.Apellido.value.length = 0) {
            alert("Tiene que completar el Apellido");
            document.prode.Nombre.focus();
            e.preventDefault();
        }
    };

    var validarTerminos = function (e) {
        if (prode.TermsConditions.checked == false) {
            alert("Aceptá los Términos y Condiciones");
            e.preventDefault();
        }
    };

    var validar = function (e) {
        validarNombre(e);
        validarApellido(e);
        validarTerminos(e);
    };

    prode.addEventListener('submit', validar)
}())