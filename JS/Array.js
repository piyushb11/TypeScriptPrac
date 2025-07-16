const arr1 = new Array(0, 1, 2, 3, 4, 5, 6, 7)

// slice 

console.log("arr1 : ", arr1);

const myArr1 = arr1.slice(1, 3)
console.log("myArr1 : ", myArr1);   // output -> [1,2]

// splice 

console.log("arr2 : ", arr1);

const myArr2 = arr1.splice(1, 3)
console.log("myArr2 : ", myArr2);   // output -> [1,2,3]


console.log("myArr3 : ", arr1);   // output -> [1,2,3]



// flat 
const a1 = [1, 2, 3, [4, 5], 6, [7, 8, 9, 0]]

const a2 = a1.flat(Infinity);
console.log("array2: ", a2);

// from
const a3 = Array.from("John")
console.log("array3 : ", a3)

// of 
let a = 100;
let b = 200;
let c = 400;


const a4 = Array.of(a, b, c);
console.log("array4 : ", a4)

console.log(Array.isArray(a4));



let arrOfString = ['banana', 'apple', 'cat', 'rat', 'toy']

for (let index = 0; index < arrOfString.length; index++) {
    const element = arrOfString[index];
    console.log(element);

}
console.log("------------------");

for (const value of arrOfString) {
    console.log(value);

}


