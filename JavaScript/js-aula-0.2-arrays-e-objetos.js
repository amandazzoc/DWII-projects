
//// ARRAYS (Vetor ou Lista)
console.log("ARRAYS (Vetor ou Lista)")
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(typeof produtos);
console.log(produtos);

console.log("------------------------------")

//// EXIBINDO ELEMENTOS DE UM VETOR PELO ÍNDICE (SEM LOOP)
console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);
console.log(produtos[3]);

console.log("------------------------------")


//// EXIBINDO ELEMENTOS DO VETOR COM O FOR (COM ÍNDICES)
for (let c in produtos)(
    console.log(`${Number(c) + 1} - ${produtos[c]}`)
)

console.log("------------------------------")

//// EXIBINDO ELEMENTOS DO VETOR COM FOREACH (com índices)
produtos.forEach(function (produto, i){
    console.log(i+1, produto);
})

console.log("------------------------------")

//// MÉTODOS DE MANIPULAÇÃO DE VETORES
let listaFrutas = ["Laranja", "Maça", "Banana"];
console.log(`Nosso vetor é o: ${listaFrutas}`);

//PUSH - Insere um novo elemento no FINAL da lista
listaFrutas[3] = 'Morango' // ADICIONANDO SEM O PUSH
console.log(`Nosso vetor é o: ${listaFrutas}`);
listaFrutas.push('Abacaxi')
console.log(`Nosso vetor é o: ${listaFrutas}`);

// UNSHIFT - Insere um novo item no inicio da lista
listaFrutas[0] = 'Lichia'
console.log(`Nosso vetor é o: ${listaFrutas}`);
listaFrutas.unshift('Pera')

// LENGTH - Retornar o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3]
console.log(`Nosso vetor é o: ${numeros}`);
console.log(`O número de elementos nesse vetor é: ${numeros.length}`);

// SORT - Ordena vetor
console.log(`O primeiro número do vetor é: ${numeros[0]}`);
console.log(`Nosso vetor ordenado é: ${numeros.sort()}`);
console.log(`O primeiro número do vetor após ordenação é: ${numeros[0]}`);

console.log("------------------------------")

//// OBJETOS LITERAIS (Atributos e Métodos)
const carro = {
    // Atributos (chaves: valor)
    modelo: 'gol',
    cor: 'vermelho',

    //Métodos (funções - ações)
    acelerar(){
        return 'Acelerando...'
    },
    frear(){
        return 'Freando...'
    }
}
console.log(carro.modelo)
console.log(carro.acelerar())

console.log("------------------------------")

// Objeto
const product = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
}
console.log(`O ${product.nome} da marca ${product.marca}, custa apenas R$${product.preco}.\n${product.descricao}`)

console.log("------------------------------")

// ARRAY DE OBJETOS 
const productList = [
    {
        nome: "Computador",
        marca: "Intel",
        preco: 4000,
        descricao: "PC moderno com bom desempenho"
    },
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento"
    },
    {
        nome: "Celular",
        marca: "Apple",
        preco: 15000,
        descricao: "Muito barato"
    },
];
console.log(productList)
// EXIBINDO O ARRAY DE OBJETOS COM FOREACH

productList.forEach(function (product){
    console.log(product.nome);
    console.log(product.marca);
    console.log(product.preco);
    console.log(product.descricao);
    console.log("------------");
})