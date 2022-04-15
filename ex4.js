//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.




function parOuImpar(num) {
    if (num % 2 == 0) {
        return 'PAR'
    } else if (num % 2 != 0) {
        return 'ÍMPAR'
    }
}

console.log(parOuImpar(10))
console.log(parOuImpar(23))