const entrada = require ('readline-sync');

const ferramentas = [];

for(let i=0; i < 3; i++) {
    console.log(`\nCadastro das ferramentas ${i + 1}`)

    const nome = entrada.question("nome: ");
    const quantidade = entrada.questionInt(`Informe a quantidade em estoque: `)
    const estoqueMinimo = entrada.questionInt(`Informe o estoque minimo:`)

    const ferramentas2 = {
        nome,
        quantidade,
        estoqueMinimo
    };

    ferramentas.push(ferramentas2);
}

console.log("\n=== ESTOQUE ===")

for(let i = 0; i < ferramentas.length; i++) {
    const item = ferramentas[i];

    console.log(`ferramentas: ${item.nome}`);
    console.log(`quantidade: ${item.quantidade}`);
    console.log(`estoque minimo: ${item.estoqueMinimo}`);

    if (item.quantidade < item.estoqueMinimo) {
        console.log("Situacao: REPOR")
    } else {
        console.log("Situacao: ESTOQUE SUFICIENTE")
    }

}