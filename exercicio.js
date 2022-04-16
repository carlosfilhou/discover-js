// declare uma variável de nome weight
let weight

// que tipo de dado é a variável acima?
console.log(typeof weight)

weight = 83

// declare variáveis e e atribua valores
let name = 'carlos'
let age = 26
let isHuman = true
let height = 1.89

// pegue os mesmos dados e coloque em um objeto
let person = {
  name: 'carlos',
  age: 26,
  isHuman: true,
  height: 1.89
}

// mostre no console a seguinte mensagem:
// <name> de idade <age> pesa <weight>
console.log(`${name} de idade ${age} pesa ${weight}kg`)

// declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
let students = []

// reatribua valor para a variável acima, colocando dentro dela o objeto da outra questão. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
students = [
  person
]

console.log(students)

// coloque no console o valor da posição zero do array acima
console.log(students[0])

// crie um novo student e coloque na posição 1 do array students
const joao = {
  name: "joao",
  age: 25,
  weight: 75
}

students = [
  person,
  joao
]

console.log(students[1])

// sem rodar o código responda qual é a resposta do código abaixo e por que? após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1

// resposta: será indefinido porque var foi declarado conforme hoisting(elevação), mas não foi atribuido valor ANTES de imprimir.