
export default class Person {

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    function() {
        console.log(this.fname + " " + this.lname);
    }
}

let pobj = new Person("John", "bow");
pobj.function();
