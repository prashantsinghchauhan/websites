//ES5
var x = 1;
var y = 2;

//ES6
const [a, b] = [3, 4];
console.log(a);
console.log(b);

//process return values in array format
function processString(x){
    return [x, x.length];
}

console.log(processString('hello'));

//result
//value = result.value
//length = result.length

const [value, length] = processString('hello');
console.log(value);
console.log(length);

//swap values of two variables
//var c = 1;
//var d = 2;
//ES5
//var e = c;
//c = d;
//d = e;
//console.log(c, d);

let [c, d] = [1, 2];
[c, d] = [d, c];// aap swaping easily kar saktey ho es6 mai.
console.log(c, d);

//default values
let list = ['London', 'England'];
let [city, country = 'USA'] = list;// aap default value aram se set kr sakte hai jab variable call kr re ho uske age "=" lga do bus n value assign kar do. ex: agar list mai 2 value mai se jon si bhi value nahi hogi or uski default value assign hai toh woh show hojayegi
i
console.log(city, country);

//ES5
//var city = list[0];
//var country = list[1] === undefined ? 'USA' : list[1];// es6 mai yeh default value assign krne ka tarika hai array mai or check.
//console.log(city, country);


