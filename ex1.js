// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.



function diaDaSemana(num) {
    if (num === 1) {
        return 'Domingo'
    } else if (num === 2) {
        return 'Segunda'
    } else if (num === 3) {
        return 'Terça-feira'
    } else if (num === 4) {
        return 'Quarta-feira'
    } else if (num === 5) {
        return 'Quinta-feira'
    } else if (num === 6) {
        return 'Sexta-feira'
    } else if (num === 7) {
        return 'Sábado'
    } else if (num === 8) {
        return 'Domingo'
    } else {
        return 'Escolha um número de um à sete para ter o dia da semana correspondente.'
    }

}

console.log(diaDaSemana(7))
console.log(diaDaSemana(2))
console.log(diaDaSemana(4))

