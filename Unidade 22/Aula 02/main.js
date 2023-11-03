// Tipo de dado: BOOLEANO / BOOLEAN
let estaChovendo = false;
console.log("Qual o tipo de dado da variável estaChovendo? " + typeof estaChovendo);

if (estaChovendo) {
    console.log("Está chovendo!")
} else {
    console.log("Não está chovendo.")
}

// Tipo de dado: NÚMERO / NUMBER
let numero = 25.5;
console.log(typeof numero);

// Tipo de dado: BigInt
let numeroGrande = 293903819019282010282710292102n;
console.log(typeof numeroGrande);

// Tipo de dado: NULL
let usuario = {
    nome: "João",
    sobrenome: null
}

console.log(usuario.sobrenome);

// Tipo de dado: UNDEFINED
console.log(usuario.idade);

// Tipo de dado: STRING
console.log("Olá, \nmundo!");
console.log("\"Olá, mundo!\"");

// Tipo de dado: SYMBOL
let email = Symbol();
usuario[email] = "joao@joao.com";

console.log(usuario[email]);