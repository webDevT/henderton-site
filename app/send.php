<?php
 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $text_comment = $_POST["text_comment"];

    if($name=="" or $email=="" or $text_comment=="" or $phone==""){ 
        echo "<div>Заполните, пожалуйста, все поля</div>";
    }


    else{
    
        $to = "andrew.smith@henderton.com";
        $subject = "henderton"; 
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <henderton>\r\n";
        

       
        $message .= "Name: ".$name."\n"."<br/>";
        $message .= "Phone: ".$phone."\n"."<br/>";
        $message .= "Email: ".$email."\n"."<br/>";
        $message .= "Message: ".$text_comment."\n";
        

        $send = mail($to, $subject, $message, $headers);

       
        if ($send == "true")
        {
            echo "Thank! Your message has been sent.\r\n";
        }
       
        else
        {
            echo "Failed to send, try again!";
        }
    }

?>