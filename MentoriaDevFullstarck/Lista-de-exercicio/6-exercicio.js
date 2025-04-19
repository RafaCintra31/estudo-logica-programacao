/*
    06. Exercicio:
    Receba o nome completo de uma 
    pessoa e coloque a primeira letra em maiusculo
*/

// V1
function nomeComAPrimeiraLetraMaiuscula(nomeCompleto){

    let primeiraLetraEmMaiusculo = true
    let maiuscula = ''

    for(let i = 0; i < nomeCompleto.length; i++){
        let primeiraLetra = nomeCompleto.charAt(i)

        if(primeiraLetraEmMaiusculo){
            primeiraLetra = primeiraLetra.toLocaleUpperCase()
        }
        if(primeiraLetra == ''){
            primeiraLetraEmMaiusculo = true
        }else{
            primeiraLetraEmMaiusculo = false
        }
        maiuscula = maiuscula + primeiraLetra

    }

    console.log(maiuscula);
}


let nomeCompleto1 = process.argv[2] + ''
let nomeCompleto2 = process.argv[3] + ''
nomeComAPrimeiraLetraMaiuscula(nomeCompleto1)
nomeComAPrimeiraLetraMaiuscula(nomeCompleto2)


// V2
let nomeCompleto = process.argv[4] + ''
let primeiraLetra = nomeCompleto.charAt(0)
let primeiraLetraEmMaiusculo = primeiraLetra.toUpperCase() + nomeCompleto.slice(1)

console.log(primeiraLetraEmMaiusculo);


// V3
let nomeCompleto3 = process.argv[5] + ''
let primeiraLetra1 = nomeCompleto3.charAt(0)
let primeiraLetraEmMaiusculo1 = primeiraLetra1.toUpperCase() + nomeCompleto3.substring(1)

console.log(primeiraLetraEmMaiusculo1);


//V1 -> Coloca todas as primeiras letras em maiucula
function formatarNome(nomeCompleto = ''){
    let nomeFormatado = ''

    const nomes = nomeCompleto.split(' ')

    for(let i = 0; i < nomes.length; i++){
        let nome = transformarPrimeiraLetraCaixaAlta(nomes[i])
        nomeFormatado = nomeFormatado + ' ' + nome
    }

    return nomeFormatado
}

function transformarPrimeiraLetraCaixaAlta(valor = ''){
    return valor.substring(0,1).toUpperCase() + valor.substring(1).toLowerCa
}

let nomeParam =  process.argv[6]
const formatacaoNome = formatarNome(nomeParam)
console.log('Seu nome formatado', formatacaoNome);