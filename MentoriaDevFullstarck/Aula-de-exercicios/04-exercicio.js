/*
    4) Maior Número entre Três
Escreva um programa que recebe três números e imprime o maior deles.

Saída esperada: "O maior número é X."
*/

let n1 = 7
let n2 = 5
let n3 = 4

if((n1 > n2) && (n1 > n3)){
   console.log(`O maior número é ${n1}`);
}else if((n2 > n1) && (n2 > n3)){
   console.log(`O maior número é ${n2}`);
}else{
   console.log(`O maior número é ${n3}`);
}

// outra forma de se fazer

let num1 = 250, num2 = 200, num3 = 150
let maior;

if(num1 > num2 && num1 > num3){
    maior = num1;
}else if(num2 > num1 && num2 > num3){
    maior = num2
}else{
    maior = num3
}
console.log(`O maior número é ${maior}`);
