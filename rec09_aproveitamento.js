const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >=90 ) {
        return "EXCELENTE";
    } else if (percentual >=75 && percentual <=89.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }

}

const quantidadeTotal = entrada.questionFloat("Informe a quantidade total:");
const quantidadeUtil = entrada.questionFloat("Informe a quantidade util:");

const aproveitamento = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = classificarAproveitamento(aproveitamento);

console.log("\n=== APROVEITAMENTO ===");
console.log(`quantidade total: ${quantidadeTotal}`);
console.log(`quantidade util: ${quantidadeUtil}`);
console.log(`aproveitamento: ${aproveitamento.toFixed(2)}`);
console.log(`classificacao: ${classificacao}`);