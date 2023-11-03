const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Ficção"
};

console.log(`O livro de ${livro.genero}, \n${livro.titulo} foi escrito por ${livro.autor} e publicado no ano de ${livro.anoPublicacao}.`);

// Funções são Objetos
function saudacao() {
    console.log("Olá!");
}

saudacao();

// Adicionando uma propriedade à função
saudacao.idioma = "Português";
console.log("O idioma da saudação está em " + saudacao.idioma + "!");
