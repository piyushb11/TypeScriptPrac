// find average of the marks
let marks = [85, 97, 44, 37, 76, 60]
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum);

let avg = sum / marks.length;
console.log(avg);

let offer = 0, value = 0;
for (let i = 0; i < marks.length; i++) {
    offer = marks[i] / 10;
    value = value - offer;
    console.log("value after offer ", value);

}

