//Use the fs module the asynchronous way through callback functions.
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';


//JS code in this case is unblocking, meaning JS can move to the next line while an fs operation is waiting for the callback to be executed.



////check if a file exists: method 1
//fs.stat(mars, err => {
//    if(err){
//        console.log(err);
//    }else{
//        console.log(`${mars} exists!`)
//    }
//});
//
////change the permissions of mars.txt to: 0444
//fs.chmod(mars, 0777, err => {
//    if(err){
//        console.log(`Error:
//${err}`);
//    }
//});
////check if a file exists: method 2
//fs.access(mars, fs.constants.W_OK, err => {
//    if(err){
//        console.log(`Error:
//${err}`);
//    }
//
//});


//read/write/append:


//Using Promises
//isme hume bar bar call back function bana ne ki jarurat nahi hai.
//readFile
//console.log
//appendFile
//readFile
//console.log
//catch statement
//fs.promises.writeFile(jupiter, 'I am learning Node!')
//.then(() => fs.promises.readFile(jupiter, 'utf-8'))
//.then(data => {console.log(`${jupiter} content: 
//                ${data}`);})
//.then(() => {fs.promises.appendFile(jupiter, '\nIt is so fun!')})
//.then(() => fs.promises.readFile(jupiter, 'utf-8'))
//.then(data => {console.log(`${jupiter} content: 
//                ${data}`);})
//.catch(err => {console.log(`Error:
//${err}`);});

//use async await
// kaam sabka ek hi hai bus syntax alag hai yeh "ES7" ka tarika hai
// isme hume bar bar callback function banane ki jarurat nahi hai.
async function f(){
    await fs.promises.writeFile(jupiter, 'I am learning Node!');
    let data = await fs.promises.readFile(jupiter, 'utf-8');
    console.log(`${jupiter} content: 
                ${data}`);
    await fs.promises.appendFile(jupiter, '\nIt is so fun!');
    data = await fs.promises.readFile(jupiter, 'utf-8');
    //yaha naya variavle isliye declare ni kiya bcs variable  ki propertie hai agar nayi value aayi toh purani wali delete hojayegi matlab data mai joh pehle value thi ab woh delete joh ab hai woh rahegi ,is se naya var declare krne ki jarurat nahi, but yeh experiment ke liye theek hai baki har kisi file ke liye naya car hi lo.
    console.log(`${jupiter} content: 
                ${data}`);
}

f().catch(err => {console.log(`Error:
${err}`);});
// function call kiya usem catch method lagadiya.

console.log('hello');
