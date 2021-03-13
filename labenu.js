function validacaoForm(){
    var email = document.forms["formlabenu"]["email"].value;
    if(email == ""){
        alert("E-mail inválido");
        return false;
    }      
   }