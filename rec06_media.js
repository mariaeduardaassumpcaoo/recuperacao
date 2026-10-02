const entrada = require("readline-sync")

let acumulador = 0;

for(let i=1; i <=6; i++) {
    const medidas = entrada.questionFloat(`Digite a medicao ${i}:`);
    acumulador += medidas;
}

const media = acumulador / 6;

console.log("\n=== MEDIDAS ===");

console.log(`Soma das medidas: ${acumulador}`);
console.log(`Media total: ${media}`);

