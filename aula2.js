/*
console.log('1'+1)
console.log('oi')
console.log(7.1+1)
console.log('1'+1) //concatenar juntar uma string e o sinal de '+' le concatena
*/

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
