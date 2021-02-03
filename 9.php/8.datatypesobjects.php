<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>data types: objects</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style>

    </head>
        <body>
            <div class="container-fluid">
                <h1>Objects:</h1>
                <div>
<?php
class car{
    //properties
    public $make = "Ford";//variables ko properties kehte hai class ki
    private $status = "off";
    
    //methods
    function turn_on(){
        //and functions ko method kehte hai class ke
     $this->status = "on";  
        // this.status = "on"; =>javascrit mai isko ase likhte
    }
    //$status  car ki private property hai isliye isko class ke bhar call ni kar sakte isliye iske liye function banaya get status.
    function getStatus(){
        return $this->status;   
    }
}

$myCar = new car;//object banaya class car ka "$mycar", ek object ke pass sari propertie hoti hai class ki
var_dump($myCar);//yeh detail dikhayega $mycar ki
echo "<br />";
echo $myCar->make;// car ki make property joh ki 'public' hai usko print kara re hai.
echo "<br />";
$myCar->turn_on();
var_dump($myCar);
echo "<br />";
echo $myCar->getStatus();// function ke through property ko call kr re hai because woh private hai ,direct call ni kar sakte , isliye function chahiye.
?>
                </div>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>