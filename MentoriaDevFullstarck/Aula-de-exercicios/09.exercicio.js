/*
    Exercício: Encontrar os Números Pares em um Intervalo
Enunciado: Crie uma função que receba dois números inteiros a e b e 
retorne um array contendo todos os números pares entre a e b (inclusive). 
Se não houver números pares, retorne um array vazio.
*/

function numerosPares(numA, numB){

    const listaPares = []

    for(let contador = numA; contador <= numB; contador++){

        if(contador % 2 == 0){
            listaPares.push(contador)
        }
        
    }
    return listaPares
}

console.log(numerosPares(0, 15));