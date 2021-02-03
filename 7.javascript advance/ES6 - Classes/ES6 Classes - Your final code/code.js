//ES5

//Superclass
function phone(make, model, warranty, colour){//making constructor in es5
    this.make = make;
    this.model = model;
    this.warranty = warranty || 24;// assign default value.
    this.colour = colour || 'white';
}

phone.prototype = {// method for extending warranty.
    extendWarranty: function(x){
        this.warranty += x;
    }  
};

//Subclass
function smartPhone(make, model, OS){
    this.make = make;
    this.model = model;
    this.OS = OS;
    //phone.call(this, make, model)// inheriting the phone class property
}
smartPhone.prototype = new phone('Samsung', 'S6');// isko bhi use karke sari properties inherit kar sakte hai
//smartPhone.prototype = Object.create(phone.prototype);// aap isko bhi use karke sari properties inherit kar sakte ho 
smartPhone.prototype.constructor = smartPhone; // magar phone ke prototype ke constructor ko use krney ke liye smartphone mai mention karna jaruri hai nahi toh prototype wala method kaam ni karega.

var mySmartphone = new smartPhone('Apple', 'iphone 7', 'IOS 10');
console.log(mySmartphone);
console.log(mySmartphone.extendWarranty);
mySmartphone.extendWarranty(3);//extnding warranty by 3
console.log(mySmartphone);


//ES6
class phone6{// making class in es6
    constructor(make, model, _warranty, colour){ //" _warranty" we declare warranty with "_" underscore due to stoping the infinity loop during calling of "set" method
        this.make = make;
        this.model = model;
        this._warranty = _warranty || 24;
        this.colour = colour || 'white';
        this.log = [];//yeh isliye use krte hai taki dekh sake kitni bar ktya change hua.
    }
    extendWarranty(x){
        this.warranty += x;
    }
    
    //static method
    static defaultPhone(){//static method classs ka instance(object) ni hota, but bina class name ko lagaye is method ko call bhi ni kar.saktey.
        // or "new" obj class ka name laga ke hi create hoga agar class ke methods use karne hai.
        return new phone6('Apple', 'iphone 6'); //creating obj for static method using class name where he inherit all the properties of class bt at the same time it is not an class object.
    }
    
    
    //setter
    // value set krne ke liye hota hai.
    set warranty(x){// hum warranty ko bina "_" underscore ke tab hi use kar sakte hai jab usko "set" method ke samne likhre ho or use call kar re ho "myphone6.warranty" baki sab jagha "_warranty" ase use karenge.
        this.log.push(`warranty set to ${x}`);//yehjab bhi change hoga toh iski ek log file humesa log mai save rahegi.
        this._warranty = x;
    }
    
    //getter
    // value ko call krne ke liye hota hai.
    get warranty(){
        console.log(`get warranty called`);
        return this._warranty;
    }
}
const myPhone6 = new phone6('Apple', 'Iphone7', 11, 'black');
console.log(myPhone6);

console.log(typeof phone6);//function

//static methods not attached to class instances(object).
console.log(myPhone6.defaultPhone);// ap isko class ke obj ke sath call ni kar sakte
console.log(phone6.defaultPhone);// yeh batayega ki iske andar ky ky hai.
console.log(phone6.defaultPhone());// apko class ka name lagana padega call krne ke liye.

console.log(Object.create);
const obj = {name: 'John'};
console.log(obj.create);


//setters and getters
myPhone6.warranty = 30;//calls the setter
myPhone6.warranty = 40;//calls the setter
myPhone6.warranty = 30;//calls the setter
console.log(myPhone6.warranty);//calls the getter
// hum warranty ko bina "_" underscore ke tab hi use kar sakte hai jab usko "set" method ke samne likhre ho or use call kar re ho "myphone6.warranty" baki sab jagha "_warranty" ase use karenge.
console.log(myPhone6.log);// log dekhne ke liye kitni bar chnage hua warraty property isliye usko log mai dala taki jab bhi chage ho hum dekh sake.


//inheritance - extends - super
class smartPhone6 extends phone6{// humne class "phone6" ki sari properties inherit ki "extends" keyword laga ke.
    constructor(make, model, OS){// make or model phone 6 mai define hai bus apko super laga ke uske braces ke andar mention karna hai toh aap in dono properties ko use kar sakte hai.
        super(make, model);// hume joh bhi property use karni ho uske agey "super" keyword laga ke properties ko likh do fir use kar sakte ho
        this.OS = OS;
    }
    extendWarranty(x){// usi namm se method banaya joh ki iski parent class mai hai bus uske syntax  mai "super" keyword laga ke usey call kar liya.
        super.extendWarranty(x);// super laga ke us method ki properties inherit kar li.
    }
}

const mySmartPhone6 = new smartPhone6('Apple', 'Iphone 7', 'IOS 11');
console.log(mySmartPhone6);
mySmartPhone6.extendWarranty(10);
console.log(mySmartPhone6);

console.log(mySmartPhone6 instanceof smartPhone6);//true
console.log(mySmartPhone6 instanceof phone6);//true

// joh humne "mySmartPhone6" obj banya yeh dono class ka object hoga. but parent class ka object parent class ka object hoga. 










