/*Crie um programa que recebe um array de números como entrada e
calcula a soma de todos os elementos. Por exemplo, para o array [1, 2,
3, 4, 5, 6] , o resultado seria 21 .*/


function somaElementos (array){
    let soma = 0;
    for(i = 0 ; i < array.length ; i++){
        soma += array[i];

    }return soma;

}
const numeros =[0,1,2,3,4,5,6];

console.log(somaElementos(numeros));
