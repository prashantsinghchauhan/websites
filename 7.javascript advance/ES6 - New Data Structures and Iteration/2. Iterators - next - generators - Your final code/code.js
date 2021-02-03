const BASKET = ['strawberry', 'apple', 'yogurt', 'bread'];


//iteration
for(const x of BASKET){
    console.log(x);
}

//BASKET is iterable

//an iterator
//next() -> {value: , done: }// yeh ek iterator hai joh do value print karta hai value and done

//built in method creating an iterator out of an array
//let arrIt = BASKET.entries();//yeh method hai joh "key" and "value" pair print karta hai array iterator ke.
const arrIt = BASKET.values();// yeh ek iterator hai joh value print krta hai array ki.
//let arrIt = BASKET.keys();//yeh ek iterator hai joh key(index) print krta hai array ki.
console.log(arrIt);
console.log(JSON.stringify(arrIt.next())); // "JSON.stringify" method string mai output show karega "arrit.next()" ka, agar nahi lagayenge  "JSON.stringify" toh joh system generated output hai vesa ayega.
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));

//let's create a function that makes an iterator out of an array
//yeh ek function hai joh ki iterator ki traha kaam karta hai jese ki "next()" iterator.
const createIterator = array => {
    let index = 0;
    return {
        next(){
            if(index < array.length){
                return{
                    value: array[index++],
                    done: false
                }
            }else{
                return {
                    done: true
                }
            }
        } 
    };
};

const arrIt2 = createIterator([1,2,3]);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());


//generator functions: factory of iterators
// "function*" yeh generator function hai joh iterator create karta hai

function* genIterator(){
    console.log('running');
    yield 1; //pause generator
    console.log('running');
    yield 2;
}
const it = genIterator();
console.log(it.next());//output: value =1 , done : false
console.log(it.next());// output: value =2 , done : false
console.log(it.next());//output: undefined , done : true

// jab hum last bar call karenge toh "done" property hai iterator ki woh true ho jayegi because yield ek tarika ka notification hai iterator ke liye jab woh nahi hoga toh iterator ko pata chanl jayega ki array mai koi value nahi hai then woh complete ho jayega.


