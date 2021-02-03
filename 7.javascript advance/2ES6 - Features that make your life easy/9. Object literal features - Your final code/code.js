//object literal features

//method definition
const phone = {
    //yeh ase bhi define hosakta tha "ring:function(i){};" bt koi jarurat nahi ase likhne ki
    //jisme "ring" phone naam ke object ki property hai.
    ring(i){
        console.log("beep ".repeat(i));//repeat function ko call krliya joh value repeat karta hai uske call krte wakt uske parenthesis mai pass karo utni bar value print hogi.
    }
};
phone.ring(2);

//computed property keys
const x = 'make';
function g(){
    return 'ring';
}
const phone2 = {
    [x]: 'Samsung',//  make : samsung
    [g()](i){// [isme direct function call kiya] joh string print karega 'ring' nam ki= ring(i).
        console.log("beep ".repeat(i));
    }
    //phone2 ki properties ko bhar banaya or unki value andar call karayi "[]" square braces ke through.
};
console.log(phone2);
phone2.ring(4);

//new Object methods: assign
Object.assign(phone2, {warranty: 24});// object mai nayi property add karni ho toh ase karenge.
console.log(phone2);

