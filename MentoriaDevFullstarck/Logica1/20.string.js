/* 
        STRING 
    - Funções mais importantes
    - STRING SÃO IMUTÁVEIS (PERGUNTA DE ENTREVISTA)
*/

// Trim -> Remove espaços no inicio e fim de uma string 
// (Não remove espaços no meio da string, pois não sabe se tem texto)
let s8 = '   meu texto   '
console.log(s8.trim());

// toUpperCase -> Deixa tudo em maiusculo (caixa alta)
// toLowerCase -> Deixa tudo em minusculo (caixa baixa)
let s6 = 'my first text using string in javascript'
s6 = s6.toUpperCase()
console.log(s6);

s6 = s6.toLowerCase()
console.log(s6);

// Includes -> Verifica se um termo (palavra) está contida em um texto (string)
let s7 = 'my first text using string in javascript'
console.log('includes', s7.includes('string'));

// Exemplo de includes
let s7comparacao = 'StRiNg'
s7comparacao = s7comparacao.toLowerCase()
s7 = s7.toLowerCase()
console.log('includes', s7.includes(s7comparacao));


// Length -> Verificar o tamanha da string
let s = 'Meu primeiro texto'
console.log('Length', s.length);


// Replace -> substituição de valores (Só altera o primeiro valor)
let s1 = '10.43'
s1.replace('.', ',')
console.log(s1);

// ReplaceALL -> substituição de valores (altera todos os valor encontrados)
let valorProduto = '12,000,000,000.45'
console.log(valorProduto.replaceAll(',', '.'));

// Exemplo de ReplaceAll (Como mudar o padrão de um número decimal)
valorProduto = valorProduto.replaceAll(',', '@')        // 12@000@000@000.45
valorProduto = valorProduto.replaceAll('.', ',')        // 12@000@000@000,45
valorProduto = valorProduto.replaceAll('@', '.')        // 12.000.000.000,45
console.log(valorProduto);

// Split -> Corta o texto e transforma em
let s2 = 'banana, maça, uva, pera'
s2 = s2.split(',')
console.log(s2);