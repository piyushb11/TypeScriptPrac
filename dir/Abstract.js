"use strict";
class UserLogin {
    constructor(username, passKey) {
        this.username = username;
        this.passKey = passKey;
    }
}
class loginPage extends UserLogin {
    constructor(username, passKey, id) {
        super(username, passKey);
        this.username = username;
        this.passKey = passKey;
        this.id = id;
    }
    getValue() {
        console.log("nothing return");
    }
}
let log = new loginPage("Joe", "abc", 3);
log.getValue();
console.log(log.id);
// generics
function identifier(val) {
    return val;
}
console.log(identifier(4));
//# sourceMappingURL=Abstract.js.map