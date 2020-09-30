var agora = new Date()
var diaSem = agora.getDay()
/*
Para o javascript Domingo e igual a 0
Para o javascript Segunda e igual a 1
Para o javascript Terça e igual a 2
Para o javascript Quarta e igual a 3
Para o javascript Quinta e igual a 4
Para o javascript Sexta e igual a 5
Para o javascript Sábado e igual a 6
*/
console.log(diaSem)

switch(diaSem){
    case 0:
    console.log('Domingo')
    break
    case 1:
    console.log('Segunda')
    break
    case 2:
    console.log('Terça')
    break
    case 3:
    console.log('Quarta')
    break
    case 4:
    console.log('Quinta')
    break
    case 5:
    console.log('Sexta')
    break
    case 6:
    console.log('Sábado')
    break
    default:
    console.log ('[ERRO] Dia Inválido')
    break
}