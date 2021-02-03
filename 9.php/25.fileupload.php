<!--25.fileupload.php-->
<!--most important = php ob_start() php ob_flush(); = jab bhi 'header()' call krnege toh ek dono mai se start wale ko sabe upar file mai and flush wale ko nice jarur define karenge.-->
<?php ob_start(); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>File Upload</title>
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
            <h1>Upload file:</h1>
<?php
if($_POST["submit"]){
//file details
    $name = $_FILES["file"]["name"];
    $type = $_FILES["file"]["type"];
    $size = $_FILES["file"]["size"];
    $fileerror = $_FILES["file"]["error"];
    $tmp_name = $_FILES["file"]["tmp_name"];
    $permanentdestination = "uploads/" . $_FILES["file"]["name"];
    
//error messages to display
    $noFiletoUpload = "<p><strong>Please upload a file!</strong></p>";
    $fileAlreadyExists = "<p><strong>This file already exists!</strong></p>";
    $wrontFormat = "<p><strong>Sorry, you can only upload pdf and text files!</strong></p>";
    $fileTooLarge = "<p><strong>You can only upload files smaller than 3Mo!</strong></p>";
 
//allowed formats to upload
    $allowedFormats = array("pdf"=>"application/pdf", "text"=>"text/plain");
    
//check for errors
    // erroor == 4 ka matlab hai ki, agar bina file upload kare bigar upload button prress karoge toh yeh error ayegi hum error jante hai toh humne direct condition mai laga di.
    if($fileerror == 4){
    
        $errors .=$noFiletoUpload;   
    }else{
        // agar or koi error hui toh is variabe mai strore karke print karwadenge '$errors'.
        if(file_exists($permanentdestination)){
            // agar file pehle se hi upload folder mai hai toh yeh error.
            $errors .= $fileAlreadyExists;   
        }
        if($size > 3*1024*1024){
            // file size 3mb se jyada ni
            $errors .= $fileTooLarge;   
        }
        if(!in_array($type, $allowedFormats)){
            // file agar pdf ya plain type ki nahi hai toh ye chalega
            $errors .= $wrontFormat;   
        }   
    }
    
    
    
    if($errors){
        $resultMessage = '<div class="alert alert-danger">' . $errors .'</div>'; 
        echo $resultMessage;
    }else{
        // "move_uploaded_file" file uploading function hai = joh file correct format mai  hogi woh is '$permanentdestination' location pe store hojayegi, "$tmp_name" yeh temprarory location hai joh ki '$_FILES' WALE SUPER VARIABLE ARRAY ki ek poperty hai us property mai se apni location mai transfer karenge.
     if(move_uploaded_file($tmp_name, $permanentdestination)){
//        $resultMessage = '<div class="alert alert-success">File uploaded successfuly</div>'; 
//         echo $resultMessage;
         header("Location: 26.thanksforyourfile.php");// jab file upload ho jaegi toh alag page mai message print ho uske liye 'header()' function call krenge, or joh location hai '26.thanksforyourfile.php' jisme yeh file hai usko iski parenthesis mai call krenge is file mai html file hai joh ki humne message dene ke liye banayi hai.
         //most important = php ob_start() php ob_flush(); = jab bhi 'header()' call krnege toh ek dono mai se start wale ko sabe upar file mai and flush wale ko nice jarur define karenge.
         
     }else{
        $resultMessage = '<div class="alert alert-warning"Unable to upload file. Please try again later.></div>'; 
         echo $resultMessage;
     }
        
    } 
    
    print_r($_FILES);//$_FILES = yeh global variable hai jab files upload krte hai toh isko use karte hai.yeh ek array hai isi ke andar sari information hai toh joh kuch bhi message print hue hai isi ka refrence leke hue hai.
    
    // 'file' array ke andar -> error namm ki attribute hai agar uski value '0' se greater hogi toh if ki condition chalegi nahi toh else ki, additional info = agar 'error > 0' hai iska matlab error hai.
    if($_FILES["file"]["error"]>0){
        echo "<p>There was an error: ". $_FILES["file"]["error"] ."</p>";   
    }else{
        echo "<p>File: ".  $_FILES["file"]["name"] ."</p>";   
        echo "<p>File type: ".  $_FILES["file"]["type"] ."</p>";   
        echo "<p>Temporary location: ".  $_FILES["file"]["tmp_name"] ."</p>";   
        echo "<p>File size: ".  $_FILES["file"]["size"] ."</p>";   
        echo "<p>Permanent destination: ".  "uploads/" . $_FILES["file"]["name"] . "</p>";   
    }
}


?>
<!--             agar jyada data bejna pade toh yeh encoding lagana jaruri hojata hai enctype="multipart/form-data" bina "post and enctype "ke file upload work bhi ni karega-->
            <form method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="file">Choose file:</label>
<!--                     file input ke liye type="file" chahiye-->
                    <input type="file" name="file" id="file" placeholder="File">
                </div>
                <input type="submit" name="submit" class="btn btn-success btn-lg" value="Upload">
            </form>
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
<?php ob_flush(); ?>
<!--most important = php ob_start() php ob_flush(); = jab bhi 'header()' call krnege toh ek dono mai se start wale ko sabe upar file mai and flush wale ko nice jarur define karenge.-->