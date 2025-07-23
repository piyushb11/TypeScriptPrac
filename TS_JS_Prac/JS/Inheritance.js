const Person = require('./Class').default;


let pobj1 = new Person("Rohan", "bowm");
pobj1.function();

class Pet extends Person {

    constructor(fname, lname) {
        super(fname, lname)
    }

    getResult() {
        return "PASS"
    }

}

let petOBje = new Pet("Pitbull", "German");
petOBje.function();
console.log(petOBje.getResult());