/*
    5) Pode Votar?
Crie um programa que verifica se uma pessoa pode votar com base nas regras:

Menores de 16 anos → "Você não pode votar."
Entre 16 e 17 anos ou acima de 70 → "O voto é opcional."
Entre 18 e 70 anos → "O voto é obrigatório."
*/

let idadePodeVotar = 32

if(idadePodeVotar < 16){
    console.log('Você não pode votar');
}else if ((idadePodeVotar >= 16) && (idadePodeVotar <= 18)) {
    console.log('O voto é opcional');
}else if (idadePodeVotar >= 70){
    console.log('O voto é opcional');
}else{
    console.log('O voto é obrigatório');   
}

// Outra forma de se fazer

if( idadePodeVotar < 16){
    console.log('Você não pode votar');
}else if((idadePodeVotar >= 16) && (idadePodeVotar <= 18) || idadePodeVotar >= 70){
    console.log('O voto é opcional');
}else {
    console.log('O voto é obrigatório');
}