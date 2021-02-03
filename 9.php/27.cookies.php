<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Cookies</title>
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
<!-- we store cookies in user browser for additional information ,fir jab bhi user visit karega site pe toh uski info mi jayegi cookies ke through.            -->
<?php
include "header.php";
?>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-offset-1 col-sm-10 containingDiv">
            <h1>Cookies:</h1>
<?php
// cookie ase set krte hai "setcookie()" array ke key value ki taraha kaam karti hai jisme "username" key hai 'buenosdias' value dono hi userdefined hai and, third parameter time daal rakha hai ki kitne time ke liye rahe cookie.         
setcookie("username", "buenosdias", time()+7*24*60*60);
setcookie("username", "", time()-1000);
print_r($_COOKIE);//cookie ka superglobal variable joh ki ek array hai.
    // key ko condition mai dala agar 'username' hai toh uski value print karo output = buenosdias.  
if($_COOKIE["username"]){
    echo "<p>Value of the username cookie: ".  $_COOKIE["username"] ."</p>";   
}else{
    echo "<p>Cookie not set.</p>";   
}
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