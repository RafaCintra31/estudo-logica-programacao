/* 
        Estrutura IF
    IF aceita o boolean
    ELSE - É executado quando o resultado no if for false
*/

let checkcondicaoTempo = consicaoDoTempo == 'chovendo'
if(checkcondicaoTempo){
    console.log('Está chovendo, pegue um guarda-chuva - v1');
    
}

let consicaoDoTempo = 'frio'

if (consicaoDoTempo == 'chovendo') {
    console.log('Está chovendo, pegue um guarda-chuva - v2');
}else if(consicaoDoTempo == 'frio') { 
    console.log('está frio, pegue uma blusa');   
}else if(consicaoDoTempo == 'nevando'){
    console.log('Está nevando, use uma bota e luvas');
}else{
    console.log('O tempo está normal, vá tranquilo');
}

let imc = 25.5

if (imc < 18.5){
    console.log('Abaixo do peso');
}else if ( (imc >= 18.5) && (imc < 20)){
    console.log('Peso normal');
}else if ((imc > 20) && (imc < 30)){
    console.log('Exesso de peso');
}else {
    console.log('Obesidade');   
}
