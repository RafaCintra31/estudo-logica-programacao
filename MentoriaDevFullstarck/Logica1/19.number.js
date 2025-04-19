/*
    Tipo: NUMBER

    - NAN -> Not a number
*/

let n = 10.50
console.log(n)

// Convertendo para inteir
n = parseInt(n)

// Descobrindo o tipo de variavel
console.log(typeof(n));

// Transformar em string ou vice-versa
let n2 = '10'
let n3 = 10

// Realizando a soma com base no tipo
if(typeof(n2) != 'number'){
    console.log(n2 + n3);
}else{
    console.log(parseInt(n2) + n3);
}

//  De string para number
let n4 = '22.45'
let n5 = parseFloat(n4)
console.log(n4);
console.log(n5);

// Arredondamento
let r = 10.78 / 15.27
let rArredondar = r.toFixed(3)
let rAsNumber = parseFloat(rArredondar)
console.log(rAsNumber);                     // Forma trabalhada
console.log(parseFloat(r.toFixed(2)));      // Forma Direta