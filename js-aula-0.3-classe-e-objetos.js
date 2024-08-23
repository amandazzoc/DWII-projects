// OBJETO LITERAL

const carro = {
    // Atributos
    marca: "Ford",
    modelo: "Focus",
    ano: 2014,
    
    buzinar(){
        return "beep beep"
    }
}

console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());

console.log("------------------------------")

// CLASSE
class Carro {
    // Atributos
    constructor(marca, modelo, ano){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano
    }
    
    // Métodos
    buzinar(){
        return "beep beep"
    }
}

// Criando uma instância (objeto) da classe Carro
// const carroPopular = new Carro("Ford", "Focus", 2014)
const carroPopular = new Carro()
carroPopular.marca = "Fiat"
carroPopular.modelo = "Uno"
carroPopular.ano = 2012
console.log(carroPopular.marca, carroPopular.modelo, carroPopular.buzinar());

const carroEsportivo = new Carro()
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2024
console.log(carroEsportivo.marca, carroEsportivo.modelo, carroEsportivo.buzinar());

console.log("------------------------------")

//// DATAS
// Criando uma instância da classe Date do JS (para utilizar seus métodos)
const dataAtual = new Date()

// PEGAR O DIA ATUAL
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}!`)

// PEGAR O MÊS ATUAL
const mes = dataAtual.getMonth()+1
console.log(`Estamos no mês ${mes}!`);

// PEGAR O ANO ATUAL
const ano = dataAtual.getFullYear()
console.log(`Estamos no ano de ${ano}!`);
console.log(`Hoje é ${dia}/${mes}/${ano}`);

