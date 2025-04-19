/*
        Crie um algoritmo para receber um documento formatado. 
  - Utilizando Regex, exibe em tela se o documento é RG, CPF ou CNPJ.
  - formato RG: 11.111.111-1
  - formato CPF: 111.111.111-11
  - formato CNPJ: 11.111.111/1111-11
*/

// V1
function qualoDocumento(numDocumento){

    const regexCPF = /^(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})$/        
    const regexRG = /^(\d{2}).?(\d{3}).?(\d{3})-?(\d{1})$/         
    const regexCNPJ = /^(\d{2}).(\d{3}).(\d{3})[/](\d{4})-(\d{2})$/

    if(regexCPF.test(numDocumento)){
        console.log('Este documento é CPF');
    }else if(regexRG.test(numDocumento)){
        console.log('Este documento é RG');
    }else if(regexCNPJ.test(numDocumento)){
        console.log('Este documento é CNPJ');
    }else{
        console.log('Este documento não existe');
    }
}

qualoDocumento('51.197.738-5')

// V2
function whatDocuments(numeroDoc){
    const regexCPF = /^(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})$/        
    const regexRG = /^(\d{2}).?(\d{3}).?(\d{3})-?(\d{1})$/         
    const regexCNPJ = /^(\d{2}).(\d{3}).(\d{3})[/](\d{4})-(\d{2})$/

    switch (true){
        case regexCPF.test(numeroDoc):
            console.log('Este documento é um CPF');
            break
        case regexRG.test(numeroDoc):
            console.log('Este documento é um RG');
            break
        case regexCNPJ.test(numeroDoc):
            console.log('Este documento é um CNPJ');
            break
        default:
        console.log('Este documento não existe');
    }
}

whatDocuments('515.197.738-54')

//V3
function qualDocumento(numDocumento){

    switch (true){
        case /^(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})$/.test(numDocumento):
            console.log('Este documento é um CPF');
            break
        case /^(\d{2}).?(\d{3}).?(\d{3})-?(\d{1})$/.test(numDocumento):
            console.log('Este documento é um RG');
            break
        case /^(\d{2}).(\d{3}).(\d{3})[/](\d{4})-(\d{2})$/.test(numDocumento):
            console.log('Este documento é um CNPJ');
            break
        default:
        console.log('Este documento não existe');
    }
}

qualDocumento('515.197.738-54')