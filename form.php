<?php
$name = $_POST["name"]; // sender
$email = $_POST["email"];
$mobilenumber = $_POST["mobilenumber"];
$bodytext = $_POST["bodytext"];

$from    = 'nsundarakrishnan@gmail.com'; 
$to      = 'nsundarakrishnan@gmail.com';
$subject = 'Job Hire Request from SundaraKrishnan Portfolio';
$message = 'Name:'.$name.'Email: '.$email.'Mobile: '.$mobilenumber.'Message: '.$bodytext;
$replysubject='Job hire request';
$replymail= "Thank You ".$name. ", for visiting my profile!!, I will be connecting with you shortly. Have a great day :)";
$headers = 'From:'.$email. "\r\n" .
    'Reply-To: '.$email. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($from, $to, $subject, $message, $headers);
mail($email, $replysubject, $replymail);
?> 