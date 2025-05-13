// Operador spread - ...

let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
let n3 = [...n1,...n2]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("Tipo de n3: "+typeof(n3))
// exemplo spread Expande os elementos de um array ou objeto. É útil para copiar, mesclar ou passar elementos como argumentos.

const jogador1 ={nome:"jesse",energia:100,vidas:3,força:99}
const jogador2 ={nome:"roberto",energia:90,vidas:2,velocidade:87}
const jogador3 ={...jogador1,...jogador2}

console.log(jogador3)


// as duas são funções, ciradas de jeitos diferentes
function soma(v1,v2,v3){
    return v1+v2+v3
}
var valores=[1,5,4]
console.log(soma(...valores))

//ou 

const soma1=(v1,v2,v3)=>{
    return v1+v2+v3
}
valores=[1,5,4]
console.log(soma(...valores))

// ele tbm ajuda as espalhar elementos HTML que podem ser trabalahdos com funções especificas que so podem ser usadas em array