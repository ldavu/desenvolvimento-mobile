<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" width="200" height="200">

# aula-1.js
## aula 1 de javascript ifc

javascript é uma linguagem cLite

- javascript domina o mercado
- até 2008 a linguagem era usada para manipular html
- node.js é um interpretador javascript q faz a linguagem interpretar no backend


Rodar o javascript
- abrir um novo terminal
- digitar `dir` para acessar seu diretorio
- após achar o diretorio digitar `node <diretorio arquivo.js>`
- logo em seguida o script será executado


1. código
- `console.log('5+5', 5+5)`
- o console.log irá printar a string '5+5' e depois da virgula irá fazer o cálculo dessa operação

## aula 2

tipagem do javascript

- `const` o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, este não pode ser alterado.
- `let` o comportamento dele é flexivel pode ser alterada no meio do código
- `var` atribui automaticamente o valor a variavel
- a função `typeof` ela retorna o tipo da variavel ( string, number, boleano)
- Exemplo de `typeof`:
```
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

## Aula 3

Boolean

- A função `!` ela retorna um valor blooleano inverso da variavel
 Exemplo: 
```
      console.log(1) o número 1 é true pois é positivo
      console.log(0) o número 0 é false pois é um número que não existe
       
      let isAtivo=false
      console.log("isAtivo = ",isAtivo)
      isAtivo = 1
      console.log("!isAtivo = ",!isAtivo)// a "!" inverte o boolean da variavel
      console.log("!!isAtivo = ",!!isAtivo) //uma negação anula a outra ou seja fica sim
```
> Saída:
```
true
false
isAtivo =  false
!isAtivo =  false
!!isAtivo =  true
```
