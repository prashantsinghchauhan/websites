<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>While Loop</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style> 

    </head>
        <body>
            <div class="container-fluid">
                <h1>While Loop:</h1>
                <div>
<?php
// while loop jab tak chalta hai jab tak condition true hai
$i = 1;
while($i <= 10){
    echo $i . "<br />"; 
    $i++;// agar yaha increment operator nahi lagayenge toh value as it is rahegi and loop infanite ho jayega.
}
//array ke sath while ka example
$carmakes = array("BMW", "Audi", "Mercedes");// array dala ek var mai.
$j = 0;// ek var mai 0 assign kiya joh array ki pehli index value ko refer kare
while($j<3){
    //"while($j<3)" condition lagayi j is less than 3 
    
    echo $carmakes[$j] . "<br />";
    // array ko call kiya [and var pass kiya intial value iski 0 hai joh array ke pehle index ko refer karti hai "bmw" ko]
    $j++;// pehla value print ho jayega array ka then value mai increment hoga +1 ka then value "0" thi woh "1" ho jayegi and 1 ko refer karegi array ki jab tak loop cahlega jab tak condition "while($j<3)" false ni ho jati .
}
?>
                </div>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>