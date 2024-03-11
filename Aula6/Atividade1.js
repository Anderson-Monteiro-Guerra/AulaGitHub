let diaDaSemana = 7;
let resultado;



switch (diaDaSemana) {

    case 1:
        resultado = "Domingo"
        break;

    case 2:
        resultado = "Segunda"
        break;

    case 3:
        resultado = "terça"
        break;

    case 4:
        resultado = "Quarta"
        break;
    case 5:
        resultado = "Quinta"
        break;
    
    case 6:
        resultado = "Sexta"
        break;

    case 7:
        resultado = "Sábado"
        break;


    default: resultado = "Dia Inválido"

}
console.log(`o dia da semana é ${resultado}`);

