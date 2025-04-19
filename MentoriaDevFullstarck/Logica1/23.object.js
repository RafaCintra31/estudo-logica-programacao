/*
    OBJECT
*/

// Seria um agrupamento de variaveis
const person = {
    age: 18,
    name: 'Maria',
    address: {
        street: 'Rua Voluntarios da Patria'
    }
}

// Para acessar os campos de um objeto
console.log(person.age);
console.log(person['name']);
console.log(person.address.street);
console.log(person['address']['street']);

// Adicionar propriedade ao objeto
person['lastName'] = 'Socorro'

// Remover um campo
delete person.lastName

// Percorrer os campos de um objeto
for(let key in person){
    console.log(key, person[key]);
}