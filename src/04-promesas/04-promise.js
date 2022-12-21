const promise = new Promise( (resolve, reject) => {
    resolve ("hey");
})


const cows = 8;
const countCows = new Promise((resolve, reject) =>{
    if (cows > 10) {
        resolve (`We have ${cows} cows in the farm`);
    }
    else{
        reject("No cows in the farm")
    }
})

countCows
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(()=> console.log("finally"))
