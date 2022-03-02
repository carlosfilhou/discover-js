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

let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('nodejs')
console.log(techs)
//adicionar um item no começo
techs.unshift('sql')
console.log(techs)
//remover do fim
techs.pop()
console.log(techs)
// remover do começo
techs.shift()
console.log(techs)
//pegar somente alguns elementos do array (ele exlui as casas para trás da que você escolher)
console.log(techs.slice(2))
//remover 1 ou mais itens em quakquer posição do array (no primeiro argumento eu falo qual index eu quero tirar, e no segundo quantos elementos eu quero tirar pra frente)
techs.splice(1, 1)
console.log(techs)
//encontrar a posição de um elemento no array
let index = techs.indexOf('js')

console.log(index)

// a expressão new serve para criar um novo objeto
let name5 = new String('carlos')
let age5 = new Number(27)

console.log(name5, age5)

//operador do tipo unário
console.log(++age5)

//consultar tipo de dado
console.log(typeof 'carlos')

//deletar propriedade de um objeto específico
const person5 = {
  name: 'joaosinho',
  age: 33,
}
delete person5.age //aqui está deletando a propriedade idade

console.log(person5)

//Operador que agrupar expressões é o (parenteses), o que estiver dentro dos parenteses será resolvido primeiro
let total = 2 * (3 - 1)
console.log(total)