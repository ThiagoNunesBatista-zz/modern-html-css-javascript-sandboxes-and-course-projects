const name = 'John'
const lastName ='Doe'
const age = 30
const job = 'Web Developer'
const city = 'Pelotas'

const sentence = `Hello, My name is ${name} ${lastName} and I'm ${age + age} years old, I live in ${city} and I'am a ${job}.`
console.log(sentence)

const withoutTemplateLiterals = 'Hello, My name is ' + name + ' ' + lastName + ' and I\'m ' + (age + age) + ' years old, I live in ' + city + ' and I\'am a ' + job + '.'
console.log(withoutTemplateLiterals)
