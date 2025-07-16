const student = {
    name: "John",
    marks: 10,
    result: function () {
        console.log("marks: " + this.marks); // student.marks

    }
}

// proptotype
const employee = {
    calculateTax() {
        console.log("tzx upto 10%");
    },
}

// employee 
const John = {
    salary: 10000,
    calculateTax() {
        console.log("tax upto 30%");

    }
}

John.__proto__ = employee
console.log(John);
console.log(John.calculateTax());

