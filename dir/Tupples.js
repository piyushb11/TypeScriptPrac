"use strict";
// const favCity: string[] = ['nepal', 'india', 'bangladsh', 'bhutan', 'pak']
const person1 = ['vinod', 10, true];
const person2 = ['boy', 100, false];
const displayInfo = (person) => {
    const [name, age, hasLicense] = person;
    console.log(name, age, hasLicense ? "yes" : "no");
};
displayInfo(person1);
displayInfo(person2);
//# sourceMappingURL=Tupples.js.map