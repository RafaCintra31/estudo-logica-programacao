/*
    Casa de câmbio
 
Sabendo o valor do dólar é de 5,50. Crie um algoritmo que recebe o valor de um produto em dólares e 
informe quanto em reais é necessário para comprar o produto.
*/

// V1
let dolarEmReal = 5.50
let valorDoProduto = 100

console.log(`É necessario: R$ ${dolarEmReal * valorDoProduto} reais, para comprar o produto`);

// V2
function casaDeCambio(dolarEmReal, valorDoProduto){

    console.log(`É necessario: R$ ${dolarEmReal * valorDoProduto} reais, para comprar o produto`) 
}

casaDeCambio(5.50, 150)