<?php
$komu = "drakdavcacountryballs@gmail.com";

$jmeno = $_POST['yourname'];
$email = $_POST['email'];
$zprava = $_POST['message'];

$subject = "Nová zpráva z formuláře od $jmeno";
$message = "Jméno: $jmeno\n";
$message .= "E-mail: $email\n\n";
$message .= "Zpráva:\n$zprava";

$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

if(mail($komu, $subject, $message, $headers)){
    echo "Zpráva byla úspěšně odeslána.";
} else {
    echo "Nastala chyba při odesílání zprávy.";
}
?>