<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Create database</title>
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
            <h1>Create database:</h1>
            <h3>Connect to server</h3>
<?php
//mysqli_connect(host, username, password, dbname)// for creating server we can only use 3 parameter in 'mysqli_connect'.
$link = @mysqli_connect("localhost", "prashant_users", "usersprashant") or die("ERROR: Unable to connect: " . mysqli_connect_error());
var_dump($link);


echo "<p>Connected successfully to the server.</p>";
?>
            <h3>Create a database</h3>
<?php
            //iski permission kese milegi agey dekhenge.
$sql = "CREATE DATABASE store";//for creating database on server you got an error because they cant give you the permission but you can create database directly going through your hosting site in mysql uske bad table insert waghera karwao....
    //for checking the query is success fully exected we use 'mysqli_query()'  = they take two parameter 1st one is  serverinfo 2nd is query.  
if(mysqli_query($link, $sql)){
    echo "<p>Database store was created successfully</p>";   
}else{
    echo "ERROR: Unable to execute $sql" . mysqli_error($link);   // for pasting the error related to query we use mysqli_error(); they print an string about an error.
}


?>
        </div>
    </div>
</div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>