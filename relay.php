<?php
    require '/path/to/vendor/autoload.php';
    use Mailgun\Mailgun;
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
    $messageBody = $request->messageBody;
    // Send email via mailgun
    $config = array();
    $config['api_key'] = "key-14b2gh2eaadx8yuz0zwb21plbmrm-sc9";
    $config['api_url'] = "https://api.mailgun.net/v2/sandbox3d8247bed5c74186857c0b4bb03163d6.mailgun.org/messages";
 
    $message = array();
    $message['from'] = $email;
    $message['to'] = "ukspringroll@gmail.com";
    $message['subject'] = "Hello Team Spring Roll!";
    $message['text'] = $messageBody;
 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $config['api_url']);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_POST, true); 
    curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
 
    $result = curl_exec($ch);
 
    curl_close($ch);

    echo "Message has been sent!";
?>