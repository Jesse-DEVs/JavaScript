

const nome = "jesse Miguel Ramos"
let idade = 22

console.log("meu nome é:",nome,"e tenho",idade,"anos.")

// O que acontece se declararmos algo usando let ou const dentro de um bloco? Isso criará uma variável ou constante local. Ela será visível apenas dentro do bloco em que foi declarada e em blocos que podem ser aninhados nele.

let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

