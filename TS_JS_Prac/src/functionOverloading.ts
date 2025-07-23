// you can have multiple functions:
// 1. with same name 
// 2. but different param and return type
// 3. the number of param should be same



function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}


console.log(add(1, 2));

console.log(add("ab", "cd"));
