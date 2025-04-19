/*
    BREAK, CONTINUE, RETURN e LABEL
    - Formas de interromper a execução de um fluxo (codigo)
*/

// EXEMPLO BREAK

let inputPresent = false
const input = 'brinquedos'
const categories = ['notebook', 'moveis', 'livros', 'brinquedos', 'informatica', 'papelaria']

for(let i = 0; i < categories.length; i++){
    const itemDaLista = categories[i]

    if(input == itemDaLista){
        inputPresent = true
        break
    }

    console.log(itemDaLista);
}

console.log();
console.log('O input está na lista', inputPresent);

// EXEMPLO CONTINUE (Pula a execução atual)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Exibindo  somente números pares com continue

// PAR
for(let i = 0; i < numeros.length; i++){
    const item = numeros[i]

    if(!(item % 2 == 0)){           // Com o ! ele inverte a operação ficando par
        continue
    }
    console.log(item);
    
}

// IMPAR
for(let i = 0; i < numeros.length; i++){
    const item = numeros[i]

    if((item % 2 == 0)){           // Sem o ! ele  não inverte a operação ficando impar
        continue
    }
    console.log(item);
}

// LABEL (Podemos nomear cada FOR, assim podemos usar isso para determinar qual FOR vamos parar)
fora:
for(let i = 0; i < numeros.length; i++){
    dentro:
    for(let j = 0; j < numeros.length; j++){
        break fora
    }
}