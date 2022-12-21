import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
    return fetch(urlApi)
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => console.log(products[6]))
//     .catch(error => console.log(error))


fetchData(`${API}/products`)
    .then ((response) => response.json())
    .then ((titulo) => {
        console.log(titulo[0].title)
        return fetchData(`${API}/products`)
    })

    .then ((response) => response.json())
    .then ((precio) => {
        console.log(precio[0].price)
        return fetchData(`${API}/products`)
    })

    .then ((response) => response.json())
    .then ((id) => {
        console.log(id[0].id)
        return fetchData(`${API}/categories`)
    })
    
//----------------------------------------------

    .then ((response) => response.json())
    .then ((name) => {
        console.log(name[0].name)
        return fetchData(`${API}/categories`)
    })

    .then ((response) => response.json())
    .then ((image) => {
        console.log(image[0].image)
        return fetchData(`${API}/categories`)
    })

    .then ((response) => response.json())
    .then ((iden) => {
        console.log(iden[0].id)
        //return fetchData(`${API}/categories`)
    })

    .catch(err => console.log(err))
    .finally(() => console.log("terminado"))
