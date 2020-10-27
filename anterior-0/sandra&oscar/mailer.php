<?php
if(isset($_POST['submit'])) {

	$to = "sandritagalan@hotmail.com,vanecendales@gmail.com,oscar_eagle47@hotmail.com"; 
	$subject = "Confirmación a la boda";
	$name_field = $_POST['name'];
	$message = $_POST['message'];
	$option = $_POST['radio'];

	$body = "Invitado: $name_field\n  $check_msg Option: $option\n Comentarios:\n $message\n";

	echo "<div style='background: #0d0d2c; width: 100%;height: 100%;color: white;padding-top: 50%;
    text-align: center; font-size: 3rem; font-family: helvetica; font-weight: lighter;'>Gracias por tu confirmaci&oacute;n! </div>";
	mail($to, $subject, $body);
	
} else {
	echo "blarg!";
}
?>




