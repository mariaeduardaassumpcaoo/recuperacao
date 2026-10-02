const entrada = require("readline-sync");

const pecasCiclo = entrada.questionInt("Qual a quantidade de pecas produzida por ciclo: ");

console.log("\n=== PRODUCAO ACUMULADA ===");

for (let ciclo =1; ciclo <= 12; ciclo ++) {
    const totalAcumulacao = pecasCiclo * ciclo
    console.log(`Ciclo ${ciclo}: ${totalAcumulacao} de pecas`);
}