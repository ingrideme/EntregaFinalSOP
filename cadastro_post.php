
<?php

$nome=$_POST["nome"]; 

$email=$_POST["email"];

$telefone=$_POST["telefone"];

$cidade=$_POST["cidade"];


$conexao=mysqli_connect("localhost","id11856371_cliente","123456789a","id11856371_entregasop");
if (!$conexao)
	die ("Ocorreu o seguinte erro -> ".mysqli_error());

$query="INSERT INTO `id11856371_entregasop`.`cliente` (`nome`, `telefone`, `email`, `cidade`, `id`) VALUES('$nome', '$telefone', '$email','$cidade', null)";

mysqli_query($conexao,$query);

echo "Seu cadastro foi realizado com sucesso! <br>Agradecemos a atenção.";
?>