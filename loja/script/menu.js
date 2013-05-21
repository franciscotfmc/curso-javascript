$(document).ready(function() {
  $("#menu_secoes li").click(function(event) {
    $("#menu_secoes li ul").hide();
    $("#menu_secoes li a").removeClass("selecionado");
    $(this).children("ul").show();
    $(this).children("a").addClass("selecionado");
    event.preventDefault();
  });
});

