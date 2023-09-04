// singleton
// Object.create //Use with constructor

// Object Literals
const mySym = Symbol("key1");

const myUser = {
    name: "JhonDoe",
    [mySym]: "myTrysym",
    emailId: "jhondoe.live@outlook.com",
    age: 19,
    designation: "General Manager",
}

// console.log(myUser.name);
// console.log(myUser["name"]);
// console.log(myUser);
// console.log(myUser[mySym]);

// Object.freeze(myUser);
// myUser["name"] = "Hello World";
// console.log(myUser["name"]);

myUser.greeting = function() {
    console.log(`My name is ${this.name} and my job title is ${this.designation}`);
}

console.log(myUser.greeting());