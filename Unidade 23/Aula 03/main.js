// Criando e chamando funções
function dizerOla() { // Esta função é um procedure!
    console.log(`Olá, dev!`)
}

dizerOla();

// Utilizando argumentos
function cumprimentar(nome, sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}!`)
}

cumprimentar("Thiago", "Bisewski");

// Utilizando Return
function dobrar(numero) {
    return numero * 2;
}

const resultado = dobrar(4);
console.log(resultado);

// High Order Function / Funções de Ordem Superior
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobrados);

// Arrow Functions 
function somar(a, b) {
    return a + b;
};

const somarArrow = (a, b) => a + b;

const triplicar = numeros.map(numero => numero * 3);
console.log(triplicar);