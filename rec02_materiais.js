const entrada = require ('readline-sync')

const nomePeca = entrada.question("Informe o nome do material:");
const quantidade = entrada.question("Informe a quantidade comprada:");
const preco = entrada.questionFloat("Informe o valor:");

const total = quantidade * preco;

console.log("\n=== COMPRA ===");
console.log(`Material: ${nomePeca}`);
console.log(`Quantidade comprada: ${quantidade}`);
console.log(`Preco: ${preco.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);

