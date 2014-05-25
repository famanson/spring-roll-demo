<?php
    $config = parse_ini_file("/var/relay/config.ini");
    $headers = apache_request_headers();
    if($headers['Referer'] == $config['referer']) {
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $email = $request->email;
        $messageBody = $request->messageBody;
        $message = array();
        $message['from'] = $email;
        $message['to'] = $config['to_email'];
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

        echo "Message OK";
    } else {
        throw new Exception("Nope.");
    }
?>