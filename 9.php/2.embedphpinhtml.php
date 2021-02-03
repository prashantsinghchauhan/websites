<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>Embed PHP in HTML</title>
    </head>
    <body>
        <h1>Embed PHP in HTML</h1>
        <p>
<!--   hm php ko ase lagate hai html mai , joh bhi "echo" mai hum likhte hai woh as it is print hojata hai html mai -->
<?php
    echo "This is a paragraph.";
?>
        </p>
<?php
    echo "<p>This is another a paragraph.</p>";
?>
    </body>

</html>