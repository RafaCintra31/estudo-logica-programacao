/*
    METODOS

    Trechos de código executáveis
    vantagens: reaproveitamento de código

*/

// Declarando um metodo
function somar(){
    console.log(10 + 50);
    
}

//Call method (invocando, executando) um metodo
somar()

/* 
    O que procisamos para somar dois números? 
    resposta: dos 2 números 

    Sempre que precisamos de informações para executar um metodo, 
    podemos passar como parâmetro dentro da funcion
*/
function somarDoisNumeros(n1, n2){      // Metodo com parâmetro (declatação dos parâmetros (variaveis locais))
    console.log(n1 + n2);
    
}

somarDoisNumeros(30, 90)        // Declaração dos parâmetros (variaveis)

// Criando um metodo com retorno
function validarCPF(cpf){

    // Fazendo um if else em uma única linha (Térnario)
    // V3                       Quando true    Quando false
    return(cpf.length != 11) ? 'CPF Valido' : 'CPF Invalido'    // -> Operador ternário

    // V2
    // return (cpf.length != 11)

    // V1
    //    if(cpf.length != 11){
    //    return false
    //}else{
    //    return true
    //}
}

// cpfEstaValido -> Recebendo o retorno do metodo
// validarCPF -> Invocnado uma função com retorno e tranferindo esse valor para variavel
let cpfEstaValido = validarCPF('123456278912')

if(cpfEstaValido){
    console.log('Autoriza a criação da conta bancaria');
}else {
    console.log('Abertura da conta negada');
}

