const tinderUser = {}
tinderUser.name = "New Username";
tinderUser.email = "hello@google.com";
tinderUser.age = "28";

const instagramUser = {
    a: "01",
    b: "William Thomas",
    c: "william@yahoo.com",
    d: "21"
}

const facebookUser = {
    e: "02",
    f: "Jhon Doe",
    g: "hi@yahoo.com",
    h: "28",
}

const mergeObj = Object.assign({}, instagramUser, facebookUser)
// console.log(mergeObj);

const spreadObj = {...instagramUser, ...facebookUser}
// console.log(spreadObj);

// Array object 

const arryObj = [
    {
        id: "01",
        name: "Jimmy Carter",
        email: "jimmy.live@outlook.com",
        age: "32",
    },

    {
        id: "02",
        name: "Joe Smith",
        email: "joe.live@outlook.com",
        age: "25",
    },

    {
        id: "03",
        name: "Jimmy Carter",
        email: "jimmy.live@outlook.com",
        age: "32",
    },

    {
        id: "04",
        name: "Jimmy Carter",
        email: "jimmy.live@outlook.com",
        age: "32",
    },
]

// console.log(arryObj[0].email);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("email"))