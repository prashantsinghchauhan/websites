//you can use the built in file system module in Node.js to manage files and folders: read/write/etc.
const fs = require('fs');
//built in file system ko import kiya
const mars = 'mars.txt';
//text file ko variable mai dala joh ki created hai current folder mai.
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';

//synchronous way: the following code is blocking, JS does not move to the next line until the current line is executed


//check if mars exists:
console.log(fs.existsSync(mars));

//read mars
try{
//try block mai dala taki koi error ho toh pakad ke catch ke "err" variable(vaise variable keh lo ya object dono ki ek hi functionality hai) mai daal de.
    let data = fs.readFileSync(mars, 'utf-8');
    //file read karega fs.readFileSync(yaha file name, yaha type konsa charsset chahiye);
    console.log(`
${mars} content:
${data}
`);
}catch(err){
    //err mai joh error value ayegi try block mai se woh display hogi yaha pe.
    console.log(`error:
${err}`);
}

//create jupiter or override content:
try{
    fs.writeFileSync(jupiter, 'Jupiter has the shortest day of all planets.');
    //yeh overwrite karega fs.writeFileSync(file name, 'string type of data dalo ab yeh file mai chala jayega');
}catch(err){
    console.log(`error:
${err}`);
}
//read jupiter
try{
    data = fs.readFileSync(jupiter, 'utf-8');
    console.log(`
${jupiter} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}

//override content of venus:
try{
    fs.writeFileSync(venus, 'this is some text');
    //overwrite mai purana sara data delete hojata hai or naya add hojata hai.
}catch(err){
    console.log(`error:
${err}`);
}

//read venus
try{
    data = fs.readFileSync(venus, 'utf-8');
    console.log(`
${venus} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}


//append content to jupiter
try{
    fs.appendFileSync(jupiter, '\nsome text.');
    //append karega data jupiter mai matlab naya data add karega purana wala bhi wahi rahega,"\n" iska matlan new line.
}catch(err){
    console.log(`error:
${err}`);
}


//read jupiter
try{
    data = fs.readFileSync(jupiter, 'utf-8');
    console.log(`
${jupiter} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}


console.log('hello');
//sync mode mai jab tak file systemwala kaam complete ni hojata tab tak dusra kuch execute ni hoga ,hoga toh sbse last mai.


