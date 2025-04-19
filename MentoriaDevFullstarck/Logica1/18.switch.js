/*
    SITCH (Mais utilizado quando trabalhamos com o tipo ENUM)
    ENUM -> Vamos falar disso no modulo de bachend
*/

const category = 'ALIMENTOS'

switch (category){
    case 'ELETRONIC':
        console.log('C1 - Faz algo quando:', category);
        break
    case 'GROCERIES':
        console.log('C2 - Faz algo quando:', category);
        break
    case 'ALIMENTOS':
        console.log('C3 - Faz algo quando:', category);
        break
    default:
        console.log('Opção invalida');
        
}