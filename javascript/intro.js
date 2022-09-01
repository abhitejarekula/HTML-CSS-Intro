// variable declaration
// var myVar = "Tai" // declared a variable, but have not assigned a value
// console.log("myVar", myVar) // var is not defined - undefined (valid data type/ value)
// hoisted

// ourName = "Tai" // "Tai" string -> assigned a value of "Tai"
// console.log("ourName", ourName)

// other data types - 5 main primitive data type
// undefined, null, boolean, string, number
// myVar = null
// console.log("type", typeof myVar)
// JS goes through 2 phases: 1) memory allocation phase 2) execution phase

// console.log(myVar = 10) -> = is the assignment operator
// == or === is the comparison operator

// let myVar
// console.log(23%5)

// write function to determine odd or even

// let myVar = 3

// function isOdd(number) {
//     // const myVar = 10
//     const remainder = number % 2
//     console.log(myVar)
//     if (remainder === 1) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isOdd(55))

// console.log('my program is done')


// javascript objects => collection of key, value pairs that are related for a particular object {}
// const dog = {
//     numOfLegs: 4,
//     numOfLegs: 6,
//     numOfEyes: 2,
//     name: "Sparky",
//     isAlive: true,
//     // 
//     bark: function () {
//         console.log("ruff ruff")
//     }
// }

// console.log(dog.isAlive)
// console.log(dog.bark())

// const myStr = "asd"
// console.log("asdsafdsdgdsgsfd".length)

// javascript arrays [] 
// difference between arrays and objects
// 1. arrays are not key value pairs
// 2. inside of an array, the order of items matter - inside objects, the order of key/value pairs do not matter
// 3. elements (items) inside of arrays do not have to be unique - inside objects, keys have to be unique
// const myEmptyArr = []
// const myArr = ["item1", "item1", 1, true, null, undefined, dog, myEmptyArr, {}, []]

// console.log(dog)
// console.log(myArr)


// CRUD on objects and arrays & array methods => Create / Read / Update / Delete
// reading objects & reading arrays
// const dog = {
//     numOfLegs: 4,
//     numOfLegs: 6,
//     numOfEyes: 2,
//     name: "Sparky",
//     isAlive: true,
//     // 
//     bark: function () {
//         console.log("ruff ruff")
//     },
//     address: {
//         streetNumber: '123',
//         streetName: 'Main St'
//     },
//     toys: ["bone", "toy2", 100, true], // array
//     "greeting": "ruff"
// }

// console.log(dog.toys) // dot notation
// console.log(dog['greeting']) // bracket notation => used for objects 

// console.log(dog.toys[3])

// const var1 = "myString"
// const var2 = ["item1"]

// console.log(typeof var1)
// console.log(typeof var2)

// UPDATING objects and arrays
// const dog = {
//     numOfLegs: 4,
//     numOfEyes: 2,
//     name: "Sparky",
//     isAlive: true,
//     // 
//     bark: function () {
//         console.log("ruff ruff")
//     },
//     address: {
//         streetNumber: '123',
//         streetName: 'Main St'
//     },
//     toys: ["bone", "toy2", 100, true], // array
//     "greeting": "ruff"
// }
// dog.birthDate = '06/06/2000' // add new key
// console.log(dog)
// dog.name = "RoadRunner"
// console.log(dog)

// for an array
// console.log(dog.toys.length)
// dog.toys[dog.toys.length + 1] = "happy"
// console.log(dog.toys.length)
// console.log(dog.toys)
// console.log(dog.toys[6])

// array.push() & array.pop() (the end of array)
// console.log(dog.toys)
// dog.toys.push("newItem", "newItem2")
// console.log(dog.toys.pop())
// // console.log('popped', popped)
// console.log(dog.toys)

// array.shift() & array.unshift() (beginning of array)
// console.log(dog.toys)
// dog.toys.unshift("newItem", "newItem2")
// console.log(dog.toys)

