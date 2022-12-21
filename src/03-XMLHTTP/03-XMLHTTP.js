const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData (urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                try{
                    callback(JSON.parse(xhttp.responseText));
                }
                catch{
                    console.log("Error en Funcion fetchData o producto no encontrado")
                }
            }
        }
    }
    xhttp.send();
}
fetchData(`${API}/products`, function (data) {
    console.log(data[7].category);
    fetchData(`${API}/products`, function (data1){
        console.log(data1[9].category.name);
    })
});