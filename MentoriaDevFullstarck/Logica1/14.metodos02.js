/* 
    METODOS
    - RETURN -> Condição de parada (interrompe a execução)
*/

function test(){
    let n = 10
    console.log(n);
    return n
    console.log('Fim fo metodo');
}

function test2(){
    let n = 20
    console.log(n);
    return
    console.log('Fim do motodo');
}


test()
test2()

/*
DEFININDO UMA FUNÇÃO SIMPLES:
    Aqui, criamos uma função chamada SOMAR que pega dois núemros (num1 e num2) e
    retorna a soma deles. A palavra RETURN é usada para dar o resultado da função.
    function somar(num1, num2){
        return num1 + num2;
    }

CHAMANDO A FUNÇÃO:
    Aqui, a função SOMAR é chamada com 5 e 3 como argumentos, e o resultado (8) é 
    aguardado na variavel RESULTADO
    let resultado = somar (5 ,3);
    console.log(resultado);
*/

/*
PARÂMETROS vs. ARGUMENTOS:
    Os parâmetros são como placeholders que definem que tipo de valores a função
    espera receber.
    Já os argumentos são os valores reais passados para a função.

EXEMPLO DE PARÂMETRO
    Aqui, NOME é um parâmetro e 'ERICK' é o argumento. A função SAUDAR vai pegar 
    esse argumento e usar no lugar do parâmetro
    function saudar(nome){
        console.log('Ola, ' - nome);
    }
    saudar('Erick');
*/