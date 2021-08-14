// Desenvolvido por Paulo Mariano
$(document).ready(function(){
  $('#phone').mask('(00) 00000-0000')

  $('#form-zapear').submit(function(event){
    event.preventDefault()
    var numero = $('#phone').val()
    if(numero != "" || numero != null){
      window.location.href = `https://api.whatsapp.com/send?phone=+55${numero}`
    } 
  })
})