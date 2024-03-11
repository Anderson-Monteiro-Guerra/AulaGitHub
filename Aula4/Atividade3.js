//Atividade 2 Sequência de Fibonacci:

//Na matemática, a sucessão de Fibonacci (ou sequência de Fibonacci), é
//uma sequência de números inteiros, começando normalmente por 0 e 1, na qual
//cada termo subsequente corresponde à soma dos dois anteriores. A sequência
//recebeu o nome do matemático italiano Leonardo de Pisa ou Leonardo Fibonacci,
//mais conhecido por apenas Fibonacci, que descreveu, no ano de 1202, o
//crescimento de uma população de coelhos, a partir desta. Esta sequência já era, no
//entanto, conhecida na antiguidade.

//Sabendo disso � …
//Crie um programa que utilize um loop while para gerar e imprimir os primeiros 10
//números da sequência de Fibonacci. A sequência inicia com 0 e 1, e cada número
//subsequente é a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, 34...).

//Dica: Utilize duas variáveis para representar os dois últimos números na sequência
//e uma terceira variável para armazenar o próximo número a ser impresso. O loop
//deve continuar até que os 10 números sejam gerados.


let num1 = 0
let num2 = 1
let contador = 0
let soma = num1
while (contador < 10) {
    console.log(num1);

    
soma = num1;
num1 = num2;
num2 = soma + num2
contador++;
}
var a = 0
var b = 1
let contador = 1


