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
  $('.form-check-input').click(function(){
    if($('.form-check-input:checked').val() == "telefone"){
      $('#phone').attr("pattern","\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4}")
    } else {
      $('#phone').attr("pattern","\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}")
    }
  })
  
})