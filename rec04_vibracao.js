const entrada = require('readline-sync');

const vibracao = entrada.questionInt("Informe o valor da vibração (mm/s):");


let classificacao; 

if (vibracao <= 3) {
    classificacao = "ESTAVEL";
} else if (vibracao >= 3 && vibracao <= 6) {
    classificacao = "ATENCAO";
} else {
    classificacao = "CRITICA";
}

console.log("\n === SITUACAO DA VIBRACAO ===")
console.log(`valor informado: ${vibracao}`);
console.log(`classificao: ${classificacao}`)