/*
    ESCOPO DE VARIAVEL

    -toda variavel tem um ciclo de vida (onde nasce e onde morre)

*/

// n1 só existe dentro do metodo (9 a 11)
//function testEscopo(n1){
//
//}
//
//// Aqui n1 não existe mais (não temos acesso)
//console.log(n1);

/*
    Quando temos variaveis iguais em escopo diferentes, o acesso dentro de 
    metodos, if, for, etc... a variavel local tem preferencia
*/
let n1 = 10

function testEscopo1(n1 /* 30 */){

    for(let n1 /*0,1,2,3*/ = 0; n1 < 4; n1++){
        console.log(n1);    // 0,1,2,3
    }

    console.log(n1);        // 30
}

testEscopo1(30)

console.log(n1);    // 10
