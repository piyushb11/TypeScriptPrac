const numbers: number[] = [10, 20, 30, 40, 50]



// array const 
const numbers1: number[] = new Array(10, 20, 30, 40, 50)

// Array.of -> it will create new array form set of element .

// const names: string[] = Array.of("insta", "snapcaht", "whatsapp")


// array operations and inbuilt methods .

// names.push("pubg");
// console.log(names);

// map 

// double the number using map ... it will return new array...
const dataArray: number[] = numbers.map((currentvalue) => currentvalue * 2)
console.log("double the array ", dataArray);


// convert int array into string array
const stringArray: string[] = numbers1.map((currentvalue) => currentvalue.toString())
console.log("string array: ", stringArray);



// fiter 
// problem -> return number greater than 40

const greaterArr: number[] = numbers.filter((currentvalue: number) => currentvalue > 10)
console.log(greaterArr);


// return average of an array

let sum: number = 0;
const averageArray = function (): number {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;

}
let finalVal = averageArray();
console.log(finalVal);


// find words which is the lengh is grater than 4

const words: string[] = new Array("Alex", "Alixec", "Bob", "Gym", "MOTOR", "Anna");

const greater: string[] = words.filter((currentvalue: string) => currentvalue.length == 3)
console.log(greater);

