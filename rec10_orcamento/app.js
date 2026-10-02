const entrada = require('readline-sync');

const {
    calcularMaodeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesorcamento");

const cliente = entrada.question("Nome do cliente:");
const valorMateriais= entrada.questionFloat("Valor dos mmateriais:");
const horas = entrada.questionFloat("Horas de servico:");

const maoDeObra = calcularMaodeObra(horas);
const total = calcularTotal(valorMateriais, horas);
const desconto = verificarDesconto(total);

console.log("/n=== ORCAMENTO ==");
console.log(`Cliente: ${cliente}`)
console.log(`materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`mao de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situacao: ${desconto}`);