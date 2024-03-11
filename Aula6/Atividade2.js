let dia = 3;
let diaSemana;

switch (dia) {
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Segunda-feira";
        break;
    case 3:
        diaSemana = "Terça-feira";
        break;
    case 4:
        diaSemana = "Quarta-feira";
        break;
    case 5:
        diaSemana = "Quinta-feira";
        break;
    case 6:
        diaSemana = "Sexta-feira";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
    default:
        console.log("Número de dia inválido.");
}

if (dia >= 2 && dia <= 6) {
    console.log(`${diaSemana} é um dia útil.`);
} else {
    console.log(`${diaSemana} é finaldesemana.`);
}