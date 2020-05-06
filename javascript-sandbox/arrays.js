// Create some arrays
const numbers = [45, 86, 32, 6, 8]
const numbers2 = new Array(1, 2, 3, 4, 5)
const fruit = ['Banana', 'Apple', 'Papaya', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }]

console.log('Get array length')
let val = numbers.length
console.log(val)

console.log('\nCheck if is array')
val = Array.isArray(numbers)
console.log(val)

console.log('\nGet a single value')
console.log(numbers[1])

console.log('\nInsert into array')
numbers[1] = 99
console.log(numbers)

console.log('\nFind index of value')
console.log(numbers.indexOf(6))

console.log('\nAdd in the end of the array')
numbers.push(100)
console.log(numbers)

console.log('\nAdd in the front of the array')
numbers.unshift(1)
console.log(numbers)

console.log('\nTake off from end')
numbers.pop()
console.log(numbers)

console.log('\nTake off from front')
numbers.shift()
console.log(numbers)

console.log('\nSplice Values')
// Remove values from specified index range
numbers.splice(0, 2)
console.log(numbers)

console.log('\nReverse Array')
numbers.reverse()
console.log(numbers)

console.log('\nConcatenate Arrays')
val = numbers.concat(numbers2)
console.log(val)
