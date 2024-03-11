/*
Crie um programa que recebe um array de números como entrada e
calcula a soma de todos os elementos. Por exemplo, para o array [1, 2,
3, 4, 5] , o resultado seria 15 .
*/
/*
let vetor = [1, 2, 3, 4, 5];

for (let i = 0; i < vetor.length; i++) {   //  "length": é o comprimento do vetor que é igual a 5 neste caso"
    console.log(`Elemento ${i} é o vetor ${vetor[i]}`);
}
let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma += i;
}
console.log("A Soma dos números no Array é:", soma);

*/

function soma(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        contador += array[i];
    } 
    return contador;
} 
let array1 = [1, 2, 3, 4, 5]
console.log(soma(array1));




