
console.log("usando função bollean: ", Boolean(9>7))
console.log("sem usar função bollean: ",(9>7))


console.log("Boolean(0):",(0)) //false
console.log("Boolean(-0):",(-0)) //false
console.log("Boolean(1):",(1)) //true
console.log("Boolean(23):",(23)) //true


console.log(Boolean(1)) //true
console.log(Boolean(0)) //false

let isAtivo=false
console.log("isAtivo = ",isAtivo)
isAtivo = 1
console.log("!isAtivo = ",!isAtivo)// a "!" inverte o boolean da variavel
console.log("!!isAtivo = ",!!isAtivo) //uma negação anula a outra ou seja fica sim


const objeto1 = {}
objeto1.id=23 // criei um campo "id" com um valor

console.log("objeto1.id =", objeto1.id) // me da o valor que criei no objeto1 na linha 20
console.log("objeto1.nome = ", objeto1.nome)

console.log("!!objeto1.nome = ", !!objeto1.nome)

console.log("(5-5): ", !!(5-5)) // retorna false, 5-5=0 é zero e false

console.log("{}", !!{}); // retorna true
console.log("[]", !![]); // retorna true

console.log()
