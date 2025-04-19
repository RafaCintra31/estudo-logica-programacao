/*
    FUNCTTION 
    - Formas de declaração
*/

// V1
function sum(n1, n2){
    return n1 + n2
}

// V2 - Armazena a função em uma variavel
const sum2 = function(n1, n2){
    return n1 + n2
}

// V3 - Arrow function
const sum3 = (n1, n2) => {
    return n1 + n2
}

const sum4 = (n1, n2) => n1 + n2