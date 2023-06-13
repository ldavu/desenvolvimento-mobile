const a = [10];
//console.log(a[0]);
const listaFrutas = ["uva", "maça", "melancia", "pêra", "tomate"];

const [fruta1, , , fruta2] = listaFrutas;
//ou seja se estiver entre as vírgulas pula o item da lista/array que estava entre aquelas virgulas da ordem

//console.log(fruta1, fruta2);

const matriz = [
  [1, 2, 3],
  [4, 5, 6], //array dentro da array
  [7, 8, 9],
];

const [tal1, , tal2] = matriz;

// busca um objeto dentro da array dentro da array
/////console.log(matriz[2][2]);
// coloca a variavel da array dps coloca o índice dele e caso haja mais de um item dentro dela pode colocar mais uma [] e inserir o índice dentro da array

//forma mais dificil de fazer
const [, , [, , matriz34]] = matriz;

console.log(matriz34);

const pessoas = [
  { id: 1, nome: "David_Laid", nota: 9.0 },
  { id: 2, nome: "cris bumbstead", nota: 4.0 },
  { id: 3, nome: "cbum", nota: 3.0 },
];

const [{ nome, nota }] = pessoas;

console.log(nome, nota);
//operador "..." mostra o resto de uma aray
//a virgula pula o indice da array
const [, ...resto] = pessoas;
console.log(resto);
