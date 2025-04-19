/*
     INCREMENTO E DECREMENTO
*/

let n = 10

// Incremento (++n -> incremento primeiro) (n++ -> incremento depois)
n++
++n
console.log(++n);
console.log(n);

// EXEMPLOS

// N++
let n1 = 10
let n2 = 20

let soma = (n1++) + (n2++)
console.log(soma); // 30
console.log(n1);   // 11
console.log(n2);   // 21

// ++N
let n7 = 10
let n8 = 20

let soma2 = (++n7) + (++n8)
console.log(soma2); // 32
console.log(n1);    // 11
console.log(n2);    // 21

// N + 1 = N++ (NÃO É UM INCREMENTO, MAS AGE COMO UM)
let n3 = 10

n3 = n3 + 1 

console.log(n3);

// DECREMENTO (EXEMPLOS)

// N--
let n4 = 10

console.log(n4--);  // 10
console.log(n4);    // 9

// --N
let n5 = 20

console.log(--n5);  // 19
console.log(n5);    // 19

// N - 1 = N-- (NÃO É UM DECREMENTO, MAS AGE COMO UM)
let n6 = 10

n6 = n6 - 1

console.log(n6);
