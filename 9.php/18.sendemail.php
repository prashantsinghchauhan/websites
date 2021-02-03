<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Send Email</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style> 

    </head>
        <body>
            <div class="container-fluid">
                <h1>Send Email:</h1>
                <div>
<?php                  
$to = "sam@developwithsam.890m.com";
$subject = "We are learning PHP!";
$message = "<html><body><h1 style='color:green'>We are learning PHP!</h1><h3 style='color:orange'>What are you waiting for?</h3><p>Join us and spread the word!</p></body></html>";
$headers = "Content-type: text/html;";// headers mai content-type define karna jaruri hai "text/html" nahi toh mesaage bus ek simple text ki taraha print ho jayega , html ka code hai woh kaam ni karega.
echo mail($to, $subject, $message, $headers);// headers additional parameter hai bt jab html body use kar re ho message ke liye toh bht jaruri hai.
                    
?>
                </div>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>