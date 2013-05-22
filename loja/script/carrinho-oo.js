function Carrinho(elemento) {
  this.total = 0;
  this.itens = [];

  var elementoItens = elemento.getElementsByTagName("li");
  for(var i = 0; i < elementoItens.length; i++) {
    this.itens.push(new Item(elementoItens[i]));
    this.total += this.itens[i].quantidade;
  }
}

function Item(elemento) {
  var strong = elemento.getElementsByTagName("strong")[0];
  var input = elemento.getElementsByTagName("input")[0];
  var spans = elemento.getElementsByTagName("span");
  var spanValorUnitario = spans[0];
  var spanValorTotal = spans[1];

  this.codigoProduto = strong.textContent;
  this.quantidade = parseInt(input.value, 10);

  if(!this.quantidade) {
    this.quantidade = 0;
  }

  this.valorUnitario = realParaNumber(spanValorUnitario.textContent);
  this.valorTotal = this.quantidade * this.valorUnitario;
}