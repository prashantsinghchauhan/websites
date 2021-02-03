//MOst important points

//function apne most preceding ko follow karega matlab agar hum kisi function ko call karenge toh woh function se pehle konsa block declare hai uske hisab se output dega, jabki agar kisi block ke andar ek block oor hai mean (sub block) or usko usi ke andar call ni kiya toh woh apne scope ke bhar accessable nahi hai. 

//create a separate scope first using a block
{
    
//    greet();//hi
    // ab humne pehle hi call krliya function toh error ayega sequence matter karta hai.
    function greet(){
        console.log('hi');
    }
    greet();//hi
    
    {
        // sub block
        function greet(){
            console.log('hello');
        }
        // sub block = block ke andr block ko sub block kehte hai 
// ab upar example mai sub block bana rakha hai jisme function hai or usko call bhi ni kara toh woh show bhi ni hoga.kyunki sub block ko app sub block mai hi call kar sakte hai, uske bhar ni.
    
    }
    greet();//hi
    // yeh joh greet function hai iska output "hi" isliye hai kyunki sub block mai yeh access ni kar sakta toh ab yeh second preceding block ko dekhega and uske hisab se output dega.
    
}

greet();//hi

function greet(){
    console.log('hi hi');
}

greet();//hi
//MOST IMPORTANT POINT
//joh yeh wala greet hai iska output "hii" is liye hai kyunki iska preceding block upar wala hai yeh nahi joh iske close hai.
// toh function block ko follow karega kyunki yeh function global hai block ke andar nahi toh iska output nahi dega, kyunki sareey functions greet naam se hai toh joh function block ke andar nahi usko chor dega. toh iska output nahi diya .
// han agar is function ka naam kuch or hota or usi naam se call krte toh call krleta, magar function same naam se hai or yeh wala function same naam se hai toh yeh upar wala follow karega. yeh wala ni.


{
    function greet(){
        console.log('hello');
    }
    greet();//hello
    
    {
        //sub block
        function greet(){
            console.log('hi there');
        }
        greet();
        // ab yeh sub block output dega kyunki isko iske block ke andar call kiya hai
    }

}


greet();//hello 
// yeh joh greet function hai iska output "hi" isliye hai kyunki sub block mai yeh access ni kar sakta toh ab yeh second preceding block ko dekhega and uske hisab se output dega.
{
    function greet(){
        console.log('hi hello');
    }
}
greet();


