// Esse arquivo faz parte do curso discover da RocketSeat
console.log('bem vindos ao starter')
console.log('eu sou carlos augusto')

// declarando
let name

// assignment or atribuir valor
name = 'Carlos'

// que tipo de dado foi colocado na variável
console.log(typeof name)

let age = 26
let isHuman = true

// declaração conjunta
let altura, isMonster, weight

altura = 1.8
isMonster = false
weight = 76

// multiplos argumentos na função
console.log(name, age, isHuman, isMonster, altura)

// escrita de texto + variáveis, concatenando valores
console.log('o ' + name + ' tem ' + age + ' anos')

// interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)

// object
const person = {
  name: 'joão',
  age: 25,
  weight: 75,
  isBeautiful: false
}

// imprimir somente uma propriedade do objeto
console.log(person.weight)
console.log(`${person.name} tem ${person.weight} e ele está magro`)

// array
const animals = [
  'lion',
  'monkey',
  'dog',
  'bear',
  10,
  {
    name: 'rafinha',
    age: 27,
    isHuman: true
  }
]

// acessar valores dentro de um array
console.log(animals[1])
console.log(animals[5])
console.log(animals[5].isHuman)

//criar array com construtor
let myArrayConstructor = new Array('a', 'b', 'c')
console.log(myArrayConstructor)

//array normal só para comparação
let myArray = ['a', 'b', 'c']
console.log(myArray)

//contar quantos elementos tem um array
let myArray1 = ['a', {type: 'array'}, function() {return 'olá'}]
console.log(myArray1)

//transformar uma cadeia de caracteres em elementos de um array
let word = 'manipulação'
console.log(Array.from(word))

