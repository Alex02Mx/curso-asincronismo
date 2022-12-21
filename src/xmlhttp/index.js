const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const resultado = document.getElementById("respuesta");
let ajax = new XMLHttpRequest();

    ajax.open("GET", "ajax.php", true);
    ajax.onreadystatechange = function (){
        if (ajax.readyState == 4){ // peticion finalizada
            if(ajax.status == 200){ // documento encontrado respuesta ok
                resultado.innerHTML = ajax.responseText
            }else{
                resultado.innerHTML = "Peticion erronea"
            }
        }else{
            resultado.innerHTML = "Loading"
        }
    }
    ajax.send( )