var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [10, 20, 30, 40, 50];
// array const 
var numbers1 = new Array(10, 20, 30, 40, 50);
// Array.of -> it will create new array form set of element .
// const names: string[] = Array.of("insta", "snapcaht", "whatsapp")
// array operations and inbuilt methods .
// names.push("pubg");
// console.log(names);
// map 
// double the number using map ... it will return new array...
var dataArray = numbers.map(function (currentvalue) { return currentvalue * 2; });
console.log("double the array ", dataArray);
// convert int array into string array
var stringArray = numbers1.map(function (currentvalue) { return currentvalue.toString(); });
console.log("string array: ", stringArray);
// fiter 
// problem -> return number greater than 40
var greaterArr = numbers.filter(function (currentvalue) { return currentvalue > 10; });
console.log(greaterArr);
// return average of an array
var sum = 0;
var averageArray = function () {
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};
var finalVal = averageArray();
console.log(finalVal);
// find words which is the lengh is grater than 4
var words = new Array("Alex", "Alixec", "Bob", "Gym", "MOTOR", "Anna");
var greater = words.filter(function (currentvalue) { return currentvalue.length == 3; });
console.log(greater);
var spread1 = [1, 2, 3, 4, 5, 6];
var spread2 = [10, 20, 30, 40, 50, 60];
var spread3 = __spreadArray(__spreadArray([], spread1, true), spread2, true);
console.log(spread3);
