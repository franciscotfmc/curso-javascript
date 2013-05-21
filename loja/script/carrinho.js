var carrinho = document.getElementById("carrinho");
var inputs = carrinho.getElementsByTagName("input");

for(var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function(event) {
    var li = this.parentNode.parentNode.parentNode;
    var spans = li.getElementsByTagName("span");
    
    var spanValorUnitario = spans[0];
    var spanValorTotal = spans[1];
    
    var quantidade = this.value;
    var valorUnitario = realParaNumber(spanValorUnitario.textContent);
    var novoTotal = quantidade * valorUnitario;

    spanValorTotal.textContent = numberParaReal(novoTotal);
  });
}