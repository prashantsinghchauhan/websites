// template literals hone se code ko likhna asan hua hai mainy strings ko
var firstname = 'Bill';
var lastname = 'Gates';

//ES5
console.log('Hello ' + firstname + ' ' + lastname + '!');//yeh purana tarika hai

//ES6
// isme apko `` is sign ka use krke iske andar likhna hai or agar variable use karna hai toh ${} asey use karna hai.
console.log(`Hello ${firstname} ${lastname}!`);

//ES5
var text5 = 'Here is \na new line';
console.log(text5);

//ES6
const text6 = `Here is 
a new line`;
console.log(text6);// new line ke liye direct simple jese typing mai use karte hai vaise hi enter press karke.