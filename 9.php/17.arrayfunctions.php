<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Array functions</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            h1{
                color:purple;   
            }
        </style> 

    </head>
        <body>
            <div class="container-fluid">
                <h1>Array Functions:</h1>
                <div>
<?php
$shoppingBasket1 = array("bread", "milk", "eggs", "bread");
$shoppingBasket2 = array("apple", "banana", "orange");
$shoppingBasket = array_merge($shoppingBasket1, $shoppingBasket2);//merging two arrays
echo "<p>Shopping Basket:</p>";
print_r($shoppingBasket);
                    
echo "<p>Number of items in Shopping basket: </p>" . count($shoppingBasket);//count elements in array 


$count = array_count_values($shoppingBasket);// count according to values , agar bread array mai 4 jgha aara hai toh bread[4] dikhaega ,yeh elements kitni bar aaya hai array mai yeh,yeh count karta hai.
echo "<p>Basket Count</p>";
print_r($count);
echo "<p>Number of bread iteams in Basket: </p>" . $count["bread"];


if(in_array("bread", $shoppingBasket)){// "in_array" array mai kya yeh  element hai yeh check karne ke liye is function ko use krte hai.
    echo "<p>There is bread in the basket.</p>";
}else{
    echo "<p>There is no bread in the basket.</p>";   
}

array_push($shoppingBasket,"yogurt");// "array_push" array mai add karte hai is function ki help se.
echo "<p>Shopping Basket after adding yogurt: </p>";
print_r($shoppingBasket);
         
if($_GET["submit"]){
    /*
Ek get function banaya array mai element karne ke liye user ke through
woh input box mai naam likhega then submit pe click karega element add ho jayega array mai.
*/    
    if($_GET["item"]){
        array_push($shoppingBasket,$_GET["item"]); 
    }
}
echo "<p>Shopping Basket:</p>";
print_r($shoppingBasket);

array_splice($shoppingBasket, 0, 4,array("mango", "kiwi"));// yeh method insert karta hai array mai elements and delete bhi , "0" = starting value ,ending value jaha tak delete karna chaho waha tak value dal do , abhi isme 4 tak kara hai matlab 0 se 3 tak element delete ho jayenge yeh -1 karke chalta hai, and then add krdiye elements array("mango", "kiwi").
echo "<p>Shopping Basket:</p>";
print_r($shoppingBasket);
/* 
sort() - sort arrays in ascending order
rsort() - sort arrays in descending order
asort() - sort associative arrays in ascending order, according to the value
ksort() - sort associative arrays in ascending order, according to the key
arsort() - sort associative arrays in descending order, according to the value
krsort() - sort associative arrays in descending order, according to the key

*/
                    
sort($shoppingBasket);
echo "<p>Shopping Basket sorted in ascending order:</p>";
print_r($shoppingBasket);

$carMakes = array("BMW"=>"X5", "Audi"=>"A6", "Mercedes"=>"CLS");
echo "<p>Car makes:</p>";
print_r($carMakes);
asort($carMakes);
echo "<p>Car makes sorted in ascending order by value:</p>";
print_r($carMakes);
ksort($carMakes);
echo "<p>Car makes sorted in ascending order by keys:</p>";
print_r($carMakes);
?>
                    <form method="get">
                        <label for="item">Add item to shopping Basket:</label>
                        <input type="text" name="item" id="item">
                        <input type="submit" name="submit" value="Submit">
                    </form>
                </div>
            </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        </body>
</html>