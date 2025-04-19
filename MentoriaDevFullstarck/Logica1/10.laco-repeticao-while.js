/*
    ESTRUTURA REPETIÇÃO - WHILE (enquanto)
*/

/*
    Loop while : Esse aqui é mais quando você tá naquela de "vou fazer isso até algo acontecer".
    Mas cuidado, se não botar um jeito de parar, vira festa sem hora pra acabar.
    
    let i = 0; 
    while (i < 10) {
        console. log (i); i++;
    }
*/

/*
    Loop DO...WHILE: Parecido com o while, mas a diferença é que ele executa pelo menos 
    uma vez, mesmo que a condição já comece falsa.
    let i = 0;
    do {
        console. Log (1); 1++;
    } while (1 < 10);
*/

//  Incremento/Decremento, condição de parada

let n = 1
while /* enquanto */(n < 10){
    console.log('Esse é um bloco de código que está em um laço de repetição while', n);

    n++ // ou n = n + 1
}
console.log('Fim do laço');

// Condição de parada: n < 10
// Incremento: n++ ou n = n + 1
// Sem consição de parada, fica em loop infinito

// Usando o WHILE para percorer cada item da minha lista
let list = ['Edney', 'Maria', 'joão', 'Rebecca', 'Pedro'] // Minha lista tem 5 elementos

let index = 0

while(index < list.length){          // ou (index < list.lenght - 1)
    console.log(list[index]);
    index++
}

console.log(list.length);
console.log('Fim do loop');
