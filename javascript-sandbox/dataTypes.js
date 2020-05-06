// JavaScript is a dynamically typed language
// Types are associated with values not variables
// The same variable can hold multiple types
// We do not need to specify types

// Primitive Data Types
// Stored directly in the location the variable access

// String -> Sequence of characters
const name = 'John Doe'

// Number -> Decimals, Floats, etc are all considered numbers in JavaScript
const age = 19
const weight = 1.34

// Boolean -> true or false
const something = true
const anotherThing = false

// Null -> Unitentional empty value


// Undefined -> A variable that wasn't defined
const undefinedVariable

// Symbols (ES6)
const sym = Symbol()

// Reference Data Types
// Accessed by Reference
// A Pointer To a Location in Memory

// Arrays - typeof returns object
const arrayNumbers = [1, 2, 3, 4, 5]
const crazyArray = [ 1, 1.5, { a: 1 }, 'ABC']

// Object Literals
const thiago = {
  fullName: 'Thiago',
  age: 19
}

// Functions
function sayHello(name) {
  console.log('Hello ' + name)
}

// Dates
const today = new Date()

// Anything Else...
