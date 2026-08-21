// Wee can define objects in two way
// 1. Objects like Literals --> No singleton created
// 2. Objects like Singleton --> It will create a singleton object

//Singleton is created when constructor is used to create object
// literals dont create singleton
// Below all examples are of Object literals

// Contructor Methos => Object.create

const mySymbol = Symbol("key1")
const user = {
    name: "Puneet",
    age:20,
    location: "Noida",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Tuesday"],
    [mySymbol]: "myKey1"

}

// console.log(user)
// console.log(user.name)
// console.log(user["name"])

// user.location = "Gurgaon"
// console.log(user.location)
// Object.freeze(user) // object is freezed, no further changes wil propogated. There will be no error but no change.

// user.location="Bihar"
// console.log(user.location)

// Functions are treated same as variable in JS

user.greeting = function(){
    console.log("Hi User")
}

console.log(user.greeting)
console.log(user.greeting())

user.greetingWithName = function(){
    console.log(`Hi ${this.name} !!`) //String Interpolation 
}
console.log(user.greetingWithName())


