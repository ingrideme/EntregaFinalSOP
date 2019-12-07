<script language="JavaScript" >
function enviarcontato(){
  
if(document.contato_post.nome.value=="" || document.contato_post.nome.value.length < 3)
{
alert( "Preencha campo NOME corretamente!" );
document.contato_post.nome.focus();
return false;
}
  
  
if( document.contato_post.email.value=="" || document.contato_post.email.value.indexOf('@')==-1 || 
document.contato.tx_email.value.indexOf('.')==-1 )
{
alert( "Preencha campo E-MAIL corretamente!" );
document.contato_post.email.focus();
return false;
}
  
if(document.contato_post.fone.value=="" || document.contato_post.fone.value.length < 10)
{
alert( "Preencha campo fone corretamente!" );
document.contato_post.fone.focus();
return false;
}

if(document.contato_post.cidade.value=="" || document.contato_post.cidade.value.length < 10)
{
alert( "Preencha campo fone corretamente!" );
document.contato_post.cidade.focus();
return false;
}
  
return true;
}
  
</script>