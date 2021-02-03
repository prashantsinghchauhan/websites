<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>data types: strings</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style>
    </head>
        <body>
            <div class="container-fluid">
                <h1>Strings:</h1>
                <div>

<?php
$name = 'Peter';
echo 'Name: ' . $name . '<br />';
                    // 'Peter's nice' isko likhte wakt single quote aara tha isliye asi value k bhi double quote mai likhenge "Peter's nice"
/*                   
Hm string ko single quote('') mai bhi assign kar sakte hai and double mai bhi.
but agar hume kisi string ke andar variable call krna ho toh double quote ka hi isteymal krenge.
ex= $string2 = "My friend $name is nice.";
*/
$string = "Peter's nice";
echo $string . "<br />";
$string2 = "My friend $name is nice.";
echo $string2;
?>
                </div>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>