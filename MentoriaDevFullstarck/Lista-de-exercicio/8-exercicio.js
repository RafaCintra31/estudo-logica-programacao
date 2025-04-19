/*
    08. Exercicio:
    Receba um texto e verifique se é um palindromo
*/

// V1
function verificacaoDePalindromo(palavra = ''){

    let palavraInvertida = ''

    for(let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida = palavraInvertida + palavra.charAt(i);
    }
    console.log(palavra == palavraInvertida);
}

verificacaoDePalindromo('ovo')

// V2

function isPalindromo (palavra){
    let j = 0

    for(let i = palavra.length - 1; i >= 0; i--){
        if(palavra[j] =! palavra[i]){
            console.log('FALSO');
            return
        }
        j++
    }
    console.log('VERDADEIRO');
}

isPalindromo('ovo')
isPalindromo('test')
isPalindromo('VERDA DEIRO')