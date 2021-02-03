<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>variables</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style>

    </head>
        <body>
            <div class="container-fluid">
                <h1>Variables:</h1>
                <p>
<!--    php mai variable "$" dollar sign se assign hote hai   -->
<?php
$name = "John";
$age = 33;
       // "." dot concatination ke liye use hota hai php mai            
echo "My name is " . $name . ". I am " . $age . " years old.";
?>
                </p>
                <p>
<?php
                    // php mai constant "define" name se assign hota hai jisme uska "variable name" or value ko "UPPERCASE" mai likhna hota hai,jaruri ni ki value ko upper case mai hi likho but variable name uppercase mai h define hoga.
define("COUNTRY", "ENGLAND");
echo "Flight destination: " . COUNTRY;
?>
                </p>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>