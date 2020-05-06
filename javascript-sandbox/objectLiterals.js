const person = {
  firstName: 'Thiago',
  lastName: 'Nunes Batista',
  age: 19,
  skills: ['HTML', 'CSS', 'JavaScript' ],
  getFullName: function getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
console.log(person.firstName)
console.log(person['lastName'])
console.log(person.skills[2])
