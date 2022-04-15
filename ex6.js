//crie um algoritmo que converte dias em horas, quando recebe um número de dias.
//recebe dias
//converte os dias em horas = dias * 24h
// pois 1 dia tem 24 horas 



function diasHoras(ndias) {
    let conversaoDiasEmHoras = ndias * 24
    return `${ndias} dia(s) possuem ${conversaoDiasEmHoras} horas.`
}

console.log(diasHoras(7))
console.log(diasHoras(30))
console.log(diasHoras(1))