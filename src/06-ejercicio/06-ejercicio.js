function delay(time, message) {
    return new Promise((resolve, reject) => {
         setTimeout( () => {
            resolve (message);
        },time)
    })
}

delay(2000, "Hello after 2 segundos")
    .then( (result) => console.log(result) )