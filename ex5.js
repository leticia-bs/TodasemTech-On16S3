//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.



function calculaMaioridade(anoNascimento) {
    let anoAtual = 2022
    let idade = anoAtual - anoNascimento
    if (idade >= 18) {
        return `A pessoa tem ${idade} anos, logo é maior de idade`
    } else {
        return `A pessoa tem ${idade} anos e é de menor`
    }
}

console.log(calculaMaioridade(1994))
console.log(calculaMaioridade(2006))