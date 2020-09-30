function verificar() {
    var data = new Date()//pegando a data atual
    var ano = data.getFullYear()//pegando o ano atual getFullYear ele vai mostrar os 4 digitos do ano e não vai pegar somente 20
    var fano = document.getElementById('txtano')//fano significa formulario ano,vem do que o ano que o usuario escreveu,pode ser window.document mas queremos simplificar por isso colocamos document.  ,O txtano e um id da minha caixa de texto do nascimento
    var res = document.querySelector('div#res')//tanto faz o de cima ou esse, div#res significa que eu estou pegando a div de id res
    if (fano.value.length == 0 || Number(fano.value) > ano) {//Si o cara n digitou o ano ou então digitou um ano superior a o ano atual vai dá erro, o NUMBER E A CONVERSÃO PARA NÚMERO
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//vou pegar o sexo do formulario,
        var idade = ano - Number(fano.value)//Calcular a idade,o valor do ano atual menos o valor do fano digitado
        var gênero = ''//variavel genero que começa vazia
        var img = document.createElement('img')//Colocar a foto embaixo da div criando dinamicamente uma imagem.Nessa linha está dizendo que o meu elemento vai ser um img,vamos carregar a imagem conforme sexo e idade
        img.setAttribute('id','foto') // estou criando um id para img com o nome foto
        if(fsex[0].checked){ //si fsex na posição 0 que e o masculino ponto checked ou seja o que estiver checked (checado ou marcado) for fsex 0 sinal que e masculino 
            gênero = 'Homem'
            if(idade >=0 && idade <= 10){ //Si a idade estiver maior ou igual a 0 e menor e igual a 10 ele e uma criança
                //criança
                img.setAttribute('src','foto-bebe-m.png') //src e o source da minha idade
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if (idade <50){
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
            }else if(fsex[1].checked){//si fsex na posição 1 que e o feminino ponto checked ou seja o que estiver checked (checado ou marcado) for fsex 1 sinal que e feminino 
                gênero = 'Mulher'
                if(idade >=0 && idade < 10){
                    //criança
                    img.setAttribute('src','foto-bebe-f.png')
                }else if (idade < 21){
                    //Jovem
                    img.setAttribute('src','foto-jovem-f.png')
                }else if (idade <50){
                    //Adulto
                    img.setAttribute('src','foto-adulto-f.png')
                }else{
                    //idoso
                    img.setAttribute('src','foto-idoso-f.png')
                }
            }
            res.style.textAlign = 'center' //centralizando o texto de baixo(resultado) usando javascript
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)//adicionar um elemento img,para colocar um conteudo em baixo da ultima frase que e o comando de cima eu faço appendChild ou seja eu vou adicionar um elemento img
    }
}