let Nota = 10
let conceito;

switch (Nota) {

    case 1:
    case 2:
    case 3:
       conceito = "Conceito E"
        break;
    case 4:
    case 5:
    case 6:
        conceito = "Conceito D"
        break;

    case 7:
    case 8:
        conceito = "Conceito C"
        break;
    case 9:
        conceito = "Conceito B"
        break;
    case 10:
        conceito = "Conceito A"
        break;

    default: 
        console.log("Conceito invalido .")
        break;
}

if (Nota >=7 ){
    console.log(`A sua nota foi ${Nota} e você atingiu o ${conceito}, você foi "Aprovado". PARABÉNS !!! `)
}else{
    console.log(`A sua nota foi ${Nota} e você atingiu apenas o ${conceito},  "Reprovado".`)
}




//console.log(conceito)

/*
let nota = 7;
let conceito;


switch (nota) {
    case 1:
        conceito = "Conceito E"
        break;

    case 4:
        conceito = "Conceito D"
        break;

    case 7||8:
        conceito = "Conceito C"
        break;

    case 9:
        conceito = "Conceito B"
        break;

    case 10:
        conceito = "Conceito  A"
        break;

    default:
        conceito = "Nota Inválida"

}
console.log(`A nota se refere ao ${conceito}`);
*/