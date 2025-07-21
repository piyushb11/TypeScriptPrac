"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "John",
    email: "abc@yomail.com",
    pass: "abxedej",
    role: Roles.admin
};
const user2 = {
    name: "Bow",
    email: "abc2@yomail.com",
    pass: "password",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
//# sourceMappingURL=enum.js.map