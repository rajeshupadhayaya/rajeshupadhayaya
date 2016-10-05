<?php

//Load PHPMailer dependencies
require_once 'smtp.php';
require_once 'PHPMailerAutoload.php';
require_once 'phpmailer.php';

$mailer = new PHPMailer();
// phpinfo();

if (isset($_POST['name']) && isset($_POST['message']) &&isset($_POST['email'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];

    /* TO, SUBJECT, CONTENT */
    $to = 'rajeshupadhayaya@gmail.com';
    $subject = 'Miss/Mr. ' . $name.'contacted you in rajeshupadhayaya.com';
    $body = $_POST['message'];

    $headers = 'From: ' . $email;


    if (trim($email) == '' || trim($body) == '' || trim($name) == '') {
        echo 'Please provide all inputs';
    } else {

        //SMTP Configuration
        $mailer->isSMTP();
        $mailer->SMTPAuth = true; //We need to authenticate
        $mailer->Host = ' ';
        $mailer->Port = '587';
        $mailer->Username = ' ';
        $mailer->Password = ' ';
        $mailer->SMTPSecure = 'tls';

        //Now, send mail :
        //From - To :
        $mailer->From = $email;
        $mailer->FromName = $name; //Optional
        $mailer->addAddress($to);  // Add a recipient

        //Subject - Body :
        $mailer->Subject = $subject;
        $mailer->Body = $body;
        $mailer->isHTML(true); //Mail body contains HTML tags

        //Check if mail is sent :
        if (!$mailer->send()) {
            //echo 'Error sending mail : ' . $mailer->ErrorInfo;
            echo 'There is some technical issue, please try again';
        } else {
            echo 'Thank you for contacting me, I will respond soon !';
        }
    }
}else{
    header('Location: http://rajeshupadhayaya.com');
}
?>