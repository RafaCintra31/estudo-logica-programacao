/*
    Número Positivo, Negativo ou Zero
Escreva um programa que verifica se um número é positivo, negativo ou zero.
E exiba no console "O número é positivo." , "O número é negativo.", "O número é zero."
*/

// V1
function oNumeroe(numero){

    if(numero > 0){
        console.log('O número é positivo');
    }else if(numero < 0){
        console.log('O número é negativo');
    }else{
        console.log('O número é igual a zero');
        
    }

}

oNumeroe(10)

// V2
let numero = -1

if(numero > 0){
    console.log('O número é positivo');
}else if(numero < 0){
    console.log('O número é negativo');
}else{
    console.log('O número é igual a zero');
    
}
