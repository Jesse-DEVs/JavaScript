// funções 
// podemos declarar o mesmo nome de variavel dentro e fora dos blocos
let a = "banana"
var b = "maça"
function  teste()  {
         var a = "Hello"
         var b = "World"
         return a + b
}
console.log(teste())
console.log(a)
console.log(b)
