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
//# sourceMappingURL=Abstract.js.map