function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const g = generator()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

//-------------------------------------------

function* iterate(array) {
    for (let val of array) {
        yield val;
    }
}

const it = iterate(["Luis","Juan", "Pedro"])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
