/*
    METODOS RECURSIVOS (auto invocaveis)
*/

function meuFor(list, index){
    if(index < list.length){
        console.log(list[index]);
        meuFor(list, ++index)       //Invocando a si mesmo
    }
    return
}

const names = ['Maria', 'João', 'Jose']

meuFor(names, 0)

function countDown(n){
    if(n <= 0){             // Stop condition
        return
    }
    console.log(n);         // Print
    
    n = n - 1               // Incremento

    countDown(n)            // Auto invocação
}

countDown(5)                // Starting

