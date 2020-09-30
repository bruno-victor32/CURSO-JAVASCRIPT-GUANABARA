//5 fatoravel = 5! = 5 x 4 x 3 x 3 x 1 = 120

function fatorial(n) { 
    let fat = 1 //variavel fatoria iniciando valendo 1
    for(let c = n; c > 1;c--){// contador vai ter o valor de n,si o contador for maior que 1 eu diminuo 1
        fat *= c//fatorial vezes c
    } 
    return fat
}

console.log(fatorial(5))