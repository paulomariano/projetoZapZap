// Desenvolvido por Paulo Mariano
// dentro de string \ significa entrada de unicode, para utilizar 
// o simbolo \ unicode equivalente \u005c
$(document).ready(function(){
  $('#phone').mask('(00)00000-0000')

  $('#form-zapear').submit(function(event){
    event.preventDefault()
    let numero = $('#phone').val()
    if(numero != "" || numero != null){
      numero = numero.replace('-','')
      numero = numero.replace('(','')
      numero = numero.replace(')','')
      window.location.href = `https://wa.me/55${numero}`
      // alert(`https://wa.me/55${numero}`)
    } 
  })

  $('.form-check-input').click(function(){
    if($('.form-check-input:checked').val() == "telefone"){
      $('#phone').mask('(00)0000-0000')
      $('#phone').attr("pattern","\u005c([0-9]{2}\u005c)[\u005cs][0-9]{4}-[0-9]{4}")
    } else {
      $('#phone').mask('(00)00000-0000')
      $('#phone').attr("pattern","\u005c([0-9]{2}\u005c)[\u005cs][0-9]{5}-[0-9]{4}")
    }
    $('#phone').val('')
  })

})