/*
    03. Exercicio:
    Receba um número e mostre a sequencia fibonacci
    Formula: F(n + 2) = F(n + 1) + F(n) , com n ≥ 1 e F(1) = F(2) = 1
*/

function gerarSequenciaFibonacci(seq){
    let list = []

    for(let i = 0; i < seq; i++){
        if(i == 0){
            list.push(0)
            continue
        }

        if(i == 1){
            list.push(1)
            continue
        }

        let ultimoItemList = list[list.length - 1]
        let penultimoItemList = list[list.length - 2]
        let seqAtual = ultimoItemList + penultimoItemList
        list.push(seqAtual)
    }

    console.log(list);
    
}

let sequenciaFibonacci = parseInt(process.argv[2])
gerarSequenciaFibonacci(sequenciaFibonacci)