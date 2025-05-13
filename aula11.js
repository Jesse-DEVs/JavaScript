// Aula if else

let num1 = 9

if(num1>10){
    console.log("Numero maior que 10")
    
}
else{
    console.log("Numero menor ou igual a 10")
}
console.log("fim do programa")


let termo
let idade
idade = 19
termo=false

if(idade>=18){
    console.log("Acesso Liberado, Voce é maior de idade")
}
else if(idade>=16 && termo==true){
    console.log("Acesso Liberado, com termo de responsabilidae")
}
else if(idade>=16 && termo==false){
    console.log("Acesso Recusado, pois não tem o termo de responsabilidae")
}    
else{
    console.log("Acesso Recusado, Voce não tem idade suaficiente")
}



