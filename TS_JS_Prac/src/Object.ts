type Person = {
    name: string;
    age: number;
    isStudent: Boolean,
    address: { city: string; country: string }
}


// const person: {
//     name: string;
//     age: number;
//     isStudent: Boolean,
//     address: { city: string; country: string }
// } = {
//     name: 'John',
//     age: 30,
//     isStudent: false,
//     address: {
//         city: 'Texas',
//         country: 'US'
//     }
// }


// console.log(person.address.city);


// // to update data
// person.address.city = "Hends";

// console.log(person.address.city);


const person: Person = {
    name: 'John',
    age: 30,
    isStudent: false,
    address: {
        city: 'Texas',
        country: 'US'
    }
}


console.log(person.address.city);


// to update data
person.address.city = "Hends";

console.log(person.address.city);




