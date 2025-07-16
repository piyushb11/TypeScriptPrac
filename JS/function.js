const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// arrow function 
const result = a.map(
    (s) => s.length)

console.log(result);


function greet(name, callback) {
    console.log("hi " + name);
    callback()
}

function goodBye() {
    console.log("Godd Bye! ");

}

greet("John", goodBye)



// convert sync to async
console.log("Start");

setTimeout(() => {
    console.log("Inside the timeout");
}, 2000);

console.log("End");


// callback

function calc(a, b, callback) {
    return callback(a, b)
}


function add(x, y) {
    return x + y
}
function sub(x, y) {
    return x - y
}

function multi(x, y) {
    return x * y
}

console.log(calc(2, 3, add))



console.log("one");
console.log("two");
function print() {
    console.log("hello wait for result");
}
setTimeout(print, 4000);
console.log("three");
console.log("four");