// const a = dog.toys.map((el) => el)
// a.unshift("new item")

// console.log('a', a)
// console.log("dog.toys", dog.toys)


// const n = [1, 2, 3]

// const mapped = n.map(function(el) {
//     return el * 100
// })

// [1*100, 2*100, 3*100]
// console.log(mapped)

// n.forEach(function(el) {
//     console.log(el * 100)
// })

// Delete is pop and shift for array
// Delete for objects
// console.log(dog)
// delete dog.name // use delete keyword
// console.log(dog)


// function hoisting
// myFunc()

// function myFunc() {
//     console.log("hi")
// }

// comparison operator
// console.log(8 === '8') // false, false, false, false
// console.log(8 === 'eight') // false, false, false, false

// console.log(8 == '8') // true, true, true , true
// console.log(8 == 'eight') // false, false, false, false

// function modify(arr) {
//     arr.push(100, 200, 300, 400)
//     arr.shift()
//     return arr
// }

// console.log(modify([9000]))

// const user = {
// 	id: 1,
// 	name: "David",
// 	email: "dave@gmail.com",
// 	address: {
// 		mailing: "123 Main St",
// 		shipping: "789 Main St"
// 	},
// 	cart: ["banana", "milk", "napkins"]
// }
// user.address.mailing = user.address.shipping
// user.address.mailing = "789 Main St"

// console.log(user)


// pass by reference to objects vs value
// const a = 3
// a = 5

// let b = 3
// b = 5

// let myArr = [9, 8, 7]
// const myArr = [9, 8, 7]
// myArr.push(10, 11, 12)
// myArr = [9, 8, 7, 10, 11, 12]
// console.log(myArr)


// Looping with for loops over objects and arrays
// arr
// const myArr = [[1, 2, 3], [4, 5, 6, 7]]
// // const b = [100, 500, 600, 700]
// for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < myArr[i].length; j++ ) {
//         console.log(myArr[i][j])
//     }
// }


// Same situation as #1, but your function will now print the numbers in reverse and only 10 to 1. (10, 9, 8, 7, 6…) . 
// You will test every function by passing in num1 = 1, num2 = 100
// function reverse(num1, num2) {
//     for (let i = num2; i > num1-1; i--) {
//         if (i <= 10 && i > 0) {
//             console.log(i)
//             console.log("=============================")
//         }
//     }
// }
// reverse(1, 100)

// Write a function that takes in an array of numbers and uses the forEach() or map() to multiply every number by 100 only if the number is even - 
// if the number is odd then it will return the original number .
// The function should return a new array with the result. The original array should not be mutated.

// const number = [11, 22, 33, 44,]
// const mapped = number.map(function(el) {
//     return el * 100
// })
// number.forEach(function(el) {
//     console.log(el * 100)
// })
// console.log(number.length)
// console.log(number)
// const number = [11, 22, 33, 44,]
// function mapThrough (arr) {
//     const tracker = []
//     for (let i = 0; i < arr.length; i++) {
//         const isEven = arr[i]%2 === 0
//         if (isEven) {
//             // your number is even
//             tracker.push(arr[i] * 100)
//         } else {
//             // your number is odd
//             tracker.push(arr[i])
//         }
//     }
//     return tracker

    // return arr.map(function(el) {
    //     const isEven = el%2 === 0
    //     if (isEven) {
    //         // your number is even
    //         return el * 100
    //     } else {
    //         // your number is odd
    //         return el
    //     }
    // })
    // const e = []
    // arr.forEach(function(el) {
    //          const isEven = el%2 === 0
    //     if (isEven) {
    //         // your number is even
    //          e.push(el * 100)
    //     } else {
    //         // your number is odd
    //         e.push(el)
    //     }
    // })
    // return e
// }
// console.log(mapThrough(number))

// Write a function to see if a number given is divisible by 55

// function divisibleBy55 (number) {
//     let result = number % 55
//     if (result === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(divisibleBy55(110))

