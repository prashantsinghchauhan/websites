// what are clousers?
// clousers combinations hai functions ka jisme function ke andar ek or function hota hai joh ki apne parent function ke scope ki value use kar sakta hai (mainly jab inner function apne outer function ki value use krta hai use clouser kehte hai)


//for(var i = 0; i < 3; i ++){
//    document.getElementById(i).addEventListener('click', function(){
//        console.log(i);
//    })
//}

//Solution in ES5: use a closure
//var f = function(x){
//    return function(){//we create a inner function , a clouser
//        console.log(x);// uses the value "x"
//    }
//}
//
//for(var i = 0; i < 3; i ++){
//    document.getElementById(i).addEventListener('click', f(i))
//}
//f(0), f(1), ...

// jab hum "var" use krte hai tab yeh single iteration hi use krta hai isliye last value print hoti hai isliye humme clouser use karna padta hai e5 mai
//Now try with let:


for(let i = 0; i < 3; i ++){
    document.getElementById(i).addEventListener('click', function(){
        console.log(i);
    })
}
// joh "let" variable hai woh har value ke liye nayi iteration use karta hai isliye hume closers ki jarurat ni padti es6 mai agar h