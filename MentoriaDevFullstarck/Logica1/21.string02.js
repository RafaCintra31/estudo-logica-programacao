/*
    STRING
    - É um array de caracteres (é transparentes)
    - Imultáveis
    - Funções que usamos eventualmente 
*/

// subtring -> serve para extrair um subtexto com base em um range
let s3 = 'primeira turma mentoria'
let s4 = '347354700005555666666'
// parametro 1 (0) -> index inicial
// parametro 2 (11) -> index final
console.log(s4.substring(0, 11));       // 34735470000
console.log(s4.substring(11, 15));      // 5555
console.log(s4.substring(15));          // 666666 (nesse case, a partir do index inicial até o final da string)

// compare -> verifica a ordem lexicografica das palavras
// -1: antes / 0: igual / 1: depois
let nome = 'edney'
console.log(nome.localeCompare('caio'));        // 1
console.log(nome.localeCompare('edney'));       // 0
console.log(nome.localeCompare('rafa'));        // -1

// starWith (comeca com...)
//endsWith (termina com...)
let s2 = 'primeira turma mentoria'
console.log(s2.startsWith('primeira'));
console.log(s2.endsWith('mentoria'));


// Duas formas de verificar se um subtexto está contido dentro de um texto
console.log(s2.includes('primeira'));       // Includes (true, false)
console.log(s2.indexOf('primeira'));        // IndexOf  (0, -1)
if(s2.includes('primeira')) console.log('existe');
if(s2.indexOf('primeira') >= 0) console.log('existe');

// CharAt -> Recupera um caracter com base em um index
let s1 = 'laranja'
console.log(s9.charCodeAt(0));

// IndexOf -> Retorna o index com base em um char
console.log(s9.indexOf('j'));           // 0
console.log(s9.indexOf('a'));           // 1 (Quando tem mais de 1 letra na mesma string, mostra só a primeira na string)
console.log(s9.indexOf('ran'));         // Retorna a posição do r quando encontrar o termo 'ran'
console.log(s9.indexOf('ba'));          // Retorna -1 (Quando não é encontrando a letra, mostra-se -1)