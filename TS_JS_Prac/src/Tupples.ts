
// const favCity: string[] = ['nepal', 'india', 'bangladsh', 'bhutan', 'pak']

// when you have fixed number of data so you can create a tupple with readonly


type PersonInfo = readonly [string, number, boolean]

const person1: PersonInfo = ['vinod', 10, true]
const person2: PersonInfo = ['boy', 100, false]

const displayInfo = (person: PersonInfo) => {
    const [name, age, hasLicense] = person;
    console.log(name, age, hasLicense ? "yes" : "no");
}
displayInfo(person1);
displayInfo(person2);
