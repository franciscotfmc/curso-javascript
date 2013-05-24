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