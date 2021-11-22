let pessoa = {
    nome: 'João',
    sobrenome: 'Bernardino',
    idade: 90,
    social:{
        facebook:'b7web',
        instagram:{
            url:'@jocaio',
            seguidores:'1000'
        }
    }

};

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url}}}) {
    return `${nome} ${sobrenome} -> Siga em ${url}`
}

console.log(pegarNomeCompleto(pessoa))








/*
// Descontruindo objeto e renomeando 
let { nome, idade, social:{instagram:{url:instagram}}} = pessoa;

console.log( nome, idade, instagram);
*/



/*
//Descontruindo objeto dentro de objeto
let { facebook, instagram} = pessoa.social;

console.log( facebook, instagram)
*/


/*
//Descontruindo objeto 
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let instagram = pessoa.social.instagram;
let { nome, sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade)
*/




