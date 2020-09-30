var vel = 60.5
console.log(`A velocidade do seu carro é ${vel}km/h`)
if (vel > 60) {//Condição simples porque não else (senão)
    console.log(`Você ultrapassou a velocidade permitida,MULTADO!`)
}
console.log(`Dirija sempre usando o cinto de segurança`)

/*para escrever na tela no node.js não funciona o document.write a agente
tem que fazer o console.log*/
/*Vamos imagina que eu tenho uma variavel chamada de velocidade vou chamar de vel que vai ser a velocidade
de uma carro,por exemplo meu carro está andando a 60.5km por hora*/
/*Si eu botar um escreva na tela vou colocar com crase para eu conseguir interpolar vou colocar a "velocidade de seu carro e" vem km/h*/
/*Aqui eu vou colocar outro console.log(`Dirija sempre usando cinto de segurança`)*/
/*Percebe que esse 3 comando digitados ele são comando sequenciais,não existe  a possibilidade de eu executar
só o primeiro comando e o terceiro comando*/