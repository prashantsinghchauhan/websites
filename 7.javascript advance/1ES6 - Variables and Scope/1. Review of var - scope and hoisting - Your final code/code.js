//ES5: we declared variables using var
var x = 1; //global scoped

//variables were global scoped or function scoped

function add1(y){
    var x = 2; //function scoped
    return y + x;
}
console.log(add1(3));//5

function add2(y){
    return y + x;
}
console.log(add2(3));

//They were also hoisted
//yaha z ko call krliya but define bad mai kiya isliye output undefined aaya z ka
console.log(z);//undefined, no error thanks to hoisting
var z = 1;
//yaha pe wapas z ko call kiya output 1
//mean apko sequence follow kana hai.
console.log(z);