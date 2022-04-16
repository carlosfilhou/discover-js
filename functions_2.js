// função anônima e dentro das chaves temos parametros
const sum = function(number1, number2){
  let total = number1 + number2
  return total
}

let number1 = 10
let number2 = 15
//dentro das chaves temos argumentos
sum(2, 3)
sum(10, 33)

console.log(`o primeiro numero é ${number1}`)
console.log(`e o segundo numero é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

// função é um liquidificador
function liquid(fruta1, fruta2){
  return fruta1 + fruta2
}

const copo = liquid('banana', 'maçã')

console.log(`suco de ${copo}`)

// function scope

//  esse subject está em outro escopo tem outro significado
let subject = 'create video'
// esse subject aqui nesse escopo tem um significado
function createThink(subject){
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))

// function hoisting
sayMyName()

function sayMyName(){
  console.log('carlos')
}

// arrow function
const sayYourName = (name) => {
  console.log(name)
}

sayYourName('joao')

// callback function
function sayName(name1){
  console.log('antes de executar a funcao callback')

  name1()

  console.log('depois de executar a callback')

}

sayName(
  () => {
    console.log('estou em uma callback')
  }
)

// função construtora
function Person(names){
  this.names = names
  this.walk = function (){
    return this.names + " está andando"
  }
}

const carlos = new Person("carlos")
const joao = new Person("joao")

console.log(carlos.walk())
console.log(joao.walk())
