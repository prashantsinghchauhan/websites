//ES6 object destructuring
//apka syntax kafi aasan hogya hai es6 mai 
const person = {name: 'John', age: 41};
const {name: n, age: a} = person;
console.log(n, a);

//same as {name:name, age:age}
const {name, age} = person;
console.log(name, age);

//deep matching
const {country: c, address:{postcode: p, housenumber: hn}} = {country: 'UK', address:{postcode: 'S54ZZ', housenumber: 1}};
console.log(c, p, hn);


//default values
const obj = {city: 'London', country: 'UK'}
const {city, country = 'USA'} = obj;
console.log(city, country);
//ES5
//if(obj.country === undefined){}else{}

function process(x){
    return {value: x, length: x.length}
}
const {value, length} = process('hello');
console.log(value, length);

//ab jesa ki hum dekh sakte hai kitni aasani se humney string ki value or length function bna ke dekhli jabki e5 mai hume isi ke liye kafi code likhna padta.
//Note: {curly braces mai object hote hai} , [square brackets mai arrays]