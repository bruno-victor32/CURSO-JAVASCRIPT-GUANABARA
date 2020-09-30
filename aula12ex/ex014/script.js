function carregar(){//quando carregar a pagina html,vem para aqui 
    var msg = window.document.getElementById('msg') //variavel de nome msg recebe o objeto (window que representa a janela do navegador),o metodo (document.getElementById) retornar o elemento que possui o atributo ID que nesse caso e msg
    var img = window.document.getElementById('imagem')//aqui tbm e um objeto
    var data = new Date()//pegando a data atual
    var hora = data.getHours() //pegando a hora atual
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >=0 && hora < 12){//si a hora atual for maior ou igual a 0 e menor que 12 e bom dia
        //Bom dia!
        img.src = 'fotomanha.png' //caso for de manha vai apareçer essa imagem
        document.body.style.background = '#e2cd9f'//mudar a cor de fundo dinamicamente 
    }else if (hora >= 12 && hora <=18){
        //Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'//mudar a cor de fundo dinamicamente 
    }else{
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'//mudar a cor de fundo dinamicamente 
    }
}