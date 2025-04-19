/*
    2) Classificação por Idade
Crie um programa que classifica uma pessoa de acordo com sua idade nas seguintes categorias:

Menos de 13 anos → "Você é uma criança"
Entre 13 e 17 anos → "Você é um adolescente"
Entre 18 e 64 anos → "Você é um adulto"
65 anos ou mais → "Você é um idoso"
*/

let idade = 19

if(idade < 13){
    console.log('Você é uma criança');
}else if ((idade >= 13) && (idade < 18)){
    console.log('Você é um adolecente');
}else if((idade >= 18) && (idade < 65)){
    console.log('Você é um adulto');
}else{
    console.log('Você é um idoso');
}