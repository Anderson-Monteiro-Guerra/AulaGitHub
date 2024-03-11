let idade = 18;

if (idade <= 11){
    console.log("Criança");
}else if(idade <=15){
    console.log("Adolescente");
}else if(idade <=17){
    console.log("Jovem adulto");    
}else{
    console.log("Adulto");
}

/* obeserve que não imprime no console a idade correta nesta ordem abaixo:

let idade = 2;

if (idade <= 17){
    console.log("JOV ADULT");
}else if(idade <=15){
    console.log("ADOLESC");
}else if(idade <=11){
    console.log("CRIANÇA");    
}else{
    console.log("Adulto");
}
*/