// function divisibleBy55(number) {
//     return (number % 55 === 0) ? true : false
// }
// console.log(divisibleBy55(50))

// const checkLength = "Waterfall"
// console.log(checkLength.length)

// function checkLength (string) {
//     return string.length
// }

// function concat (str1, str2) {
//     return str1 + " " + str2
// }

// console.log(concat("hello", "world"))

// Given an array, write a function that loops through the array and
// print each element in the second layer.
// const arr = [ [ 1, 2, 3, [ 4, 5, 6 ] ] , [ [ 7, 8, 9 ] , [ 10, 11, 12 ] ] , [ 'a', 'b', 'c' ]  ]
// Ex. output should be: 1, 2, 3, [4, 5, 6], [ 7, 8, 9 ] , [ 10, 11, 12 ], a, b, c

// function loopThrough (arr) {
    
// }
// loopThrough(arr)

// const user = {
//     name: "Jack",
//     email: "jack@gmail.com",
//     age: 25
// }

// function loopThroughObject (object) {
//     for (const key in object) {
//         console.log(`key is: ${key}`)
//         console.log(`the value is: ${object[key]}`)
//     }
// }
// loopThroughObject(user)

// while loop
// const arr = [ [ 1, 2, 3, [ 4, 5, 6 ] ] , [ [ 7, 8, 9 ] , [ 10, 11, 12 ] ] , [ 'a', 'b', 'c' ]  ]

// function myWhileLoop (arr) {
//     // for (let i = 0; i < arr.length; i++)
//     let i = 0;
//     while (i < arr.length) {
//         console.log(arr[i])
//         i++
//     }
// }

// myWhileLoop(arr)

// function myWhileLoop2 (num1, num2) {
//     let i = num1
//     while (i <= num2) {
//         console.log(i)
//         if (i === 10) {
//             break
//         }
//         i++
//     }
// }

// myWhileLoop2(5, 20)

// switch statement
// function customSwitch (dayOfWeek) {
//     switch (dayOfWeek) {
//         case "Monday":
//             console.log("The week just started.")
//             break
//         case "Wednesday":
//             // return "It's mid week"
//             console.log("It's mid week")
//             break
//         case "Sunday":
//             console.log("The weekend is over")
//             break
//         default:
//             console.log("That's not a proper day of week")
//     }
// }
// customSwitch("Sunday")

// const arr = n.map(function() {})
// console.log(arr)

// Write a function to determine the maximum amount of profit I can make within a 10 days period when I buy and sell a stock.
// The function takes in an array of stock prices. For ex: [ 315, 50, 314, 684, 100, 648, 132, 50, 98, 45 ]
// The array contains 10 numbers (stock prices). $315 is the price of the stock on the 1st day, $100 is the price of the stock on the 5th day and $45 is the price of the stock on the 10th day.
// Your function needs to return the maximum profit I can make from any 10 trading day period given a similar array of numbers like above. In the above example, the maximum profit 
// I can make is buy on the 2nd day at a price of $50 and sell on the 4th day at $684 for a profit of $684-$50 = $634.
// Hint: You might want to iterate/loop over the array and keep track of some variables outside of the loop, then return that variable at the under of your function.
// const arr = [ 315, 50, 314, 684, 100, 648, 132, 50, 98, 45 ] // time complexity O(n^2)
// function findMaxProfit(arr) {
//     let maxProfit = 0
//     let minPrice = arr[0] // 315 => 50
    
//     arr.forEach((currPrice, idx) => {
//         if (currPrice < minPrice) {
//             minPrice = currPrice
//         }
//         if (arr[idx+1] - minPrice > maxProfit) {
//             maxProfit = arr[idx+1] - minPrice
//         }
//     })

//     return maxProfit
// }
// console.log(findMaxProfit(arr))

