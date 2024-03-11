function isPrimo(numero) {
    if (numero < 2) {
    return false;
    }
    for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
    return false;
    }
    }
    return true;
   }
   
   // Exemplo de uso da função

   const numeroTeste = 13;
   if (isPrimo(numeroTeste)) {
    console.log(`${numeroTeste} é um número primo.`);
   } else {
    console.log(`${numeroTeste} não é um número primo.`);
   }