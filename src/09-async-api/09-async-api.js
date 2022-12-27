import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData (urlApi) {
    const response = await fetch(urlApi) 
    const data = await response.json()
    return data
}

const otrafuncion = async (urlApi) => {
    try {
        const productos = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${productos[1].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
       
        //console.log(productos)
        console.log(product.title)
        console.log(category.name)
    }
    catch(error) {
        console.error(error)
    }
}

otrafuncion(API)

