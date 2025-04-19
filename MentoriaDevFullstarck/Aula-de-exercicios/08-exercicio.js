/*
    4) Conversão de Peso em Outros Planetas

Em diferentes planetas do Sistema Solar, a gravidade varia em relação à da Terra. Isso significa que o peso de um 
objeto muda dependendo do planeta onde ele está.

Crie uma função chamada converterPeso(peso, planeta) que recebe dois parâmetros:

peso (um número representando o peso em Newtons na Terra).
planeta (uma string representando o nome de um planeta).

A função deve calcular e exibir o peso correspondente no planeta informado, considerando as seguintes 
gravidades relativas à Terra:
Planeta        Gravidade Relativa à Terra
Mercúrio      37%
Vênus            88%
Marte           38%
Júpiter         264%
Saturno        115%
Urano            117%

exemplo para calculo:
mercurio = (peso / 100)* 37

Se o nome do planeta informado não estiver na lista, a função deve exibir "Planeta não identificado".

Exemplo de Entrada e Saída:
converterPeso(2722, "Mercúrio")

Saída:
No planeta mercúrio o peso é 1007.14 
*/

function converterPeso (peso, planeta){

        switch (planeta){
            case 'mercúrio':
                console.log((peso/100)*37);
                break
            case 'vênus':
                console.log((peso/100)*38);
                break
            case 'marte':
                console.log((peso/100)*88);
                break
            case 'júpiter':
                console.log((peso/100)*264);
                break
            case 'saturno':
                console.log((peso/100)*115);
                break
            case 'urano':
                console.log((peso/100)*117);
                break
            default:
                console.log('Planeta não identificado');       
        }
}

converterPeso(150, 'marte')