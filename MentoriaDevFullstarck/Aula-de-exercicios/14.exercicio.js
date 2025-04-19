/*
    Múltiplas Tabuadas em JavaScript
Crie um programa em JavaScript que:
Solicite ao usuário que digite um número inteiro positivo n.
Em seguida, exiba no console todas as tabuadas de multiplicação de 1 até n.
Cada tabuada deve conter os resultados da multiplicação de seu número por valores de 0 até 10.
Formate a saída de forma que cada tabuada fique separada e identificada com o título "Tabuada do X".
Digite o número de tabuadas: 3
------------------
Tabuada do 1
------------------
1 x 0 = 0
1 x 1 = 1
...
1 x 10 = 10
------------------
Tabuada do 2
------------------
2 x 0 = 0
2 x 1 = 2
...
2 x 10 = 20
------------------
Tabuada do 3
------------------
3 x 0 = 0
...
3 x 10 = 30
*/

function multiplasTubuadas(numfatorUsuario){

    let resultado

    for(let numfator2 = 0; numfator2 <= 10; numfator2++){
        for(let numfator1 = 1; numfator1 <= numfatorUsuario; numfator1++){
            resultado = numfator1 * numfator2
            console.log(resultado);
        }

    }
}

let valorDoFator = parseInt(process.argv[2])
multiplasTubuadas(valorDoFator)

//let numfatorUsuario = parseInt(process.argv[2]) 
//let resultado
//
//for(let numfator2 = 0; numfator2 <= 10; numfator2++){
//    for(let numfator1 = 1; numfator1 <= numfatorUsuario; numfator1++){
//        resultado = numfator1 * numfator2
//        console.log(resultado);
//    }
//
//}
//console.log(resultado);