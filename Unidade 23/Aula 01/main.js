let temDesconto = false;
let freteGratis = true;

console.log(`Tem desconto: ${temDesconto} \nTem frete grátis: ${freteGratis}`);

// Operador de igualdade (==) e igualdade estrita (===)
console.log("5" == 5);
console.log("5" === 5);

console.log(Number("5") === 5); // Aplicando casting

// Operador e (&&)
if (temDesconto && freteGratis) {
    console.log(`Vou comprar!`);
} else {
    console.log("Vou esperar!");
};

// Operador ou (||)
if (temDesconto || freteGratis) {
    console.log(`Acho que vou comprar!`);
} else {
    console.log("Não está valendo a pena");
};

// Operador não (!)
if (!freteGratis) {
    console.log("Vou ter que pagar o frete...");
} else {
    console.log("Frete grátis, que bom!");
}

// Exemplo final
let vontadeComprar = false;

if (temDesconto && freteGratis && vontadeComprar) {
    console.log(`Vou comprar com certeza!`);
} else if (temDesconto || freteGratis && vontadeComprar) {
    console.log("Hm... Acho que vou comprar.");
} else {
    console.log("Deixa pra lá.");
};