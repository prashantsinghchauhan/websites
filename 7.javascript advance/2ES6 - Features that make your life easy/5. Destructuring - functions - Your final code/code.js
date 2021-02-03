//ES5
function f(arr){
    console.log('hello ' + arr[0] + ' ' + arr[1]);
}
f(['Bill', 'Gates']);// hmko es5 mai itna kuch define krne ki jarurat padi

//ES6
//parameter matching
function g([firstname, lastname]){ // jabki es6 mai "[square brackets lga ke array mai variable pass kaediye]"
    console.log(`hello ${firstname} ${lastname} !`);// and template literals ka use krke call krliya.
}
g(['Bill', 'Gates']);

function h({firstname, lastname}){// yeh object destructuring hai .
    console.log(`hello ${firstname} ${lastname} !`);
}
h({firstname: 'Mark', lastname: 'Zuckerberg'});


//note {}= object destructuring isme object honge , []= isme array honge.
