const dataAtual = new Date()

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth()+1;
const ano = dataAtual.getFullYear();

function dataFutura(dia, mes, ano){
    console.log(`${dia + 3}/${mes + 4}/${ano + 6}`);
}

dataFutura(dia, mes, ano)