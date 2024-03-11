let numquad = 0
for (let i=1; i<=5; i++){
var numquad1 = i**2;
}
console.log("soma dos quadrados: " + numquad1)

console.log()




let numeros = [];
for (let i = 1; i <= 5; i++) {
 numeros.push(i);
}
console.log("A soma do quadrado dos Números ", numeros , "é");

let soma = 0;
for (let i = 1; i <= 5; i++) {
soma += i**2; //-> soma = i + soma
}
console.log("=", soma);
