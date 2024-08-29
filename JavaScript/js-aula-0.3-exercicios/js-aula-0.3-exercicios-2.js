function formataMoeda(salario){
    const salarioDolar = salario / 0.20
    const salarioEuro = salario / 0.19

    console.log(salarioEuro.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'}))
    console.log(salarioDolar.toLocaleString('en', {style: 'currency', currency: 'USD'}));
}

formataMoeda(1400)