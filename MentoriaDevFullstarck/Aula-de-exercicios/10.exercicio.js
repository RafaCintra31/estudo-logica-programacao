/*
    Calculadora de Operações Matemáticas
Enunciado: Crie uma função que receba dois números e um operador (+, -, *, /) e retorne o 
resultado da operação. Use switch para realizar a operação correta. Se o operador for inválido, 
exiba uma mensagem de erro.
*/


function calculadoraMatematica(num1, num2, Operador){


    switch(Operador){
        case '+':
            console.log(num1 + num2);
            break
        case '-':
            console.log(num1 - num2);
            break
        case '*':
            console.log(num1 * num2);
            break
        case '/':
            console.log(num1 / num2);
            if(num1 == 0 || num2 == 0){
                console.log('ERRO: Divisão por 0');
            }
            break
        default:
            console.log('Não existe está operação matemática');
    }

}

calculadoraMatematica(1, 0, '/')