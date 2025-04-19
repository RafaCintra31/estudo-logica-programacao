/*
    02. Exercicio:
    Receba uma temperatura em celsius e converta para Fahrenheit.
    F = (C * 9 / 5) + 32
*/

function convercaoParaFahrenheit(temperaturaCelsius){
    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32
    return temperaturaFahrenheit
}

console.log(convercaoParaFahrenheit(45), 'ºF');