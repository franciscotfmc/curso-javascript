function realParaNumber(formatado) {
  return parseFloat(formatado.replace("R$ ","").replace(",","."));
}

function numberParaReal(numero) {
  return "R$ " + numero.toFixed(2).replace(".", ",");
}