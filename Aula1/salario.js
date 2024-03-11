// Criação de Variáveis
let nome;
let idade;
let salario;

// Atribuição de Dados às Variáveis
nome = "João";
idade = 25;
salario = 3000.50;

// Manipulação de Dados nas Variáveis
idade += 5; // Incremento da idade
salario *= 1.1; // Aumento de 10% no salário

// Impressão no Console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Salário:", salario.toFixed(2)); // Exibir o salário
console.log();


// outra maneira de imprimir
ExibirSalario = `Nome: ${nome}
Idade: ${idade}
Salario: ${salario}`;

console.log(ExibirSalario);