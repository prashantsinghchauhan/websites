
//why do you need symbols:
// symbol syntax: synbol('add description about symbol, jaruri nahi ki define kare hi kare apne upar hai')
// symbol have unique identity due to this you can use same property twise or thrise as you need.

const OFFSTATE = Symbol('off');
const ONSTATE = Symbol('on');
const feature1 = Symbol('feature');//in this we use symbol for "feature" where assigning the variable feature1 and 2.
const feature2 = Symbol('feature');
let car = {
    make: 'Audi',
    [feature1]: 'cruise control',// in both "feature1" and "feature2" the value "feature" is same or ab hum ise use kar saktey hai
    [feature2]: 'air-conditionning',
    state: ONSTATE,//hm "ONSTATE" ko direct call ni kar sakte isliye humne symbol use kara, agar nahi karte toh 'off' krke declare karna padta so afte that hume asey declare karne ki jarurat nahi "state: 'on'".
    speed: 20,
    turnon(){
        this.state = ONSTATE;
    },
    turnoff(){
        this.state = OFFSTATE;
    },
    accelerate(){
        if(this.state === ONSTATE){
            this.speed += 10;
        }
    }
    
};

console.log(car); //only one feature is listed
//this can be solved by making the object keys unique
car.accelerate();
console.log(car);

//Symbols are new in ES6. They are primitive type.
const mySymbol = Symbol('Symbol Description');
console.log(mySymbol);
console.log(mySymbol.toString());
//console.log(mySymbol + 'hello');


const symbol1 = Symbol('a');
const symbol2 = Symbol('a');
console.log(symbol1 === symbol2);//false, dono symbol ki value same jarur hai bt id unique hai isliye output: false hai.
console.log(typeof symbol1);//symbol


console.log(Object.keys(car));
console.log(Object.getOwnPropertyNames(car));
for (const key in car){
    console.log(key);
}
// agar apko yeh dekhna hai ki apke object mai symbol use hue hai ya ni toh joh upar tarike hai unse possible nahi hai iske liye special method hai joh niche define kiya gayahai

//OwnPropertySymbols
// is se ap dekh saktey hai ki apke object mai symbol hai ya nahi
console.log(Object.getOwnPropertySymbols(car));