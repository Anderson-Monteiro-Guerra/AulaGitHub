/*
Escreva um programa que recebe um array de números como entrada e
calcula a média aritmética dos elementos. Por exemplo, para o array
[10, 20, 30, 40, 50] , a média seria 30 .
*/


let 
function media(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    console.log("A Soma dos números no Array é:", soma);
    return soma / array.length
}

let vetor = [10, 20, 30, 40, 50];


console.log("O valor da média entre os números do Array é:", media(vetor));
