let numerosPares = [];
for (let i = 2; i <= 10; i += 2) {
 numerosPares.push(i);
}
console.log("Números Pares:", numerosPares);

console.log("-----------------------------------");

let numerosImpares = [];
for (let i = 1; i <= 9; i += 2) {
 numerosImpares.push(i);
}
console.log("Números Ímpares:", numerosImpares);

console.log("-----------------------------------");
// veja difrença:

for (let i = 2; i <= 10; i += 2) {
    console.log("Número Par:", i);
}
console.log("-----------------------------------");

for (let i = 1; i <= 9; i += 2) {
    console.log("Número ímpar:", i);
}
