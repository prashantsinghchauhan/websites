<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Retrieve data</title>
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
            <h1>Retrieve data from a table:</h1>
            <h3>Connect to database:</h3>
<?php
//mysqli_connect(host, username, password, dbname)
$link = @mysqli_connect("localhost", "prashant_user", "usersprashant", "prashant_users") or die("ERROR: Unable to connect: " . mysqli_connect_error());

echo "<p>Connected successfully to the database.</p>";
?>
            <h3>Retrieve data from database:</h3>
<?php
            //database mai se data ko html mai kese lana hai
$sql = "SELECT * FROM users";// pehle whole data ko select karke variable mai store karalenge.
//$sql = "SELECT * FROM users WHERE firstname = 'george'";
//$sql = "SELECT * FROM users ORDER BY lastname";
//$sql = "SELECT * FROM users ORDER BY lastname DESC";
            
    //'$result = mysqli_query($link, $sql)' query ke output ko result variable mai store karalenge. 
            //jab bhi mysqli_query chalaoge tab isme do meter pass krne padenge, first link = jisme database se connect hone ki details hai , second sql =jisme query store hai.
if($result = mysqli_query($link, $sql)){
    
    print_r($result);// result rint karwaya ab jitni row hongi uska count print kardega yeh. 
    if(mysqli_num_rows($result)>0){
        //mysqli_num_rows yeh function check karega ki kitni rows hai data mai usko count batayega, if mai condition hai agar data base rows 0 se jyada hai toh print krde joh ki true hai.
        echo "<table class='table table-stripped table-hover table-condensed table-bordered'>
                <tr>
                <th>ID</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>password</th>
                </tr>
        ";
//        $count = 0;
        // humne  while loop ki condition mai isliye ($row)variable mai data store kara taki condition bhi check hojaye or data bhi store hojaye , agar hum while loop ki body mai ($row)variable mai data store karwate toh condition ek bar chal jati fir 2nd row se data print karna start karta.
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            //mysqli_fetch_array= yeh array ki format mai data store krta hai and iske throuh hm data ko print karwayenge
            
//            $count++;   
//            echo "<p>Row number: $count</p>";
//            print_r($row);
            echo "<tr>";
                echo "<td>" . $row["ID"] . "</td>";
                echo "<td>" . $row["firstname"] . "</td>";
                echo "<td>" . $row["lastname"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td>" . $row["password"] . "</td>";
            echo "</tr>";
            
        }
        echo "</table>";//table tag akhir mai close hoga jab table complete hojayegi.
        //close the result set
        mysqli_free_result($result);// is se joh mysqli_fetch_array function memory consume karega woh free hojayegi.
    }else{
        echo "<p>mySQL returned an empty result set.</p>";   
    }
}else{
    echo "<p>Unable to excecute: $sql. " . mysqli_error($link) ."</p>";   
}
?>
                      
        </div>
    </div>
</div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>