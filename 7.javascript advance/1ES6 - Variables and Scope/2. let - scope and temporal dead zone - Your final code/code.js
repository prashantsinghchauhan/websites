//ES6
//let x = 1;
//redeclaration throws an error unlike var
// let variable mai agar ap ek hi variable ko do bar declare karoge toh error ayegi jabki "var" mai asa nahi hai. magar aap usi nam se let variable ko function ke scope mai declare karnege toh kam karega. ex: function add 2 ko dekho ,let x=2; scope mai declared hai or let x=1; global bhi.

//scope
let x = 1;
function add(y){
    return y + x;
}
console.log(add(3));
//so let variables can be accessed from inside functions if declared in their outer environment just like var

function add2(y){
    let x = 2;
    return y + x;
}
console.log(add2(3));

//hoisting
//console.log(z);
//temporal dead zone
let z;
console.log(z);
z = 1;
console.log(z);
//apko sequence follow karna padega agar let variable app bina value assign kiye chor doge or usko call karoge toh error ayegi,jabki "var" mai asa nahi hai. 
//ex; console.log(z);
//     let z;  
// let variable ko agar ap sequence se aasgign let z; jisme iski value assign ni hai output udefined hoga bt isko call pehle karliya or declare badd mai toh eroor ayega
