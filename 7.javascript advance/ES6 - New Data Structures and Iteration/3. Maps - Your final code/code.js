// ISME CAR KI PROPERTIES KI KOI UNIQUE ID NI HAI THATS WHY ORDER KA NI PATA
const CAR = {
    make: 'Toyota',
    model: 'Yaris'
};

for (key in CAR){
    console.log(key);//order not guaranteed
}

console.log(typeof CAR.forEach);//OUTPUT:undefined

//MAP ES6 MAI DATA INTRODUCE HUA HAI.
// MAP MAI HUM KEY VALUE PAIR BANA SAKTE HAI [FIRT ONE IS KEY, SECOND ONE IS VALUE]
// HUM MAP MAI KUCH BHI ADD KAR SAKTEY HAI ARRAY FUNCTIONS STRING LITERALS ETC.

//Example 1
//let myMap = new Map([[1,2],[3,4]]);
//console.log(myMap);
////type
//console.log(typeof myMap);//OUTPUT:object KYUNKI MAP MAI HAR CHIJ DEFINE HOTI HAI.
//console.log(myMap.delete(1));//return true if successful
//console.log(myMap);
//myMap.clear();// IS SE SARE ELEMENT DELETE HOJAYENGE MAP KE ANDAR
//console.log(myMap);


//Example 2
const [x, y, z] = [1, NaN, 3]; // VARIABLES 
const LANGUAGE = {
    name: 'JavaScript',
    version: 'ES6'
};// OBJECT 
const add = (x, y) => x + y;// FUNCTION
const str1 = "build interactive websites";//STRING
const str2 = "NaN is not equal to itself, but this changes when it comes to Maps";// STRING
const arr = [2, 3];// ARRAY


let myMap = new Map();
console.log(myMap);

//set key values
myMap.set(x, z);// "X" KEY HAI "Z" USKI VALUE ,VAISE X KI VALUE "1" HAI BUT AB "3" HOGI BECAUSE "Z" USKI VALUE HAI, HUMNE X KO Z ASSIGN KIYA HAI.
console.log(myMap);//OUTPUT: 1,3 = 1 KEY 3 VALUE.
myMap.set(LANGUAGE, str1);// SAME HAI LANGUAGE "KEY" STR1 "VALUE"
console.log(myMap);
myMap.set(add, arr);
console.log(myMap);
myMap.set(y, str2);
console.log(myMap);

//get values/check if they exist
// VALUE SE BHI AcCESS KAR SAKTE HAI AND CHECK BHI KAR SAKTE HAI KI YEH ISKI VALUE HAI YA NI
console.log(myMap.get(x));// GET VALUE SHOW KAREGA OUTPUT= 3
console.log(myMap.has(1));// OUTPUT TRUE KAHEGA BECAUSE X KI VALUE 1 HAI
console.log(myMap.get(LANGUAGE));
console.log(myMap.has({
    name: 'JavaScript',
    version: 'ES6'
}));//objects are not equal BECAUSE AB LANGUAGE KI VALUE HUMNE ALAG MAP KI HUI HAI SO OUTPUT= FALSE AND OBJECT EQUAL NI HOTE MAP MAI.

console.log(myMap.get(y));
console.log(myMap.get(NaN));
console.log(y === NaN);//NaN is not equal to itself but this changes when it comes to Maps.

//iteration with for of
for (const [key, value] of myMap){
    console.log(`Key: ${key} -> Value: ${value}`);
}

//forEach
myMap.forEach((key, value) => {
    console.log(`Key: ${key} -> Value: ${value}`);
});

//iterator

//const k = myMap.entries();// mymaps ko iterator bana diya "entries(yeh ek array iterator method hai)" method call krke ,yeh key value dono dikhata.s
const k = myMap.keys();//agar khali key dekhni ho toh "key" ko call karlo
//const k = myMap.values();// agar khali value dekhni ho toh "value" ko call karlo.
console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());





