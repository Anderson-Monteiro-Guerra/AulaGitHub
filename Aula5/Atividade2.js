// Aula de reforço de JavaScript

// Estruturas condicionais (if-else)

// Exemplo 1 - verificação de maior de idade

var idade = 11;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//Exemplo 2 - verificação de media de nota

var nota = 7;

if (nota > 7) {
  console.log("Aprovado");
} else if (nota === 7) {
  console.log("Media");
} else {
  console.log("Reprovado");
}

//Estruturas de repeticão loop (for)

//Exemplo 1 - contagem de 1 a 10

var tabuada = 20;

// Loop externo para percorrer de 1 a 10
for (let i = 1; i <= tabuada; i++) {
  console.log(`Tabuada do ${i}:`);

  // Loop interno para calcular e imprimir os resultados da tabuada
  for (let j = 1; j <= tabuada; j++) {
    const resultado = i * j;
    console.log(`${i} x ${j} = ${resultado}`);
  }

  // Adicionar uma linha em branco entre as tabuadas
  console.log();
}

//ESTRUTURA DE REPETIÇÃO (WHILE)

//contador de 1 a 10

let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//loop para identificar numeros pares de 1 a 20

let contador = 1;

while (contador <= 20) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador++;
}

//loop para identificar numeros primos de 1 a 20

var numero = 1;
while (numero <= 20) {
  let isPrimo = true; //boolean
  let divisor = 2;

  while (divisor < numero) {
    if (numero % divisor === 0) {
      isPrimo = false;
      break;
    }
    divisor++;
  }

  if (numero > 1 && isPrimo) {
    console.log(numero + "é primo");
  }
  numero++;
}

function isMaiorDeIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade, pode beber";
  } else {
    return "Menor de idade, Barrado";
  }
}

console.log(isMaiorDeIdade(22));

function numerosPrimos() {
  var numero = 1;
  while (numero <= 20) {
    let isPrimo = true; //boolean
    let divisor = 2;

    while (divisor < numero) {
      if (numero % divisor === 0) {
        isPrimo = false;
        break;
      }
      divisor++;
    }
    if (numero > 1 && isPrimo) {
      console.log(numero + " é primo");
    }
    numero++;
  }
}

numerosPrimos();
