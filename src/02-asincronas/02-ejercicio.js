function execCallback(callback) {
    window.setTimeout(callback, 2000)
}

const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);

