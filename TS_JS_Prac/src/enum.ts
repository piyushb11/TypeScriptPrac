enum Roles {
    user = "user",
    admin = "admin"
}


type LoginDetails = {
    name?: string;
    email: string;
    pass: string;
    role: Roles
}

const user1: LoginDetails = {
    name: "John",
    email: "abc@yomail.com",
    pass: "abxedej",
    role: Roles.admin
}

const user2: LoginDetails = {
    name: "Bow",
    email: "abc2@yomail.com",
    pass: "password",
    role: Roles.user
}

const isAdmin = (user: LoginDetails) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`
}


console.log(isAdmin(user1));
console.log(isAdmin(user2));