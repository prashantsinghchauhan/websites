//ES5

function increment(x, y){
    return (y == undefined)? (x + 1): (x + y);
    // yeh line ase kaam kregi 
    //yeh if statement hai " (y == undefined)?" (x + 1) or yeh else statement: (x + y)
    // es5 mai bina naam assign kiye symbols se kaam hojata hai jese "else" ka symbol ":" yeh hai. or es6 mai is se bhi kam syntax ki jarurat padti hai
    
}

console.log(increment(5));
console.log(increment(5, 3));


//ES6
const increment2 = (x, y = 1) => x + y;
// yaha increment2 naam ka const variable mai function passs kiya "y" ki default value "1" assign ki then direct "=>" laga ke logic likh diya.
console.log(increment2(5));
console.log(increment2(5, 3));


//using destructuring
function greet([firstname, lastname = '']){ // array li 2 parameter pass kare "lastname" ki default value "none" rakhi
    console.log(`hello ${firstname} ${lastname}`)
};
greet(['Bill']);
//output mai ab agar last name nahi bhi mention hoga toh naam "bill" hi print hoga kyunki default value none hai.

function addup({item = 'bananas', price = 0, quantity = 0} = {}){//whole ki deault value none assign karni ho toh "{} = {}" krdo.
    console.log(`Please pay $${price * quantity} for ${quantity} ${item}`);
}

addup({item: 'bananas', price: 1, quantity: 5});
addup({});// isme humne default value none assign ni ki hai bus parameters ki value {} curly braces mai mention hi ni ki isliye joh default value set ki hai woh show karega.

addup();// whole ki default value humne none assign kardi "{item = 'bananas', price = 0, quantity = 0} = {}".

// agar whole ki default value none assign nahi karoge toh direct "addup()" call nahi kar sakte.
