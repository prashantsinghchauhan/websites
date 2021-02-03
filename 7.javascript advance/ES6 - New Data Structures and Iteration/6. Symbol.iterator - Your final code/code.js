// iterator do taraha ki value print karta hai "key" and "value" yeh dono alag alag iterator ki traha bhi kaam karte hai and agar kisi bhi array ko iterator banana ho uske age entries() method call karlo yeh dono key and value iterator ek sath call karta hai.

// ab baat hai "symbol iterator" ki yeh "value" iterator ki tarha same taike se value print karta hai.
const basket = ['apple', 'blueberry', 'bread'];

//for of loop
for (const value of basket){
    console.log(value);
}

console.log(Symbol.iterator);
console.log(typeof Symbol.iterator);// output hai : symbol (kynki type symbol haina)

console.log(basket);

console.log(basket[Symbol.iterator]());

console.log(basket.entries());

// dono basket.entries() and basket[Symbol.iterator]() hai array iterator hi .

const it = basket[Symbol.iterator]();// jese ki humney pehle kaha yeh or value iterator dono ka print karne ka syntax same hi hai.
//const it = basket.entries();
//const it = basket.keys();
//const it = basket.values();
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

let iteration = it.next();

// while loop tab tak chalta hai tab condition wrong ni ho jati.
while(iteration.done){// MEAN YE CHECK karega ki done ki value jab tak true ni hojati tab tak loop run karo
    console.log(iteration.value);// value print karega
    iteration = it.next();// call karna 
}

//create a custom iterator of an object
const obj = {
    // hume koi bhi iterator banana hai toh "function*" generator ke through hi banega .
    *[Symbol.iterator](){
    // hmne syntax or short kardiya.
    // hm isko ase bhi likh sakte hai [Symbol.iterator]: function*(){};
        for(let i = 1; i < 3; i ++){
            yield i;// bina yeid ke iterator banana posible nahi, because ye hume bata ta hai ki kab iterator ko pause karna hai and kab content over ho chuka array mai se.
        }
    }
}

const it2 = obj[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

//treat the obj objects as iterable
// humne for loop laga ke obj call kiya taki bar bar console.log(it2.next()); call na karna padey.
for(const x of obj){
    console.log(x);
}
console.log([...obj]);// output: (2) matlab 2 elements hai  [1,2] yeh value hai.
// obj ko array bana diya spread operator laga ke "...". ab output array mai print hoga.
