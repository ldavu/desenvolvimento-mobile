//console.log("O valor dessa variavel é: ",a)
var a = "Sou uma variavel" 

// o javascript já sabe que a variavel é "hoisting" foi criada caso usando "var"
// Hoisting também não é indicado utilizando let

const estudante = 
{
    nome: "Davi",
    instituicao: "IFC",
    notas:
    {
        geografia: 8.7,
        matematica: 5.7,

    }
}

const {nome, instituicao} = estudante

const {nome:MeuNome, instituicao:Minhainstituicao} = estudante



const {nome:nomeestudante, notas:{matematica:mat, fisica:fsc= 7.5}} = estudante

console.log(nomeestudante,mat,fsc)

