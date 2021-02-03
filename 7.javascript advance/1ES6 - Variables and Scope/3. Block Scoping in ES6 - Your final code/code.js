let y = 2;

{
    let x = 1;
    let z = 2;
    console.log(z);//2
}

{
    //console.log(x);//error
    let z = 4;//no redeclaration error, variables are in different scopes now.
    console.log(z);
    console.log(y);//2
}
// E6 mai block alag alag hote hai ,agar koi bhi let variable block mai declare kar rakha hai toh isko bhar asess ni kar skte .

//ES5 using IIFE (fake scoping)

//(function(){
//    let x = 1;
//    let z = 2;
//    console.log(z);
//});
//(function(){
//    let z = 4;
//    console.log(z);
//    console.log(y);
//})
//"(fake scoping)" round braces mai agar koi function define karo toh use fake scopping kehte hai .

//let mark = 80;
//if(mark > 50){
//    let pass = true;
//}else{
//    let pass = false;
//}
//console.log(pass);
//
//let mark = 80;
//if(mark > 50){
//    var pass = true;
//}else{
//    var pass = false;
//}
//console.log(pass);
// jese ki humne pata hai "{}" curly braces mai joh bhi hoga woh seperate hoga matlb curly braces ko block scope kehte hai.
// toh block scope mai hum chahey "var" ho ya "let" variable hum use access ni kar sakte, kyunki woh seperate hai.

//to fix this:

let pass;
let mark = 80;
if(mark > 50){
    pass = true;
}else{
    pass = false;
}
console.log(pass);
// ab humnney "pass" variable global assign kiya hai ab hum isko access kar sakte hai.
