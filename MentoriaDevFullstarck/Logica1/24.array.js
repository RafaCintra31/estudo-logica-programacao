/*
    ARRAY
    - Funções
*/

let fruits = ['banana', 'maça', 'uva', 'laranja']

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Percorrer os elementos de um array
fruits.forEach(function(item) {
    console.log(item);
    
})

// Declaração de uma função que verifica se o elemento existe em uma lista
const fruit = 'morango'

let r = existe(fruits, fruit)
console.log(r);


let r2 = fruits.some((item) => {
    return item = fruits
})
console.log(r2);


// Filtrar somente maiores que 17
// v1
function filtrarAdultos(lista = []){
    const listaFiltrada = []

    for(let i = 0; i < lista.length; i++){
        const pessoaAtual = lista[i]
        if(pessoaAtual.idade > 17){
            listaFiltrada.push(pessoaAtual)
        }
    }
    return listaFiltrada
}

const pessoas = [
    {idade: 17, nome: 'Maria'},
    {idade: 21, nome: 'Pedro'},
    {idade: 16, nome: 'João'},
    {idade: 18, nome: 'Jose'},
]

const pessoasAdultasv1 = filtrarAdultos(pessoas)
console.log('v1', pessoasAdultasv1);

// filtro v2
const pessoasAdultasv2 = pessoas.filter(function(pessoaAtual) {
    return pessoaAtual.idade > 17
})


console.log('v2', pessoasAdultasv2);