//ES5
//argument koi array ka method ni hai
function printAll(){
    var arr = [];
    for (var i = 0; i < arguments.length; i ++){
        arr.push(arguments[i]);
    }
    return arr;
}
console.log(printAll(1, 2));

//ES6 using rest parameters
//"..." is se rest parameter kehte hai yeh array ki taraha kam karta hai 
function printAll2(x, ...y){
    console.log(x);
    console.log(y);
}
printAll2(1,2,3);
//output x=1 ,y= 2,3


//function pcheck firstname, lastname, 
//Passenger: firstname lastname
//Belongings: item1, item2, item3, ...

//ES6
function pCheck(firstname, lastname, ...items){
    const belongings = items.length>0? items : 'none';
    //conts var banaya condition lagayi if items.length is greater than 0 ? the print "items" else "none";
    console.log(`Passenger: ${firstname} ${lastname}.
Belongings: ${belongings}`);
}
pCheck('Mark', 'Zuckerberg', 'Bag', 'Suitcase');

//ES5
function pCheck2(firstname, lastname){
    console.log(arguments);
    var z = Array.prototype.slice.call(arguments,2);
    // isme array ke method call karke "argument" ka parameter pass karenge because hm array mai directly apply ni kar sakte arrgumnet ko isliye ye trick hai, yeh humne rest parameter ka substitute banaya hai ek tarike ka ab jabki naye version mai rest parameter hai toh in sabki jarurat ni hai.
    var belongings = z.length > 0 ? z : 'none';
    // yeh joh rest parameter kaam kata hai woh karega.
    console.log('Passenger: ' + firstname + ' ' + lastname + '\n' + 'Belongings: ' + belongings);
}
pCheck2('Bill', 'Gates', 'BackPack', 'Suitcase');