<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Error Handling</title>
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
            <h1>Error Handling:</h1>
            <h3>Example 1:</h3>
<?php
/* ek function banaya "errorHandler1()" uski parenthesis ke andar variable pass kiye, sab user defined hai.
$errno= yeh error number batayega , $errstr = yeh error string matlab message store karega error ke bare mai.
$errfile = yeh location batayega, $errline = yeh line batayega kaha pe hai error.
$errcontext = yeh ek array hoga joh ki variable store karega, sare type ke .

*/
function errorHandler1($errno, $errstr, $errfile, $errline, $errcontext){
    echo "<p><strong>Error</strong>: [$errno] $errstr.</p>";
}
// Set error handler
set_error_handler("errorHandler1");// yeh error handel karega jab error ayegi.
echo filesize("inexistingfile.txt");//example ke liye hai asi koi file hai hi ni .
?>
            <h3>Example 2:</h3>
<?php
            
function calculateFileSize($file){
    // ek functon banaya joh ki yeh check karega yeh file hai bhi ya nahi.
    if(!file_exists($file)){
        // do parameter hai ek toh variable '$file' joh ki userdefined hai jisme error store hoga matlb 'file', 'E_USER_WARNING' isme error ka type store hoga.
        trigger_error($file . " does not exist and thus size cannot be retrieved!", E_USER_WARNING);  
        return false;
    }else{
        // agar file hai toh uska size print ho jayega.
        return filesize($file);   
    }
}

function errorHandler2($errno, $errstr, $errfile, $errline, $errcontext){
    // log variable mai concatinate kar re hai sab variable alag alag line mai 
    $log = "Error[$errno] on " . date("d/m/Y H:i:s") . "\r\n";
    $log .= "Details: $errstr. \r\n";
    $log .= "Location: In $errfile on line $errline. \r\n";
    //  print_r($errcontext, true) yeh karna bht jaruri hai otherwise error ke bare mai store ni hoga and print_r ko true krna jaruri hai.
    $log .= "Variables: " . print_r($errcontext, true) . "\r\n";
    
    // error_log yeh error ka log maintain karega pehele ek variable pass karenge then , '3' ka matlb error ko login krke dekhna hai, then uski location dalenge "logs/errorhandlingerrors.log" = isme 'logs' namm ka folder hai joh ki create kar rakha hai and 'errorhandlingerrors.log' naam ki file joh ki hum jab ban jayegi logs wale folder mai jab error_log chalega.     
    error_log($log, 3, "logs/errorhandlingerrors.log");
    error_log($log, 1, "sam@hellodevelopers.890m.com");// yeh email pe bejega '1' email ka code hai.
    die("<p>An error occured, please try again!</p>");   // agar koi error aa jayegi toh die chalega.and script yahi se exit ho jayegi.
}

set_error_handler("errorHandler2");
echo calculateFileSize("inexistingfile.txt");// error show karega because 'inexistingfile.txt' is namm ki koi file hai hi ni.

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