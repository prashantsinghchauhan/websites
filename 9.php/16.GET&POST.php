<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GET AND POST</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style> 

    </head>
        <body>
            <div class="container-fluid">
                <h1>Get and Post:</h1>
                <div>
<?php
//$_GET = yeh super variabe hai and yeh form ka data store karta hai ,isko php mai kisi bhi scope mai use kar sakte ho.     
//if method = "get" then, apka data browser ki url mai dikhega is method ka secure data bejne ke liye use ni karte.,"$_Get" variable se app woh data acess kar sakte hai joh apne get method laga ke use kara ho.                    
echo "<h3>GET:</h3>";
print_r($_GET);
if($_GET["submit"]){
    if($_GET["username"]) {
        echo "<p>Hi ". $_GET["username"] . " . Welcome to my page!</p>";   
    }
}
//if method ="post" then apka data safe hai apka data kahi show ni hoga bus tageted file mai rahega jaha apne beja hai usko,  and app "_post" method se access kar skte hai data joh apne ye method use kara hai jis bhi attribute pe.
echo "<h3>POST:</h3>";
print_r($_POST);
if($_POST["submit"]){
    if($_POST["country"]){
        echo "<p>Your Country is: " . $_POST["country"] . ".</p>";   
    }
}
?>
<!--                    
form tag mai joh do attribute hai "method and action"
"method" mai konsa method use karna hai woh pass karnege and "action" mai kaha data store karna hai ,by default usi file mai hota hai joh currently use hori ho.
 
-->
                    <form method="get" action="16.GET&POST.php">
                        <label for="username">Username:</label>
                    <input type="text" name="username" id="username">
                        <input type="submit" name="submit" value="Submit">
                    </form>
                    <form method="post" action="16.GET&POST.php">
                        <label for="country">Country:</label>
                    <input type="text" name="country" id="country">
                        <input type="submit" name="submit" value="Submit">
<!--                        "name" attribute "key" ki traha kam krta hai array ki input tag mai and "value"  array ki value ki tarha
key= isko app ek tarike ki id jesa use kar sakte hai.
-->
                    </form>
                </div>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>