//variavel composta
let num = [5,8,2,9,3]
num.push(1)//Coloque o 1 na ultima posição
//num.sort()//vai pegar todos os valores e colocar em ordem crescente
num[6] = 10//estou dizendo assim para o javascript coloque o valor 10 na posição 6
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)

console.log(`O vetor na posição 0 tem valor ${num[0]}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}