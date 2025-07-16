abstract class UserLogin {
    constructor(
        public username: string,
        public passKey: string
    ) { }

    abstract getValue(): void
}

class loginPage extends UserLogin {
    constructor(
        public username: string,
        public passKey: string,
        public id: number
    ) {
        super(username, passKey)
    }
    getValue(): void {
        console.log("nothing return");

    }
}

let log = new loginPage("Joe", "abc", 3);
log.getValue();

console.log(log.id);


// generics
function identifier<T>(val: T): T {
    return val;
}

console.log(identifier(4));
