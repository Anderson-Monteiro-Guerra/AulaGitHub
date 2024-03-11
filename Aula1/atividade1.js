produto = "Soja";
quantidade = 100;
precounitario = 16.50;

quantidade += 5;
precounitario *= 1.1;

console.log("Produto: "  +  produto);
console.log("Quantidade: ", quantidade);
console.log("Preço Unitário: ", precounitario.toFixed(2));
 


/*
// Outra maneira de imprimir

ExibirTabela = `Produto: ${produto}
Quantidade: ${quantidade}
Preço Unitário: ${precounitario.toFixed(2)}`;

console.log(ExibirTabela)

/*
produto = "soja";
quantidade = 100;
precounitario = 16.50;

quantidade += 5;
precounitario *=1.1;

console.log("produto: " + produto);
console.log("Quantidade:" +quantidade);
console.log("Preço Unitário: " + precounitario.toFixed(2));
*/