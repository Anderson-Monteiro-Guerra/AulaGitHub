Cidade = "Recife";
Populacao = 1500000;
TaxaCrescimento = 1.01

Populacao += 10000;
TaxaCrescimento *= 1.05;

console.log("Nome da Cidade: ", Cidade);
console.log("População Nova: " ,  Populacao * TaxaCrescimento.toFixed(2));
console.log("Nova Taxa de Crescimento:",TaxaCrescimento.toFixed(2));


ExibirTabela = `Nome da Cidade:  ${Cidade}
População Nova: ${Populacao*TaxaCrescimento.toFixed(2)}
Nova Taxa de Crescimento: ${TaxaCrescimento.toFixed(2)}`

console.log(ExibirTabela)





