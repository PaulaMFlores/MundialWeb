

const prode = document.getElementById ("prode");
const nombre = document.getElementById ("Nombre");
const apellido = document.getElementById ("Apellido");
const termsConditions = document.getElementById ('TermsConditions');
const email = document.getElementById('Email')



function validate (nombre){
   let error=false;
    if (nombre.value.length==0){
        alert(`Debe completar ${nombre.id}`)
        error=true;
    }
    return error;
}

function validate (apellido){
    let error=false;
    if (apellido.value.length==0){
       alert (`Debe completar ${apellido.id}`)
        error=true;
    }
    return error;
}

function validateEmail (email){
    let error = false;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.value.match(validEmail)){
        alert(`Debe completar ${email.id}`)
        error = true;
    }
    return error;

}

function validateCheck (termsConditions){
    let error = false;
    if (termsConditions.checked == false){
        alert("Debe aceptar los Términos y Condiciones")
        error = true;
    }
}


function handleSubmit (event){
    let isInvalid = false;
    event.preventDefault ()
    isInvalid = validate(nombre);
    isInvalid = validate(apellido);
    isInvalid = validateEmail(email);
    isInvalid = validateCheck (termsConditions);

    if (!isInvalid){
        prode.submit();
    }
}

prode.addEventListener('submit', handleSubmit);
