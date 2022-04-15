//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par 
//ou ímpar.
//recebe dois números, vão ser divididos e retorna se o resultado da divisão será par ou ímpar 



function verificaResultadoDivisao(n1,n2) {
    let divideN1N2 = n1 / n2 
    if (divideN1N2 % 2 == 0) {
        return `O resultado da divisão de ${n1} por ${n2} é par (${divideN1N2}).`
    } else {
        return `O resultado da divisão de ${n1} por ${n2} é ímpar (${divideN1N2}).`
    }
}

console.log(verificaResultadoDivisao(100,50))
console.log(verificaResultadoDivisao(700,100))
