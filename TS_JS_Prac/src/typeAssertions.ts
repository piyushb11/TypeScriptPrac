
// 1. using <>
// 2. using as keyword

let bill: any = 1000;
let finalBill = <number>bill + 4000;

console.log(finalBill);

let someValue: any = "hello ts with code."
let len = (someValue as string).length;

console.log(len);
