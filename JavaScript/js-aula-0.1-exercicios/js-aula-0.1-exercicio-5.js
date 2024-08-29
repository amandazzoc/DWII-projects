const verificaAprovacao = function (nota1, nota2) {
    var media = (nota1 + nota2) / 2
    if (media <= 5){
        return console.log("Reprovado");
    }else {
        return console.log("Aprovado");
    }
}
verificaAprovacao(6,6)
verificaAprovacao(6,4)