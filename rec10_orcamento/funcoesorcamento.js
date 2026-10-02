function calcularMaodeObra(horas) {
    return horas * 95;
}

function calcularTotal(valorMateriais, horas) {
    return valorMateriais + calcularMaodeObra(horas);
}

function verificarDesconto(total) {
    if(total >= 1000) {
        return "DESCONTO DE 10%"
    } else {
        return "SEM DESCONTO"
    }
}
        
module.exports = {
    calcularMaodeObra,
    calcularTotal,
    verificarDesconto
};


