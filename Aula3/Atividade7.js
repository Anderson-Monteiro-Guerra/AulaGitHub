let numerosPares = [];
for (let i = 2; i <= 20; i += 2) {
 numerosPares.push(i);
}
console.log("A soma dos Números: :", numerosPares , "é ");

let soma = 0;
for (let i = 2; i <= 20; i+= 2) {
 soma += i; //-> soma = i + soma
}
console.log("=", soma);
