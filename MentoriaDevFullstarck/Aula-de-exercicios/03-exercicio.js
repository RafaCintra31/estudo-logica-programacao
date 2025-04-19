/*
    3) Número Par ou Ímpar
Crie um programa que recebe um número e verifica se ele é par ou ímpar.

Se for par, exiba: "O número X é par."
Se for ímpar, exiba: "O número X é ímpar."

Use o operador para calcular o resto da divisão.
*/

let numero = 21

if(numero % 2 == 0){
    console.log('O número', numero, 'é par');
}else{
    console.log('o número', numero, 'é impar');
}

if(numero % 4 == 0){
    console.log('O número', numero, 'é par');
}else {
    console.log('O número', numero, 'é impar');    
}

if(numero % 2 == 1){
    console.log('O número', numero, 'é impar');
}else{
    console.log('O número', numero, 'é par');
}