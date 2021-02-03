//traditional for
//yeh purana for loop hai
for(let i = 0; i < 3; i ++){
    console.log(i);
}

for(let i = 0; i < 3; i ++){
    if(i == 1) break;
    console.log(i);
}

//forEach
const CARMAKES = ['Audi', 'BMW', 'Ford'];
//humne foreach loop mai arrow function "() =>"call kiya jisme "element" carmakes ke content ko refer krta hai and "index" unki position ko.
CARMAKES.forEach((element, index) => {
    console.log(`Make ${index + 1}: ${element}`);
});

//ES6 for of:
for (const x of CARMAKES){
//    if(x == "BMW") break;//yeh "for of" loop ko bmw ke baad hi close kardega.
    console.log(x);
}