// function findMaxProfit(arr) {
//     let maxProfit = 0
//     let minPrice = arr[0] // 315 => 50
//     let maxPrice = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (minPrice > arr[i]) {
//                 minPrice = arr[i]
//             }
//             if (maxPrice < arr[j]) {
//                 maxPrice = arr[j]
//             }
//             maxProfit = maxPrice - minPrice
//         }
//     }
//     return maxProfit
// }

// fib(n) = fib(n-1) + fib(n-2)
// Ex: (0 + 1) + 1 + 2 + 3 + 5 => [0, 1, 1, 2, 3, 5, ...]
// fib(0) = 0; fib(1) = 1

// function fib(n) { // n = 5
//     if (n === 0) {
//         return 0
//     }

//     if (n === 1) {
//         return 1
//     }

//     return fib(n-1) + fib(n-2) 
// }

// function fib2(n) {
//     const fibNum = [0, 1, 1]
//     for (let i = 3; i <= n; i++) {
//         fibNum[i] = fibNum[i-2] + fibNum[i-1]
//     }
//     return fibNum[n]
// }
// // fib(3) => 2 => will generate fib number at any n-th index
// console.log(fib2(0))
// number, string, boolean, undefined, null
// JS goes through 2 phases => 1. Memory allocation => 2. Execution
// hoisting => behavior that makes it seem like your var and function declarations gets brought to the top of the code file

// var myVar = 1
// console.log(myVar)

// // console.log(randomVar)

// function myFunc(){
//     console.log("my func is hoisted")
// }

// function makeHeavyComputation() {
//     // doing something that takes a long time => pause for 5 seconds
//     // makeHeavyComputation()
//     // return 3
// }

// myFunc()

// console.log(3)

// console.log("finished")


// N-th Tribonacci Sequence. (Like the Fibonacci numbers but instead of last 2 values, you add the last 3 values)
// Given: T(0) = 0, T(1) = 1, T(2) = 1
// Write a function to find the n-th tribonacci number and return it
// When n = 4, your function should return 4 - trib(4) = 1 +1 +2
// Find both recursive and iterative solution

// function trib(n) {
//     const seq = [0, 1, 1]
//     for (let i = 3; i <= n; i++) {
//         seq[i] = seq[i-1] + seq[i-2] + seq[i-3]
//     }
//     return seq[n]


//     // if (n === 0) return 0;
//     // if (n === 1 || n === 2) return 1
//     // return trib(n-1) + trib(n-2) + trib(n-3)
// }
// console.log(trib(4))


// You are climbing a staircase and it takes you n number of steps to reach the top. Each time you can either climb 1 or 2 steps, how many distinct ways can you climb to the top? Write a function to return the number of distinct ways you can climb to the top. You only need to find 1 solution, either recursive or iterative.
// Ex: When n = 2, your function should return 2. There are 2 ways to climb to the top. 
// 1 step + 1 step
// 2 steps
// Ex: n = 3 will return 3. 3 distinct ways to climb to the top.
// 1 step + 1 step + 1 step
// 1 step + 2 steps
// 2 steps + 1 step

// function stairs(n) {
//     const arr = []
//     arr[0] = 0
//     arr[1] = 1
//     arr[2] = 2
//     for (let i = 3; i <= n; i++) {
//         arr[i] = arr[i-1] + arr[i-2]
//     }
//     return arr[n]
// }
// console.log(stairs(10))

// Adding Numbers
// Given an integer “num”, repeatedly add all its digits until the result has only one digit and return it.
// Find a solution using any method.
// Ex: num = 38 will return 2. 
// 38 → 3 + 8 → 11
// 11 → 1 + 1 → 2
// Since 2 has only 1 digit, return it
// Ex: num = 0 will return 0

// function repeatAdd(num) {
//     if (num === 0) return 0
//     if (num.toString().length === 1) return num

