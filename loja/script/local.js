var campoCEP = document.getElementById("input_cep");
campoCEP.addEventListener('blur', function(event){
  localStorage.cepDigitado = this.value;
});

window.addEventListener("load", function(event){
  if(localStorage.cepDigitado) {
    campoCEP.value = localStorage.cepDigitado;
  }
});