<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>File Handling</title>
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
            <h1>File Handling</h1>
            
                <h3>fopen/fclose:</h3>
<?php
// in this ,"file_exists("sometextf.txt")"yeh function check karega ki file hai ya ni.            
if(file_exists("sometextf.txt")){
    $myFile = fopen("sometext.txt", "r"); //file open hogi ,'r' read mode mai.
    fclose($myFile);
}else{
    echo "<p>This file does not exist!</p>";// agar file nahi milegi toh yeh print ho jayega.
}

?>
            
                <h3>fread:</h3>
<?php
//file open hogi read mode mai then agar nahi milegi file to die() function chalega.
$fileHandle = fopen("sometext.txt", "r") or die("Unable to open file!");//die() lagayenge toh if else ki requirement khatam ho jayegi, exit function ke equivalent  hai yeh chalega toh script bhi wahi se exit ho jaeygi 
$fileContent = fread($fileHandle,filesize("sometext.txt"));// fread(resource , mode = file puri kolni hai ya ,kuch hissa yeh batana padega) function mai resourse or konsa mode chahiye iski jarurat hoti  hai
fclose($fileHandle);
var_dump($fileContent);
?>
            
                <h3>file_get_contents:</h3>
<?php
$fileContent = file_get_contents("sometext.txt") or die("Unable to read file");// file_get_contents() upgraded hai yeh file ki location leta hai and whole file open karta hai agar file mili toh sahi hai nahi toh die() function.
var_dump($fileContent);

?>
            
                <h3>file function:</h3>
<?php
/* file() fucnction file ko array mai convert kardeta hai and har line ko ek index ki traha treat karta hai. */            
$fileContent = file("sometext.txt") or die ("Unable to read file");
var_dump($fileContent);
echo "<br />";
foreach($fileContent as $line){
    // foreach impliment kara then yeh humare liye us array ke andar joh bhi hai print kardega.
    echo $line . "<br />";   
}
?>
            
                <h3>fwrite:</h3>
<?php
// isme hume file ko variable mai store karke,fopen() function lagake functionality bhi define karni padti hai ni toh kamm ni karega .   
$fileHandle = fopen("sometext.txt", "w") or die ("Unable to open file!");
// fwrite(resousre , string = matalb joh bhi file mai likhna hai woh likho string ke format mai) ,yeh function pehle ke data ko delete kar deta hai and naya wala put kardeta hai.            
fwrite($fileHandle, "This is new content") or die("Unbale to write to file!");
$fileContent = file("sometext.txt") or die("Unable to read file!");
var_dump($fileContent);
?>
        
                <h3>file_put_contents:</h3>
<?php
// file_put_contents("file name string mai", "kya data input karna hai woh ", FILE_APPEND = copy data) , agr bina FILE_APPEND ke use kiya toh fwrite ki traha pehle ke data ko delete karke store krdega data.
            // hume isme resourse file define karne ki jarurat ni direct location dal sakte hai. jabki fwrite mai jarurat padti hai.
file_put_contents("sometext.txt", "\r\n This is some other new content!", FILE_APPEND) or die ("Unable to write to file!");
$fileContent = file("sometext.txt") or die("Unable to read file!");
var_dump($fileContent);
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