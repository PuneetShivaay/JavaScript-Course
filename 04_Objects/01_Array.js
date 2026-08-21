let myArray = ["Engineer","Doctors", "Members", "People"]
let anotherArray = ["Puneet", "Ravi", "Narendra", "Janta"]

//myArray.push(anotherArray)

// console.log(myArray)
// console.log(myArray[4][0])

let concatnatedArray = myArray.concat(anotherArray)
// console.log(concatnatedArray)

let spreadedArray = [...myArray, ...anotherArray]
// console.log(spreadedArray)

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [7,8,[9,0]]]

const simplifiedNestedArray = nestedArray.flat(Infinity)
// console.log(simplifiedNestedArray)

let checkIsArray = Array.isArray("Puneet")
// console.log(checkIsArray)

let makeItArrayFrom = Array.from("AnyRandomTextByPuneet")
// console.log(makeItArrayFrom)

let makeArrayFromObject = Array.from({key: "value"})
// console.log(makeArrayFromObject)

let score1 = 100
let score2 = 200
let score3 = 300

let makeArrarOfElements = Array.of(score1,score2,score3)
console.log(makeArrarOfElements)
