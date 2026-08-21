// Below are examples of Object Singleton or using construcor

const petmetsUser = new Object() // Singleton Object
// console.log(petmetsUser)

const anotherPetmetsUser = {} // Non Singleton object
anotherPetmetsUser.id = "123abc"
anotherPetmetsUser.name = "Rohit"
anotherPetmetsUser.isLoggedIn = false
// console.log(anotherPetmetsUser)

const newPetmetsUser = {
    email:"petmets@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Puneet",
            lastname: "Kumar"
        }
    }

}

// console.log(newPetmetsUser.fullname.userfullname)

let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"c", 4:"d"}

let combinedObj = Object.assign({}, obj1, obj2)
//console.log(combinedObj)
let combinedObj2 = Object.assign({}, obj2, obj1)
//console.log(combinedObj2)

// Using Spread 
let combinedUsingSpread = {...obj1, ...obj2}
//console.log(combinedUsingSpread)

const users = [
    {}
]

console.log(Object.keys(newPetmetsUser))
console.log(Object.values(newPetmetsUser))
console.log(Object.entries(newPetmetsUser))

console.log(newPetmetsUser.hasOwnProperty("email"))