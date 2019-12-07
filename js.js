<script language="JavaScript" >
function enviarcontato(){
  
if(document.contato_get.nome.value=="" || document.contato_get.nome.value.length < 3)
{
alert( "Preencha campo NOME corretamente!" );
document.contato_get.nome.focus();
return false;
}
  
  
if( document.contato_get.email.value=="" || document.contato_get.email.value.indexOf('@')==-1 || 
document.contato.tx_email.value.indexOf('.')==-1 )
{
alert( "Preencha campo E-MAIL corretamente!" );
document.contato_get.email.focus();
return false;
}
  
if(document.contato_get.fone.value=="" || document.contato_get.fone.value.length < 10)
{
alert( "Preencha campo fone corretamente!" );
document.contato_get.fone.focus();
return false;
}

if(document.contato_get.cidade.value=="" || document.contato_get.cidade.value.length < 10)
{
alert( "Preencha campo fone corretamente!" );
document.contato_get.cidade.focus();
return false;
}
  
return true;
}
  
</script>