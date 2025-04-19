/*
    5) Números maiores que 10

Escreva um script para entrar com 5 números e exibir a 
quantidade de números maiores que 10.
*/

let listaDeNumeros = [1, 8, 11, 10, 12]
let Maior

for(let i = 0; i < listaDeNumeros.length; i++){
    if(listaDeNumeros[i] > 10){
        console.log('Maior que 10:', listaDeNumeros[i]);
    }
    
}