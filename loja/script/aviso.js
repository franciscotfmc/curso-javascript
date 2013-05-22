var textoInicial = "Esconder aviso";
var aNova = document.createElement("a");
aNova.textContent = textoInicial;
aNova.setAttribute("href", "#");

aNova.addEventListener("click", function(event){
  if(this.textContent == textoInicial) {
    this.textContent = "Mostrar aviso";
    this.nextElementSibling.style.display = "none";
  } else {
    this.textContent = textoInicial;
    this.nextElementSibling.style.display = "block";
  }

  event.preventDefault();
});

var divPrincipal = document.getElementById("principal");
divPrincipal.insertBefore(aNova, divPrincipal.firstElementChild);