/*
    01. Exercicio:
    O etanol tem cerca de 70% do rendimento da gasolina. Receba o valor da 
    gasolina e do alcool. Informe qual deles compensa mais.
*/

function qualCombustivelEmelhor(valorGasolina, valorAlcool){

    let rendimentoA = valorAlcool * 1.3

    console.log('Este é o rendimento do alcool:', rendimentoA.toFixed(2));

    if(valorGasolina < rendimentoA){
        console.log('A gasolina é a melhor opcão');
    }else{
        console.log('O alcool é a melhor opção');
    }
}

qualCombustivelEmelhor(5.40, 4.16)