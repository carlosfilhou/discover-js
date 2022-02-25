//prototype-based - linguagem baseada em protótipo
//prototype chain - cadeia de protótipo

//type coersion (o próprio java script forçou o número 5 a virar uma string para concatenar, ou seja, de maneira forçosa)
console.log('9' + 5)

//type conversion (eu MANUALMENTE transformo um tipo de dado em outro)
console.log(Number('9') + 5)

//manipulando STRINGS e NÚMEROS
//transformar string em número e número em string
let string = "123"
console.log(Number(string))

//agora o contrário, transformando um número em uma string
let number = 123
console.log(String(number))

//contar quantos caracteres tem uma palavra e quantos digitos tem em um número
let word = "paralelepipedo"
console.log(word.length)

let number1 = 1234567
console.log(String(number1).length)

//transformar um número quebrado com 2 casas decimais
let number2 = 345.4420349204
console.log(number2.toFixed(2))

//trocar o ponto por vígula nas casas decimais, LEMBRANDO que um objeto pode ter diversas funções atreladas uma a outra
let number3 = 444.55555
console.log(number3.toFixed(2).replace(".", ","))
