
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" width="200" height="200">


# aula-1.js
## aula 1 de javascript ifc

javascript é uma linguagem cLite

- javascript domina o mercado
- até 2008 a linguagem era usada para manipular html
- node.js é um interpretador javascript q faz a linguagem interpretar no backend


1. Rodar o javascript
     - abrir um novo terminal
     - digitar `dir` para acessar seu diretorio
     - após achar o diretorio digitar `node <diretorio arquivo.js>`
     - logo em seguida o script será executado


2. código
     - `console.log('5+5', 5+5)`
     - o console.log irá printar a string '5+5' e depois da virgula irá fazer o cálculo dessa operação

## :bookmark:	Tipagem Javascript

tipagem do javascript

- `const` o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, este não pode ser alterado.
- `let` o comportamento dele é flexivel pode ser alterada no meio do código
- `var` atribui automaticamente o valor a variavel

#### :pencil: Typeof
- a função `typeof` ela retorna o tipo da variavel ( string, number, boleano)
- Exemplo de `typeof`:
```javascript
let incognita = 10
console.log(typeof incognita)
incognita = 'ola'
console.log(typeof incognita)
```
> Saída:
```
number
string
```

## :bookmark:	 Boolean

Boolean
- é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: `true` e `false`

#### :pencil: Operação NOT !! => !
- O operador de negação `!` é um operando unário, isto é, opera sobre apenas um operando. Ele nega, inverte o valor lógico do operando. 
- A função `!` ela retorna um valor blooleano inverso da variavel
- A função `!!` uma negação anula a outra ou seja fica sim
- Para fazer o uso dela você deve usar `!!<variavel>` ou `!<variavel>`
- Ela deve retornar valores do tipo `true` ou `false`
 Exemplo: 
```javascript
console.log(1) // o número 1 é true pois é positivo
console.log(0) // o número 0 é false pois é um número que não existe
       
let isAtivo=false
console.log("isAtivo = ",isAtivo)
isAtivo = 1
console.log("!isAtivo = ",!isAtivo)// a "!" inverte o boolean da variavel
console.log("!!isAtivo = ",!!isAtivo) //uma negação anula a outra ou seja fica sim
```
> Saída:
```javascript
true
false
isAtivo =  false
!isAtivo =  false
!!isAtivo =  true
```

## :bookmark:	 Aula 4
 :arrow_right: interpolação, quebra linha, const, escopo, array...

#### :pencil: Interpolação
- A interpolação deve ser feito usando crase ``` ` ``` no inicio e no final da string e usando `$` antes das `{}`
- Na prática ficaria assim :arrow_heading_down: :
```js
let firstname = "Davi"
let lastname = "Lima"

text = `ola ${firstname} ${lastname}!` //interpolação com ${<variavel>}
```
> saída:
```
ola Davi Lima!
```

#### :pencil: Quebra de linha
- Para fazer uma quebra de linha ou escrever em varias linhas tem duas formas, usar crase ``` ` ```  no inicio e no final da string
>por exemplo assim :arrow_heading_down: :
```js
let texto2 = `Christopher Adam Bumstead é um
fisiculturista profissional canadense da IFBB.`
```
- Ou pode usar `\n`
```js
let texto1 = "Christopher Adam Bumstead é um \n fisiculturista profissional canadense da IFBB."
//                                            ^	
```
- Caso a linha de um código fique muito grande e você precise quebrar em mais de uma linha para ficar legivel, pode-se usar `+` no final da string para concatenar duas strings
>por exemplo assim :arrow_heading_down: :
```js
let texto3 = "Christopher Adam Bumstead é um" +
"fisiculturista profissional canadense da IFBB."
```

#### :pencil: Escopo
- As variaveis criadas dentro do escopo são proprias para ele mesmo por isso são chamadas variaveis locais
- O escopo para criar usa entre chaves `{}`
```js
let nome = "Cbum" // variavel global
{
    let nome = "David Laid"; // variavel local
    console.log(nome)
}
console.log(nome)
```
>Saída:
```
David Laid
Cbum
```

#### :pencil: Array/Lista
- Array é usado para colocar uma cadeia de valores ou seja ele pode receber varios valores dentro de uma única variavel
- Para criar uma array basta usar `[]`
> Segue um exemplo :arrow_heading_down: :
```js
const valores = [7.0, 10, 45, Davi"]
```
- Para acessar os valores dentro de uma lista colocamos `<variavel array>[n° do elemento>]`
> Segue um exemplo :arrow_heading_down: :
```js
const valores = [7.0, 10, 45, "Davi"]
console.log(valores[0], valores[3])
console.log(valores)
```
> Saída:
```
7 Davi
[ 7, 10, 45, 'Davi' ]
```
## :bookmark:	 Aula 5
:arrow_right: sitaxe de funções, função simples e encurtada

#### :pencil: sintaxe Funções
- Função simples para verificar nota de um aluno
- Para criar uma função usa-se `function <nome>(<Parâmetros>)`

<br>

 - Segue exemplo de como criar as diversas funções:

> Função dentro da variável :arrow_heading_down: :
```js
const imprimirsubtracao = function(x,y) // coloco a função numa variavel sendo possivel executar a função pelo nome da variavel
{
    console.log(x - y)
}
imprimirsubtracao(7,6)
```
> Função normal :arrow_heading_down: :
```js
function verificarnota1(nota){
    if( nota <= 6)
    {
        console.log("reprovado")
    }
    else{
        console.log("aprovado")
    }
}
verificarnota1(7)
```
> Função encurtada ou função arrow :arrow_heading_down: :
```js
const verificarnota = nota => console.log(nota <= 6? 'aluno reprovado':'aluno aprovado')
verificarnota(7)
```
<br>
 
 - Pode-se passar parâmetros com valores padrões ou valores `default`

- Basta passar os valores que quer que sejam padrões depois do parâmetro da função `x=0,y=0` 

>exemplo de como colocar valores padrões para parâmetros :arrow_heading_down:
```js
function somar1(x=0, y=0) //parâmetros padroes x=0,y=0
{   
    console.log(x+y)
    return (x+y)
}
somar1(3)
```
