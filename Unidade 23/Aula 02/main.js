// For Loop
const produtos = ["Camiseta", "Tênis", "Calça", "Boné"];

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

// While Loop
let numero = 0;

while (numero < 5) {
    console.log("Número:", numero);
    numero++
}

// Exemplo While - Exibindo Estoque de Produtos
const estoque = [5, 3, 4, 2]; // Adicionando estoque para a array de produtos da linha 2

let i = 0;

while (i < produtos.length) {
    console.log(`${produtos[i]} - ${estoque[i]} unidades`);
    i++;
}

// Break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sai do loop quando i é 5
    }
    console.log(i);
}