// DECLARAÇÃO DE VARIÁVEIS NO JS
// CONST X LET X VAR

const nome = 'Diego';
// nome = "Afonso"
var idade;
var idade = 20;
idade = 10;
let cidade;
cidade = "Registro";

console.log(nome);
console.log(idade);
console.log(cidade);

/*---------------------------------------------------------------------------*/
// TYPEROF
const sobrenome = "Max";
const salario = 5000;
let endereco;
console.log(typeof(salario));
console.log(typeof(sobrenome));
console.log(typeof(endereco));

/*---------------------------------------------------------------------------*/
// TIPOS DE FUNÇÕES
//// FUNÇÕES SIMPLES
function minhaFuncao(){
    console.log("Olá Mundo");
}

function saudacao(cidade, nome="usuário"){ //Cidade obrigatório, nome opcional
    console.log("Olá, bem vindo, " + nome + " de " + cidade)
}
saudacao("Registro") // Enviando o argumento

function soma(n1, n2){
    let resultado = n1 + n2
    console.log(`A soma dos dois números foi ${resultado}`)
}
soma(5,5)

function Soma(n1,n2){
    return n1+n2
}
console.log(`A soma dos dois números foi ${Soma(2,6)}.`)

//// FUNÇÕES COM MAIS DE UM RETORNO
const dobro = function (x) {
    return x * 2;
}
console.log(`O Dobro do número é ${dobro(15)}`);

/*---------------------------------------------------------------------------*/
// ARROW FUNCTION (função anônima)
//// PARÂMETRO ÚNICO
const Dobro = x =>{
    return x * 2;
}
console.log(Dobro(20));

//// COM MAIS DE UM PARÂMETRO
const calculadora  = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`) // O eval faz a operação entre as Strings
}
console.log(`O resultado da operação é ${calculadora(6, '*', 6)}.`);

/*---------------------------------------------------------------------------*/
// FUNÇÃO IMEDIATA - IIFE (Immediately Invoked Function Expression) não precisa ser invocada para que seja executada
const iife = (function(){
    console.log("Executando imediatamente!")
})() // Parâmetros

//// IIFE COM PARÂMETRO
const start = (function (app) {
    console.log(`Executando imediatamnete o app ${app}.`);
})("Whatsapp")