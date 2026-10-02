const entrada = require('readline-sync')

const caixasHora = 75;
const horas = 8;

const calcularProducaoTotal = caixasHora * horas

console.log(`Producao por hora: ${caixasHora} caixas.`)
console.log(`Horas por turno: ${horas} horas.`)
console.log(`Produção total foi de ${calcularProducaoTotal} caixas.`)
