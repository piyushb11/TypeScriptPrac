var numbers = [10, 20, 30, 40, 50];
// array const 
var numbers1 = new Array(10, 20, 30, 40, 50);
// Array.of -> it will create new array form set of element .
// const names: string[] = Array.of("insta", "snapcaht", "whatsapp")
// array operations and inbuilt methods .
// names.push("pubg");
// console.log(names);
// map 
var dataArray = numbers.map(function (currentvalue) { return currentvalue * 2; });
console.log("double the array ", dataArray);
