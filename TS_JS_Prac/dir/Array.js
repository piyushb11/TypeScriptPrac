"use strict";
const numbers = [10, 20, 30, 40, 50];
// array const 
const numbers1 = new Array(10, 20, 30, 40, 50);
// Array.of -> it will create new array form set of element .
// const names: string[] = Array.of("insta", "snapcaht", "whatsapp")
// array operations and inbuilt methods .
// names.push("pubg");
// console.log(names);
// map 
// double the number using map ... it will return new array...
const dataArray = numbers.map((currentvalue) => currentvalue * 2);
console.log("double the array ", dataArray);
// convert int array into string array
const stringArray = numbers1.map((currentvalue) => currentvalue.toString());
console.log("string array: ", stringArray);
// fiter 
// problem -> return number greater than 40
const greaterArr = numbers.filter((currentvalue) => currentvalue > 10);
console.log(greaterArr);
// return average of an array
let sum = 0;
const averageArray = function () {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};
let finalVal = averageArray();
console.log(finalVal);
// find words which is the lengh is grater than 4
const words = new Array("Alex", "Alixec", "Bob", "Gym", "MOTOR", "Anna");
const greater = words.filter((currentvalue) => currentvalue.length == 3);
console.log(greater);
//# sourceMappingURL=Array.js.map