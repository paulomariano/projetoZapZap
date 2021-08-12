// Desenvolvido por Paulo Mariano
$(document).ready(function(){
  $('#form-zapear').submit(function(event){
    event.preventDefault()
    var numero = $('#phone').val()
    if(numero != "" || numero != null){
      window.location.href = `https://api.whatsapp.com/send?phone=+55${numero}`
    } 
  })
})