//a set is an object storing a collection of only unique values not keys
// set mai koi bhi value duplicate store ni kar sakte or same sab unique hongi or karoge toh show ni hongi.
let mySet = new Set();
mySet.add('John');
mySet.add(1);
mySet.add(1);
const phone = {
    make: 'Samsung',
    model: 'S8'
};
mySet.add(phone);
mySet.add(document.body);// this is an system body element 
console.log(mySet);

////pass an iterable object to the set constuctor
let mySet2 = new Set(['hi', 1, 1, 'John']);// dont take 1 two time 
console.log(mySet2);
let mySet3 = new Set('hello');
console.log(mySet3);// output: "h", "e", "l", "o"

//similar methods to Maps
console.log(mySet.has(phone));//checking true.
console.log(mySet.has({// output false beacause objects are not equal.
    make: 'Samsung',
    model: 'S8'
}));
console.log(mySet.size);// show set size
//mySet.delete(1);// deleting  1 data set
//console.log(mySet);
//mySet.clear();// deleting all data from set
//console.log(mySet);

//iteration with for of loop
for(const value of mySet){
    console.log(value);
}

for(const [key, value] of mySet.entries()){
    console.log(key, value);
}
for(const key of mySet.keys()){
    console.log(key);
}
for(const value of mySet.values()){
    console.log(value);
}

//iteration with forEach
mySet.forEach((value) => {
    console.log(value);
});


//from

//...
const myArray = [...mySet];// converting set in an array
console.log(myArray);


//Challenge: intersection and difference
//mySet
//mySet2
//intSet
//diffSet
console.log([1,2,3].filter((item) => item > 2));// humne array ka filter method call kiya yeh [1,2,3] mai se "3" ko print karega because condition is item is gearter than 2.
console.log(mySet);
console.log(mySet2);

////intersection "dono set ke bich me kosi comon chije hai"
const intArray = [...mySet].filter((item) => mySet2.has(item));// my set ko array mai convert kiya array ka filter method call kiya then usme arrow function and "myset" or "myset2" mai common item on se hai check kiye
console.log(intArray);
const intSet = new Set(intArray); // "inset" object bnaya usme "intarray" pass kiya then use call kiya.
console.log(intSet);

//difference (dono mai kosi chijey uncommon hai)
const diffArray = [...mySet].filter((item) => !mySet2.has(item));
console.log(diffArray);

const diffArray2 = [...mySet2].filter((item) => !mySet.has(item));
console.log(diffArray2);

const difftSet = new Set(diffArray.concat(diffArray2));// 2 set ek sath constructor mai pass ni honge toh concat ka use kiya or diffset ke new obj mai store kiya and call kiya.
console.log(difftSet);



