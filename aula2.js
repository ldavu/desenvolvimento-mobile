
console.log('1'+1)
console.log('oi')
console.log(7.1+1)
console.log('1'+1) //concatenar juntar uma string e o sinal de '+' le concatena


// const o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, este não pode ser alterado.

const numero = 1%2;
if(numero==0)
{
    console.log(numero + 'é par')
}
else
{
    console.log(numero + 'é impar')
}


//typeof ele vai mostrar qual é o tipo da variavel (string, bool, number, char)
let incognita = 10 // let permite que a variavel possa mudar durante o código
console.log(typeof incognita) // a incognita agora é uma 'number'
incognita = 'ola' // mudando o valor da variavel incognita pois ela é flexivel
console.log(typeof incognita) // agora a incognita é uma 'string'

//se tiver com o +, ele vai concatenar e não somar
console.log(5 + 5 +"5" + 5) //ele vai concatenar o 5 no meio da expressão
console.log('ifc é:'+1+9) // 19
console.log(1+9+', é ifc')
//booleans
let x = true;
let y = false;


//object:
const person =
{                       // em javascript se estiver em chave é objeto
    firstName:"Davi",
    lastName:"Lima"
};


//array object:
const frutas =
["manga","morango","melao"]



let x = "100";
let y = "10"; // aqui basicamente o javascript ele vai entender que apenas po´ssui numeros então ele vai fazer o calculo nessa string
let z = x / y;
console.log(z)
console.log('"o resultado de 100/10 é:"', z)
