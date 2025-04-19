/*
    07. Exercicio:
    Receba um texto e mostre se é um email usando regex
*/

let email = /\w*(@{1})\D/
let verificacaoDeEmail1 = 'rafa.atleta16@yahoo.com.br'
let verificacaoDeEmail2 = 'lidiomar.rosita@gmail.com'
let verificacaoDeEmail3 =  'banana@abx.com'
console.log('Este E-mail é:', email.test(verificacaoDeEmail1));
console.log('Este E-mail é:', email.test(verificacaoDeEmail2));
console.log('Este E-mail é:', email.test(verificacaoDeEmail3));
