const filmes = ["Titanic", "Vingadores", "Matrix"];
console.log(filmes);
console.log(filmes[1]);

// Método forEach
const arr = ["uva", "banana", "abacaxi", "pêra"];

arr.forEach(function(item, index) {
    console.log(index, item);
});

// Metódo map
listaCompras = arr.map(function() {
    return "Comprado!"
});
console.log(listaCompras);

listaCompras2 = arr.map(function(item) {
    if (item === 'abacaxi') {
        return "Comprado!";
    } 
    return item;
});
console.log(listaCompras2);