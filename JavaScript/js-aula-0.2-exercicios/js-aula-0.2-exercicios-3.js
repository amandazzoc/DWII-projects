// 3 – Crie um array de objetos de filmes com no mínimo 3 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

let filmes = [
    {
        titulo: "Harry Potter e a pedra filosofal",
        genero: "Fantasia",
        ano: 2001,
        classificacaoIdade: "Livre para todos os públicos"
    },
    {
        titulo: "É Assim Que Acaba",
        genero: "Drama",
        ano: 2024,
        classificacaoIdade: "Maiores de 14"
    },
    {
        titulo: "Premonição",
        genero: "Terror",
        ano: 2000,
        classificacaoIdade: "Maiores de 14"
    },
    {
        titulo: "Sob as Águas do Sena",
        genero: "Ação, Suspense",
        ano: 2024,
        classificacaoIdade: "Maiores de 16"
    }
];

filmes.forEach(function (filme){
    console.log(`Titulo: ${filme.titulo}`);
    console.log(`Gênero: ${filme.genero}`);
    console.log(`Ano: ${filme.ano}`);
    console.log(`Classificação Indicativa: ${filme.classificacaoIdade}`);
    console.log("------------------------------");
})