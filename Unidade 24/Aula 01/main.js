// getElementById
console.log(document.getElementById("titulo").textContent);

// getElementsByClassName
let elementosPorClasse = document.getElementsByClassName("destaque");

console.log(elementosPorClasse[0].textContent);
console.log(elementosPorClasse[1].textContent);

// getElementsByTagName
let elementosPorTag = document.getElementsByTagName("p");

console.log(elementosPorTag[0].textContent);

// querySelector
console.log(document.querySelector(".destaque").textContent);

// querySelectorAll
let destaques = document.querySelectorAll(".destaque");
destaques.forEach(item => console.log(item.textContent));

// Events ou Eventos
document.getElementById("meuBotao").addEventListener("click", function() {alert("Botão clicado!");});