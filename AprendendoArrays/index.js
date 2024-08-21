const people = [{
    nome: "Gabriel",
    idade: 18
},
{
    nome: 'Melrick',
    idade: 17
},
{
    nome: 'Fabricio',
    idade: 17
}];


const idadePessoa = people.filter(pessoa =>(pessoa.idade ==18 ))
const boasVindas = idadePessoa.map( p => (p.nome + ", Bem vindo"))

console.log(boasVindas)