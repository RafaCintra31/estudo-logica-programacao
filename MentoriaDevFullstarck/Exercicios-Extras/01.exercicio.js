/*
    Pode Entrar na Festa?
Uma festa só permite a entrada de pessoas com idade entre 18 e 50 anos.

Se a idade estiver nesse intervalo, exiba "Pode entrar na festa."
Caso contrário, exiba "Entrada negada."
*/

// V1
let idade = 17

if(idade >= 18 && idade <= 50){
    console.log('Pode entrar na festa');
}else{
    console.log('Entrada negada');
}

// V2
function entradaFesta(idade){

    if(idade >= 18 && idade <= 50){
        console.log('Pode entrar na festa');
    }else{
        console.log('Entrada negada');
    }    
}

entradaFesta(17)

// V3
function entradaFesta1(idade){

    return(idade >= 18 && idade <= 50) ? "Pode entrar na festa" : "Entrada negada"
}

console.log(entradaFesta1(50));