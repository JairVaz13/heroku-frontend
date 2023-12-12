function borrar(email){
    respuesta = confirm("¿Estas seguro de borrar el contacto?");

    if (respuesta){
        const URL = "https://api-back-rvy8.onrender.com/contactos";
        var request = new XMLHttpRequest;
        request.open('DELETE',URL +"/" +email,true);
        request.send();
        request.onload = () => {
            const response = request.responseText;
            window.location.href = "https://api-back-rvy8.onrender.com/"
        }
    }else{
        console.log("El usuario ha cancelado.");
    }
}
