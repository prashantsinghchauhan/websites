<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>introduction</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
            h3{
                color:#42d5ce;   
            }
            .containingDiv{
                border:1px solid #7c73f6;
                margin-top: 100px;
                border-radius: 15px;
            }
        </style> 

    </head>
        <body>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-offset-1 col-sm-10 containingDiv">
            <h1>Connect to database:</h1>
<?php
            // old way to connect with DATA BASE procedural way
//mysqli_connect(host, username, password, dbname)
       //we use '@' for hiding the message in mysqli_connect. if we dont apply @ then a message is shown      
//$link = @mysqli_connect("localhost", "prashant_users", "usersprashant", "prashant_users") or die("ERROR: Unable to connect: " . mysqli_connect_error());
//var_dump($link);
//
//
//echo "<p>Connected successfully to the database.</p>";

//connect new way object oriented method.
$link = new mysqli("localhost", "prashant_users", "usersprashant", "prashant_users"); // your host should be local if you are using my free web hosting host = localhost.
            
//check connection
// agar 'connect_errno' ka status code 0 se bada hoga toh 'if' chalega. and error print karega
if($link->connect_errno > 0){
    //connection mai konsa error hai check krne ke liye iska use krenge '$link->connect_error'.
    die("Unable to connect: " . $link->connect_error);   
}

echo "<p>Connected successfully to the database.</p>"; 
?>
        </div>
    </div>
</div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>