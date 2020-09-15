//require = requisita um  módulo dentro do arquivo
const mod1 = require('./modulo1');

//destructor para não ficar disponível todas as exports pro usuário
const {imprimirMensagem, imprimirMensagem3} = require('./modulo2');

mod1('Meu primeiro módulo Node.js');
imprimirMensagem('Meu segundo módulo Node.js');
imprimirMensagem3('mensagem 3');

//operadores lógicos == (compara conteúdo), === (compara Tipo)

let t2 = '0'
let t3 = 0;

console.log(t3 === t2)
t2 += 1 //concatenação
t3 += 1 //adição
console.log(t2)
console.log(t3)
