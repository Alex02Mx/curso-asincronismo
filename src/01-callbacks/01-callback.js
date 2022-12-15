//-----functions-----
function add (num1, num2) {
    return num1 + num2;
};
function mul (num1, num2) {
    return num1 * num2;
};
function sus (num1, num2) {
    return num1 - num2;
};
function div (num1, num2) {
    return num1 / num2;
};

//-----callback function-----
function calc (num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(4, 3, add));
console.log(calc(4, 3, mul));
console.log(calc(4, 2, sus));
console.log(calc(4, 2, div));
