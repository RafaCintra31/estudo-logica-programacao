/*
    Encontrar o Maior e Menor Número em um Array
Enunciado: Crie uma função que receba um array de números e retorne um objeto 
contendo o maior e o menor número do array.
*/

//let numeros = [2, 8, 1, 6, 4, 5, 10]
//
//let maior = numeros[0]
//let menor = numeros[0]
//
//for(let i = 1; i < numeros.length; i++){
//    if(numeros[i] < menor){
//        menor = numeros[i]
//        continue
//    }
//
//    if(numeros[i] > maior){
//        maior = numeros[i]
//        continue
//    }
//}
//
//console.log('Maior número:', maior);
//console.log('Menor número:', menor);

function maioremenor(maior, menor){

    let listaNumeros = [1, 2, 8, 6, 11]

    for(let i = 1; i < numeros.length; i++){
        if(listaNumeros[i] < menor){
            menor = listaNumeros[i]
            continue
        }

        if(listaNumeros[i] > maior){
            maior = listaNumeros[i]
            continue
        }
    }

}


let resposta = maioremenor(numero[0], numero)