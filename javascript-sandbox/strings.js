// Declaring strings
const firstName = 'Thiago'
const lastName = 'Nunes Batista'
const age = 33
const sentence = 'Hello There My Name Is Thiago Nunes Batista'

console.log('Concatenation')
const concatenation = firstName + ' ' + lastName
console.log(concatenation)

console.log('\nAppend')
val = 'John '
val += 'Doe'
console.log(val)
val = 'My name is ' + val + ' and I\'am ' + age + ' years old'
console.log(val)

console.log('\nChange Case')
val = firstName.toUpperCase()
console.log(val)
val = val.toLowerCase()
console.log(val)

console.log('\nUse Concat Method')
val = val.concat(' ' + lastName)
console.log(val)

console.log('\nLength Property')
console.log(val.length)

console.log('\nIndex')
console.log(val[0])

console.log('\nindexOf()')
console.log(val.indexOf('n'))
// if the character is not found, returns -1
console.log(val.indexOf('x'))

console.log('\nlastIndexOf()')
console.log(val.lastIndexOf('t'))

console.log('\ncharAt')
console.log(firstName.charAt(0))

console.log('\nGet Last Char')
console.log(val.charAt(val.length -1))

console.log('Substring')
val = firstName.substring(0,3)
console.log(val)

console.log('\nSlice')
console.log(val.slice(0,3))
console.log(`Negative Slice: ${lastName.slice(-3)}`)

console.log('\nSplit')
val = sentence.split(' ')
console.log(val)

console.log('\nReplace')
val = (firstName + ' ' + lastName).toLowerCase()
val = val.replace(/t/g, 'x')
console.log(val)

console.log('\nIncludes')
// Returns true or false if something is included in the string
console.log(val.includes('thiago'))
console.log(val.includes('xhiago'))
