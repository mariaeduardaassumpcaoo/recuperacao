const entrada = require('readline-sync');

const oleoMaquina = entrada.questionInt("Informe o nivel de oleo (%)");

if (oleoMaquina >= 40 && oleoMaquina <= 80) {
    classificacao = "NIVEL NORMAL";
} else {
    classificacao = "INSPECAO NECESSARIA";
}

console.log("\n === SITUACAO DA MAQUINA ===");
console.log(`oleo: ${oleoMaquina} C°`);
console.log(`classificacao: ${classificacao}`);
