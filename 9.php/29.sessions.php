<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SESSIONS</title>
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
<?php
include "header.php";
?>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-offset-1 col-sm-10 containingDiv">
            <h1>SESSIONS:</h1>
<?php
// start a session
// $_SESSION ek global variable hai joh ki data store karta hai like username wghera post or get variable ki traha .
            // isme data array ki form mai store hota hai,beacuse yeh ek array hai.
session_start();// agar session pehle se hi maujud hai toh unke variable apne app ammend krdega ni toh start ho jayega shuru se.
// store data
$_SESSION["firstname"] = "Mark";// setting variable name in session, session is an array type so 'firstname' is a variable in session array which value is set to "Mark".
$_SESSION["lastname"] = "Zuckerberg";
$firstname = $_SESSION["firstname"];
$lastname = $_SESSION["lastname"];
echo "<p>Hi $firstname $lastname!</p>";
//remove data from session
if(isset($_SESSION["firstname"])){
//'isset'= check karega agar $_SESSION["firstname"] set hai toh unset kardo.
    unset($_SESSION["firstname"]);  // unset karega $_SESSION["firstname"] isko.
}
echo $_SESSION["firstname"]?1:0;// yeh '1' print karega agar $_SESSION["firstname"] iski value  hai toh ,otherwise '0', output = 0 because humne iski value unset kardi hai.
//destroy session
session_destroy();// whole session destroy ho jayega is se.
?>
        </div>
    </div>
</div>
<?php
include "footer.php";
?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>