//     const arr = num.toString().split("") // 38 -> '38' -> ['3', '8']
//     // let sum = 0
//     // arr.forEach(digit => {
//     //     sum = sum + parseInt(digit)
//     // })
//     // const sum = arr.reduce(function(accum, curr) {return accum + parseInt(curr)}, 0) // 3 + 8 = 11
//     const sum = arr.reduce((accum, curr) => (accum + parseInt(curr)), 0)
//     // () => {return 3} // anonymous (no name given to the function)
//     // () => 3   // implicitly returns the value if written inline without having to use the return keyword
//     // const myArrowFunc = () => {} // named arrow function, stored in a variable
//     // const myArrowFunc = () =>    // named arrow function, stored in a variable
//     // To use arrow functions, myArrowFunc()

//     if (sum.toString().length === 1) {
//         return sum
//     } else {
//         return repeatAdd(sum)
//     }

//     // let sum = 0;
//     // while (num > 0 || sum > 9) {
//     //     if (num === 0) {
//     //         n = sum
//     //         sum = 0
//     //     }
//     //     sum = sum + (num % 10)
//     //     num = Math.floor(num / 10)
//     // }
//     // return sum
// }

// console.log(repeatAdd(38))

// ES6 Features: Default Parameters
// const stairs = (n = 10) => {
//     const arr = [0, 1, 2]
//     for (let i = 3; i <= n; i++) {
//         arr[i] = arr[i-1] + arr[i-2]
//     }
//     return arr[n]
// }
// console.log(stairs())

// ES6: Template strings
// const greeting = (name = "Default Name") => "Hello " + name
// const greeting = (name = "Default Name") => `Hello ${name}`
// console.log(greeting("David"))
// console.log(greeting())

// ES6: Rest Parameters
// const sum = (...args) => {
//     console.log('args', args)
//     return args.reduce((accum, curr) => (accum + curr), 0)
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7))

// ES6: Spread Operator
// const concatArr = (arr1, arr2) => [...arr1, ...arr2]
// // console.log(concatArr([1, 2, 3], ['x', 'y', 'z']))
// // Works on objects as well

// const spreadObjects = (obj1, obj2) => ({...obj1, ...obj2}) // {name: 'dog'}
// // console.log(spreadObjects({name: "cat"}, {name: "dog"}))

// // ES6 Object destructuring (arrays and objects)
// const car = {
//     year: 2000,
//     make: 'toyota',
//     model: 'celica',
//     address: {
//         mailing: '123 Main St',
//         shipping: '321 Wall St'
//     }
// }
// const modelName = car.model
// const modelYear = car.year
// console.log(modelName)
// console.log(modelYear)
// const year = 1500
// const { model, year: yearFromCar, address: { mailing, shipping: shippingAddress } } = car // rename destructured keys
// // console.log(shippingAddress)
// // console.log(car)

// const cart = ['milk', 'yogurt', 'berries']
// const [ , , item2] = cart
// console.log(item2)

// const person = {
//     name: "Taylor",
//     greet() {
//         console.log(`Hello! My name is ${this.name}`)
//     }
// }

// person.greet()

const user1 = {
    name: "Jake",
    address: {
        mailing: "123 Main St",
        shipping: {
            cart: true
        }
    },
}

const user2 = {
    name: "Bob",
    address: {
        mailing: "123 Main St",
        shipping: {
            cart: true
        }
    },
    greet: function () {console.log(`Hi my name is Bob`)}
}

// Normal functions is camelCase
function myFunc() {

}

// Constructor functions without custom parameters
// function User () {
//     this.name = "Dave";
//     this.address = {
//         mailing: "123 Main St",
//         shipping: "321 Wall St"
//     }

//     this.greet = function () {
//         return `Hi my name is ${this.name}`
//     }
// }

// const userA = new User() // creating 1 instance of User {}
// console.log('A', userA)
// // console.log(userA.name)
// // console.log(userA.address)
// // console.log(userA.greet())

// const userB = new User() // creating a 2nd instance of User
// console.log('B', userB)
// // console.log(userB.name)
// // console.log(userB.address)
// // console.log(userB.greet())


