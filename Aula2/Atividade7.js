var ano = 2025;

if((ano % 4 == 0 && ano % 100 !== 0) || ano % 200 == 0){
    console.log("bissexto");

    }else{
        console.log("não bissexto");
    }