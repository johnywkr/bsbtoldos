function validar(){

  let nome = document.getElementById("nome")
  let email = document.getElementById("email")
  let descricao = document.getElementById("descricao")
  let fone = document.getElementById("fone")

   nome = nome.value;
   email = email.value;
   descricao = descricao.value;
   fone = fone.value;
  
  if(nome == ""){
      Swal.fire('Preencha o campo Nome.');
      document.getElementById("nome").focus();
      return false;
  }
  
  if(email == "" || email.indexOf('@') == -1 ){
      Swal.fire('Preencha corretamente o campo E-mail.');
      document.getElementById("email").focus();
      return false;
  }

  if(fone == ""){
    Swal.fire('Preencha o campo Telefone');
    document.getElementById("fone").focus();
    return false;
 }
  
  if(descricao == ""){
      Swal.fire('Preencha o campo Mensagem');
      document.getElementById("descricao").focus();
      return false;
  }
  return true;
 }


let contactform = document.getElementsByName("contactform")
function enviarFormulario(){
    
    if(validar() != false){
      action = 'https://api-myzzy-tecnologia.herokuapp.com/api/send-mail';

      var dados = jQuery( $('#contato01') ).serialize();

      $.ajax({
        type: "POST",
        url: action,
        data: dados,
        success: function(msg) {
          Swal.fire(msg);
          if (msg == 'Seu E-mail foi enviado com sucesso!') {
            $('#nome').val("");
            $('#email').val("");
            $('#fone').val("");
            $('#descricao').val(""); 
          } 
        }
      });
    }
      return false;
}


 

