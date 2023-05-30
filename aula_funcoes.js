function somar(x,y) // passo dois parâmetros para usar dentro da minha função
{
    console.log(x+y)
}
somar(5,5)// passo o valor dos dois parâmetros x e y


function somar1(x=0, y=0) // posso passar parâmetros padroes x=0,y=0
{   
    console.log(x+y)
    return (x+y)
}
somar1(3)


const imprimirsubtracao = function(x,y) // coloco a função numa variavel sendo possivel executar a função pelo nome da variavel
{
    console.log(x - y)
}
imprimirsubtracao(7,6)


