//-quebra de linha-
let texto = "ola \n bonitao\"" // "\n" quebra linha

let texto1 = "ola \n bonitdsfsdfsdfjhbsdlfhbsad" + // concatena linha com a quebra de linha
"ufhdsfadsiuhfiudshfao\"" // "+" concatena linha com a de baixo

let texto2 = ` asjdnçasjndçjdsnmfasd
aoigfjfdsçgojfdogijsdoifgjisdfg`        //a crase concatena varias linhas
//--

//-interpolação-
let firstname = "Davi"
let lastname = "Lima"

text = `ola ${firstname} ${lastname}!` //interpolação com ${<variavel>}

console.log(text)
//--

//-const não pode ter seu valor alterado -
const price1 = 4;
const price2 = 6;

// price1 = 1           //vai dar erro porque o valor da variavel price1 não pode ser alterado pois é definda como const -

//como usar const
const pi = 3.141592
//--

let x = 10;
x = 9;
//console.log(x);
//--

// - escopo - 
{// tudo o que está dentro do escopo não interfere fora do codigo apenas dentro das chaves
    let x = 10;
}
console.log(x);
//--


//-- array--
const valores = [7.0, 10,45]; // é interessante usar array para criar uma cadeia de valores em uma variavel
console.log(valores[0], valores[1])
console.log(valores)

valores[1] = 2;
console.log(valores)
//--

const tamanhos = [];
tamanhos[0] = "M"
tamanhos[1] = "a"
tamanhos[2] = "h"
tamanhos[3] = "p"
tamanhos[4] = "gg"
console.log("Tamanhos: ", tamanhos)

//-exercicio -
const lista = [];
lista[0] = {id:01, nome:"david", sobrenome:"laid"}
lista[1] = {id:02, nome:"cbum", sobrenome:"bumbstead"}
lista[2] = {id:03, nome:"jey",  sobrenome:"cuttler"}

console.log("Lista:", lista)
