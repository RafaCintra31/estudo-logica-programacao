/*
    Financiamento de carros

 Você trabalha em uma empresa de financiamento de carros. Para aprovar um financiamento, 
 o valor da parcela não pode comprometer mais que 30% do salário do cliente. Construa um sistema que 
 recebe o valor da parcela do financiamento de um carro e o salário do cliente que deseja 
 comprar o carro. Com base na regra acima, o sistema deve informar se o financiamento foi aprovado ou não.
 */

// V1
function financiamento(salarioDoCliente, valorParcela){

   let salario30percentual = (salarioDoCliente/100)*30

   if(valorParcela > salario30percentual){
       console.log('A compra do carro foi negada');
   }else{
       console.log('A compra do carro foi aprovada');
       
   }
}

financiamento(1000, 350)

// V2
let salarioDoCliente = 1000
let valorDaParcela = 300
let percentual30DoSalario = (salarioDoCliente/100)*30

if(valorDaParcela > percentual30DoSalario){
   console.log('A compra do carro não foi aprovada');
}else{
   console.log('A compra do carro foi aprovada');
}
