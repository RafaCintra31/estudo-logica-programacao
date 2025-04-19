/*
    1) Dia Útil ou Final de Semana
Crie um programa que recebe um número de 1 a 7 representando os dias da semana.

Se o número for de 1 a 5, exiba "É um dia útil."
Se for 6 ou 7, exiba "É final de semana."
Se for qualquer outro número, exiba "Dia inválido."
*/

function qualeodia(dia){

    if(dia >= 1 && dia <= 5){
        console.log('Dia útil');
    }else if(dia == 6 || dia == 7){
        console.log('Final de semana');
    }else{
        console.log('Dia inválido');
    }
    console.log(dia);
    
}

qualeodia(5)

//switch (qualeodia){
//    case 1:
//        console.log('Seguda-Feira');
//        break
//    case 2:
//        console.log('terça-feira');
//        break
//    case 3:
//        console.log('Quarta-feira');
//        break
//    case 4:
//        console.log('Quinta-feira');
//        break
//    case 5:
//        console.log('Sexta-feira');
//        break
//    case 6:
//        console.log('Sábado');
//        break
//    case 7:
//        console.log('Domingo');
//        break
//    default:
//        console.log('Não é dia útil e não é final de semana');
//}