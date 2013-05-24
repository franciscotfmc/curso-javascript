$("#carrinho li form a").show();

$("#carrinho").on("click", "li form p a", function(event){
  var confirma = confirm("Tem certeza de que deseja exlcuir o item?")
    if(confirma) {
      $(this).closest("li").fadeOut("slow", function(){
      $(this).remove();
    });
  }
  
  event.preventDefault();
});

$("#carrinho li span[id$=valor_unit]").each(function(){
  var spanValorUnitario = $(this);
  
  var valorUnitario = realParaNumber(spanValorUnitario.text());
  spanValorUnitario.data("valor", valorUnitario);
});

$("#carrinho").on("keyup", "li input[type=text]", function(event){
  var input = $(this);
  var li = input.closest("li");
  var spanValorUnit = li.find("span[id$=valor_unit]");
  var spanValorTotal = li.find("span[id$=valor_total]");

  var quantidade = parseInt(input.val());
  var valorUnitario = spanValorUnit.data("valor");

  if(!quantidade) quantidade = 0;

  var total = quantidade * valorUnitario;
  spanValorTotal.text(numberParaReal(total));
});