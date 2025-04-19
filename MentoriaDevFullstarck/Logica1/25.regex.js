/*
    EXPRESSÕES REGULARES
    - Utilizado para validar um campo
    - Verificar um padrão
    - Extrair dados em massa
    - Para substituição
*/

// Validando telefone - passo 1
let regex = /9999-9999/
let telefone = '9999-9999'
console.log(regex.test(telefone)); // true

// OBS: as regex possuem caracteres especiais que são reservados
// parra escapar os caracteres, use \

// Validando telefone - passo 2
let regex1 = /\(11\) 9999-9999/
let telefone1 = '(11) 9999-9999'
console.log(regex1.test(telefone1));

// OBS: Usando agrupamento de caracteres

// Validando telefone - passo 3
let regex3 = /\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/
let telefone3 = '(99) 1234-7894'
console.log(regex3.test(telefone3));

// OBS: Usando limitadores
// ^ Limitador de inicio
// $ Limitador de fim

// Validando telefone - passo 4
let regex4 = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/
let telefone4 = '(99) 1234-7894'
console.log(regex4.test(telefone4));

// OBS: Quantificadores
// {n}
// {n,}
// {n,m}

// Validando telefone - passo 5 
let regex5 = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/
let telefone5 = '(99) 1234-7894'
console.log(regex5.test(telefone5));

// OBS: Quantificadores
// ? (zero ou um)
// * (zero ou mais)
// + (um ou mais)

// Validando telefone - passo 6
let regex6 = /^\([0-9]{2}\) [0-9]{4}-?[0-9]{4}$/        // ? = Agora é opcional
let telefone6 = '(99) 1234-7894'
console.log(regex6.test(telefone6));

// OBS: Metacaracteres

// \d = [0-9]

// Validando telefone - passo 7
let regex7 = /^\(\d{2}\) \d{4,5}-?\d{4}$/
let telefone7 = '(99) 91234-7894'           //Agora o 9 é aceito
console.log(regex7.test(telefone7));

// OBS: Extraindo os dados e usando modificadores
// g = global
// i = case insensitive
// m = multiline matching

// Validando telefone - passo 8
let regex8 = /\(\d{2}\) \d{4,5}-?\d{4}/g
let textoComTelefone = 'sdfasta (99) 91234-3333 sdefr efre (99) 91234-9999 ddwdwdwd'
console.log(textoComTelefone.match(regex8));

//OBS: Substituindo um telefone

// Validando telefone - passo 9
let regex9 = /\(\d{2}\) \d{4,5}-?\d{4}/g
let textoComTelefone1 = 'asdefede (99) 91234-3333 dhejenje jnejfefej (99) 91234-9999 jejdejej jjekejk (99) 91234-8888'
console.log(textoComTelefone1.replace(regex9, '(probido)'));