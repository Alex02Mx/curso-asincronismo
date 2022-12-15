//-------------------------------------
setTimeout(() => {
    console.log("Ejemplo de setTimeout")
}, 7000);

//------------------------------------
function saludo (nombre) {
    console.log(`hola ${nombre}`)
};

setTimeout(saludo, 6000, "Oscar")

//------------------------------------
function making (item) {
    console.log(`Su ${item} esta lista, buen provecho`)
}

function order (item, callback) {
    console.log("Tomando orden");
    console.log(`La orde fue ${item}`);
    setTimeout(callback, 5000, item);
    console.log(`La orden de ${item} esta en preparacion`);
};

order("Pizza de pepperoni", making);