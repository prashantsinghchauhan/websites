//Why do you need to create arrays from other objects?
//because it simplify the works.
let arr = [1, 2, 3];
console.log(arr.map(x => x * 2));//map ko call krke arr ko multiply krdiya.
//vese toh map function do parameter leta hai value or index, but isme need ni hai.
let str = 'hello';
console.log(arr.map);// array mai toh map kaam karega .
console.log(str.map);// bt str mai direct nahi kaam karega.
//ES5
// string mai aray kam krne ke liye itna bada code likhna padta hai s5 mai
console.log(Array.prototype.map.call(str, function(x){
    return x + 'a';
}));

const collection = document.getElementsByClassName('blue');//selecting divs from html which have blue class.
console.log(collection.length);
console.log(collection);
console.log(collection.slice); //output: undefined
//array ka slice method direct kaam ni karega collection mai, bt es6 mai aasani se collection ko array mai convert karke hm uska mthod laga sakte hai
//ES5:
console.log(Array.prototype.slice.call(collection, 1, 3));

//Create an array from a collection
console.log(Array.from(collection));// hmne collection ko array bana diya "array.form()" ka use karke.
//Create an array from a string
console.log(Array.from(str));// string ko array mai convert kara.

//Create an array from function arguments
function g(x, y){
    console.log(arguments);
    console.log(Array.from(arguments));// arguments ko array mai convert kara
}
g(1, 2);

//use the optional map function
let str2 = 'strawberry';
// string ko array mai convert karke usme array ke method use kiye.
console.log(Array.from(str2, x => x + ','));//hmne string ko array banaya then usme arrow function lagaya.
//hm isko ase bhi use kar sakte hai
//console.log(Array.from(str2, function(x){ return  x + ','; }));
console.log(Array.from([1, 2, 3], x => x * 2)); 
// humne array ke andar direct ek array argument pass ki and arrow function lagaya.

//from any object with a length property
const obj = {length: 3};
console.log(Array.from(obj));// array object banaya ek simple object se, jisme 3 empty space hai
console.log(Array.from(obj, value => 1));//sabki value 1 assign ki
console.log(Array.from(obj, (value, index) => index * 2));//isme index ko 2 se mutiply kardiya output: [0,2,4].


//create an array from Sets and Maps (iterable objects)
let mySet = new Set();
mySet.add('John');
mySet.add(1);
console.log(mySet);
console.log(mySet.size);
console.log(Array.from(mySet));//converting set into an array.


const myMap = new Map([[1,2], [3,4]]);
console.log(myMap);
console.log(Array.from(myMap));//converting map into an array.













