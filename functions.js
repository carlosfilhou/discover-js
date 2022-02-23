// function scope
let subject = 'laranja'

function createThink(subject){
  subject = 'maça'
  return subject
}

console.log(createThink(subject))
console.log(subject)

s