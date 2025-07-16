"use strict";
// console.log("hello print ")
// let age: number = 10;
// if(age<50){
//     console.log("age is less ")
//     age+=10
// }
let sales = 109208930;
let course = "Joe";
let is_published = true;
let level;
// let numbers: number[] = [1,2,'3'] //invalid it will show error on 2nd index
// enum 
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let myType = Size.Medium;
console.log("size: " + myType);
function CalculateTax(incometax) {
    return incometax;
}
console.log(CalculateTax(1000));
let employee = {
    id: 101,
    name: 'Joe',
    retire: (date) => {
        console.log(date);
    }
};
// employee.id = 102;
console.log(employee.id);
// union types
function kgToLBS(weight) {
    //narrowing
    if (typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 1.2;
    }
}
console.log(kgToLBS(10));
console.log("String: " + kgToLBS("20"));
function greet(name) {
    if (name) {
        console.log("hii");
    }
    else {
        console.log("hola!");
    }
}
greet(null);
//# sourceMappingURL=index.js.map