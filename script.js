<<<<<<< HEAD
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

//Operador que agrupar expressões é o (parênteses), o que estiver dentro dos parenteses será resolvido primeiro
let total = 2 * (3 - 1)
console.log(total)

// === estritamente igual a.. (compara também o tipo de dado)
let one = 1
let two = 2

console.log(one === 1)
console.log(two !== 2)

//operadores de atribuição
let x

//atribuir ao x
x = 1
console.log(x)

//adicionar ao x
x += 3
console.log(x)

//subtrair do x
x -= 1
console.log(x)

//multiplicar ao x
x *= 3
console.log(x)

//dividir o x
x /= 2
console.log(x)

//resto da divisão (ou seja, irá pegar o que estiver depois da vírgula)
x %= 2
console.log(x)

//exponencial
x **= 2
console.log(x)

//Operadore ternário
let ageCarlos = 18

//repare que o sinal de interrogação representa o "então", e os dois pontos representa o "senão"
const canDrive = ageCarlos >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

//segundo exemplo de operador ternário
let bread = true
let cheese = false

const NiceBreakFast = bread && cheese ? 'nice coffee' : 'bad coffee'
console.log(NiceBreakFast)

//FALSY: quando um valor é considerado false em contextgos onde um booleano é obrigatório ( condicionais e loops )
// false, 0, -0, "", null, undefined, NaN.

//TRUTHY: qaundo um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
//tru, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity

=======
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

//Operador que agrupar expressões é o (parênteses), o que estiver dentro dos parenteses será resolvido primeiro
let total = 2 * (3 - 1)
console.log(total)

// === estritamente igual a.. (compara também o tipo de dado)
let one = 1
let two = 2

console.log(one === 1)
console.log(two !== 2)

//operadores de atribuição
let x

//atribuir ao x
x = 1
console.log(x)

//adicionar ao x
x += 3
console.log(x)

//subtrair do x
x -= 1
console.log(x)

//multiplicar ao x
x *= 3
console.log(x)

//dividir o x
x /= 2
console.log(x)

//resto da divisão (ou seja, irá pegar o que estiver depois da vírgula)
x %= 2
console.log(x)

//exponencial
x **= 2
console.log(x)

//Operadore ternário
let ageCarlos = 18

//repare que o sinal de interrogação representa o "então", e os dois pontos representa o "senão"
const canDrive = ageCarlos >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

//segundo exemplo de operador ternário
let bread = true
let cheese = false

const NiceBreakFast = bread && cheese ? 'nice coffee' : 'bad coffee'
console.log(NiceBreakFast)

//FALSY: quando um valor é considerado false em contextgos onde um booleano é obrigatório ( condicionais e loops )
// false, 0, -0, "", null, undefined, NaN.

//TRUTHY: qaundo um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
//tru, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinityy

//Control flow
let temperature = 33

if (temperature >= 37){
  console.log('Indivíduo com febre')
}
else if (temperature <= 35){
  console.log('Indivíduo com hipotermia')
}
else{
  console.log('Indivíduo saudável')
}

>>>>>>> 3a03edb53b60ac72e36f3d0259bc7d3f63fba8bf
