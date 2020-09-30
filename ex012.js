var agora = new Date() //para pegar a hora atual do sistema
var hora = agora.getHours()//Para conseguir pegar a hora atual do sistema que está rodando seu script,si seu script estiver rodando no cliente vai ser a hora do cliente,si estiver usando o node.js para rodar no servidor e a hora do servidor

console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 6 &&  hora <= 12) {
    console.log(`Bom dia`)
} else if (hora >= 13 && hora <= 17) {
    console.log("Boa Tarde")
} else {
    console.log("Boa Noite")
}