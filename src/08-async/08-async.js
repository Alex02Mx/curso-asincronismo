const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout( () => resolve ("Async!!"),2000 ) : reject ("Ha ocurrido un error")
        
        // (false) 
        //   ? setTimeout(() => resolve ("Async!!"),2000)
        //   : reject (new Error ("error"))
})
}

const func = async () => {
    const nom = await fnAsync();
    console.log(nom);
    console.log("hello");
}

console.log("before");
func();
console.log("after");