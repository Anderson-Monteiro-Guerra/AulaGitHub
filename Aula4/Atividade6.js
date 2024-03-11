
// loop para identificar numeros primos de 1 a 20

var numero = 1;

while (numero <= 20) {

  let isPrimo = true;//boolean
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