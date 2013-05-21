window.onload = function() {

  function inputNumerico(elementoInput) {
      elementoInput.addEventListener("keypress", function(event) {
        var digitado = String.fromCharCode(event.charCode);
        if(event.charCode && !/[0-9]{1}/.test(digitado)) {
          event.preventDefault();
        }
      });
  }

  var carrinho = document.getElementById("carrinho");
  var inputsQuantidade = carrinho.getElementsByTagName("input");

  for(var i = 0; i < inputsQuantidade.length; i++) {
    inputNumerico(inputsQuantidade[i]);
  }

}
