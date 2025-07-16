// console.log("hello print ")

// let age: number = 10;
 
// if(age<50){
//     console.log("age is less ")
//     age+=10
// }
let sales: number = 109_208_930;
let course: string= "Joe"
let is_published: boolean = true;
let level: any;

// let numbers: number[] = [1,2,'3'] //invalid it will show error on 2nd index

// enum 

enum   Size {Small = 0 , Medium , Large}
let myType: Size = Size.Medium;

console.log("size: "+ myType)


function CalculateTax(incometax: number):number{
    return incometax;
}

console.log(CalculateTax(1000));

type Employees={
    readonly id : number,
     name: string
     retire: (date:Date)=> void
}

let employee: Employees = {
    id: 101,
    name:'Joe',
    retire: (date: Date)=>{
        console.log(date);
    }
}

// employee.id = 102;
console.log(employee.id);


// union types
function kgToLBS(weight: number|string):number{
  //narrowing
  if(typeof weight == 'number'){
    return weight*2.2;
  }else{
    return parseInt(weight)*1.2;
  }
}

console.log(kgToLBS(10));
console.log("String: "+kgToLBS("20"));

function greet(name: string|null|undefined){
   if(name){
    console.log("hii");
   }else{
    console.log("hola!");
   }

}
greet(null)
