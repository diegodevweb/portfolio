<?php

$name = $_POST['nome'];
$lastName = $_POST['sobrenome'];
$email = $_POST['email'];
$message = $_POST['mensagem'];
$subject = "Novo Contato.";

$mailHeader = "From: " . $name . " " . $lastName . "<" . $email . ">\r\n";
$to = "diego.devwebb@gmail.com";

if (mail($to, $subject, $message, $mailHeader)) {
    header("location: thanks.html");
} else {
    die("Error!");
}
