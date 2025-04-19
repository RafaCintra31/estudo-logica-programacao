/*
    Acesso ao Sistema
Crie um programa que recebe um nome de usuário e uma senha.

Se o usuário for "admin" e a senha "1234", exiba "Acesso permitido."
Caso contrário, exiba "Acesso negado."
Verificar ambas as condições ao mesmo tempo.
*/

// V1
function acessoAoSistema(nome, senha){

    if(nome == 'Admin' && senha == 1234){
        console.log('Acesso permitido');
    }else {
        console.log('Acesso negado');
    }

}

acessoAoSistema('Admin', 1234)

// V2
function acessoAoSistema1(nome, senha){

    return(nome == 'Admin' && senha == 1234) ? 'Acesso permitido' : 'Acesso negado'

}

console.log(acessoAoSistema1('Admin', 1234));