// Constructor functions used to create new objects with distinct parameters
// function User (name, mailing, shipping, phone) {
//     this.name = name;
//     this.address = {
//         mailing,
//         shipping
//     }
//     this.phoneNo = phone
//     // method
//     this.setGender = function (gender) { // setter function
//         this.gender = gender
//     }
//     this.getGender = function () {
//         return this.gender
//     }
//     this.greet = function () {
//         return `Hello, my name is ${this.name}`
//     }
// }

// const userA = new User("Bob", "789 Main St", "789 Wall St", '111-111-1111')
// const userB = new User("Taylor", "", "123 Wall St", '999-999-9999')
// // console.log(userA)
// console.log(userB)
// userB.setGender('female')
// console.log(userB)
// console.log(userB.getGender())
// console.log(userA.greet())

// OOP: Encapsulation - Making states / properties of an object private and only allow access via the object's method (setter / getter function)
// OOP: Inheritance - Bundle common code into a parent class and extend to child classes

// function Animal () {
//     this.numOfEyes = 2
//     this.numOfTail = 1
//     this.numOfLegs = 4
// }

// Animal.prototype.eat = function() {console.log("nom nom")}

// function Dog (color) {
//     this.color = color
// }

// function Cat (color) {
//     this.color = color
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.scratch = function() {console.log("scratch")}
// const tom = new Cat('orange')
// console.log(tom)


// ES Classes

// class Animal {
//     // declare properties for readability
//     #color
//     #hasTail
//     constructor (color, hasTail) {
//         this.#color = color;
//         this.#hasTail = hasTail
//     }

//     publicGetColor () {
//         return this.#color
//     }
//     publicSetColor (color) {
//         this.#color = color
//     }
//     publicGetHasTail () {
//         return this.#hasTail
//     }
//     publicSetHasTail (hasTail) {
//         this.#hasTail = hasTail
//     }
//     publicEat() {
//         return `Nom Nom Nom`
//     }

//     publicSleep() {
//         return `Animal sleeping`
//     }
// }

// class Dog {
//     #numOfPuppies
//     constructor (numOfPuppies) {
//         this.#numOfPuppies = numOfPuppies
//     }
//     publicGetNumOfPuppies () {
//         return this.#numOfPuppies
//     }
//     publicSetNumOfPuppies (num) {
//         this.#numOfPuppies = num
//     }
//     publicBark () {return `Ruff Ruff Ruff`}
// }

// const myDog = new Dog(5)
// console.log(myDog)

// class Cat extends Animal {
//     // to make a property private
//     #numOfKittens;
//     constructor (numOfKittens, color, hasTail) { // Cat constructor
//         super(color, hasTail) // super invokes the parent (or extended class) constructor function to set the properties
//         this.#numOfKittens = numOfKittens
//     }
//     publicGetNumOfKittens () {
//         return this.#numOfKittens
//     }
//     publicSetNumOfKittens (num) {
//         this.#numOfKittens = num
//     }
//     publicMeow () {return `Meow Meow Meow`}

//     // OOP: Polymorphism: Overriding parent's method
//     publicSleep() {return `Cat sleeping`}
// }

// const myCat = new Cat("5", "orange", true)
// console.log(myCat)
// console.log(myCat.publicGetColor())


// Closures & Immediately Invoked Function Expressions (IIFE)

// Closure
// Higher order function - a parent function that takes in or returns a function
function multiply (a) {
    // const fn = function (b) {
    //     return a * b
    // }
    return function (b) {
        return a * b
    }
}

// function random (c) {
//     console.log(c)
//     return
// }
// console.log('c from outside', c)

// console.log(multiply(4)(5))

const returnedFn = multiply(4)
const result = returnedFn(5)
console.log(result) // returns 20

// const multiply2 = (a) => (b) => a * b
// console.log(multiply2(5)(5))


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
//  closures are created every time a function is created, at function creation time.