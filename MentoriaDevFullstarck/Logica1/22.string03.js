/*
    STRING
    - É um array de caracteres (é transparentes)
    - Imultáveis
    - Funções que usamos eventualmente 
*/

// Juntar texto (concatenação)
let s1 = 'meu'
let s2 = 'texto'
let texto = s1 + ' ' + s2
console.log(texto);         // meu texto

// concat
console.log('concat:', s1.concat(' ' + s2));


// Podemos usar concatecação para um némero para string
let n = 0
console.log(typeof(n));       // Number

n = ' + n'
console.log(typeof(n));       // String
