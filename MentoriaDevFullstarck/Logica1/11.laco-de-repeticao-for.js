/*
    ESTRUTURA DE REPETIÇÃO - FOR   
*/

/*
    Loop FOR : É o cara quando você sabe quantas vezes quer rodar algo. Tipo, "faz isso aqui 10 vezes"

    for (let i = 0; i < 10; i++) {
        console. log (i);
    }
    Aqui, i começa em 0, e o loop continua enquanto i for menor que 10. A cada iteração, i é
    incrementado em 1
*/

// Caracteristicas laços de repetição
// Inicialização, condição de para, incremento

// Exibindo lista de frente para trás
let fruta = ['Banana', 'Maça', 'Uva', 'Laranja']

for(/*inicialização*/let i = 0; /*consição de parada*/ i < fruta.length;/*incremento*/ i++){
    console.log(fruta[i]);
    
}

console.log('Fim do processo 1');

// Exibindo lista de trás para frente
for(let i = fruta.length - 1; i >= 0; i--){
    console.log(fruta[i]);
    
}

console.log('Fim do processo 2');
