//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".




function maiorOuIgual(n1,n2) {
    if (n1 === n2) {
        return 'Os números são iguais'
    } else if (n1 > n2) {
        return `${n1} é maior que ${n2}`
    } else {
        return `${n2} é maior que ${n1}`
    } 
}

console.log(maiorOuIgual(100,2))
console.log(maiorOuIgual(5,90))