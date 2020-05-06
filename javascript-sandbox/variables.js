// Variable Labels can use -> letters, numbers, _, $
// Cannot start with number
// In mult-words variables, use camel case

// variableName -> Camel Case
// variable_name -> Snake Case
// VariableName -> Pascal Case

// var - global scope - can be reassigned
var name = 'Thiago'
console.log(name)

name = 'Thiago Nunes Batista'
console.log(name)

var undefinedVariable
console.log(undefinedVariable)

// let - works the same way that var, but with local scope
// always use let rather than var



// const -> It's a contant value, I can't be reassigned
// but if the data type is a reference value like object literals and arrays, those values can be changed
// but the referece value can't be reassigned
const lastName = 'Nunes Batista'

// The line below will throw an error
// lastName = 'ABC'

const thiagoObject = {
  firstName: 'Thiago',
  lastName: 'Nunes Batista'
}
console.log(thiagoObject)
thiagoObject.lastName = 'ABC'
console.log(thiagoObject)

const array = [1, 2, 3]
console.log(array)

array.push(4, 5)
console.log(array)
