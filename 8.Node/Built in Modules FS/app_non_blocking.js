//Use the fs module the asynchronous way through callback functions.
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';


//JS code in this case is unblocking, meaning JS can move to the next line while an fs operation is waiting for the callback to be executed.



//check if a file exists: method 1
//fs.stat() is method se aap inforation return kar saktey ho file or directory ki.
fs.stat(mars, err => {
    if(err){
        console.log(err);
    }else{
        console.log(`${mars} exists!`)
    }
});

//change the permissions of mars.txt to: 0444
fs.chmod(mars, 0777, err => {
    //fs.chmod se permission assign kar sakte hai files ko 0777 ka matlab hai read ,write ,execute sabki permission hai.
    if(err){
        console.log(`Error:
${err}`);
    }
});
//check if a file exists: method 2
fs.access(mars, fs.constants.W_OK, err => {
    // existence check krta hai fir permisiion ke sath access krta hai, iska matlab hai "fs.constants.W_OK" "W_OK ek flag hai or bhi hote hai sabki apni apni property hai iski written ki hai" file can be written by the calling process ,fs.access(path,mode(),callback function)
    if(err){
        console.log(`Error:
${err}`);
    }

});

// yeh joh pura syntax hai yeh pyramid hell kehlata hai kyunki isme try catch itni bar laga hai uska shape pyramid jesa hojata hai bt try catch ka yeh method ES6 tak hi hai agey naye updated versions mai naye tarike se error catch krte hai.

//read/write/append:
fs.writeFile(jupiter, 'I am learning Node!', err => {
    if(err){
        console.log(`Error:
${err}`);
    }else{
        //read file
        fs.readFile(jupiter, 'utf-8', (err, data) => {
            if(err){
                console.log(`Error:
                ${err}`);
            }else{
                console.log(`${jupiter} content: 
                ${data}`);
                //append content
                fs.appendFile(jupiter, '\nIt is so fun!', err => {
                    if(err){
                        console.log(`Error:
                        ${err}`);
                    }else{
                        //read file
                        fs.readFile(jupiter, 'utf-8', (err, data) => {
                            if(err){
                                console.log(`Error:
                                ${err}`);
                            }else{
                                console.log(`${jupiter} content: 
                                ${data}`);
                            }

                        });
                    }

                });
            }

        })
    }

});

console.log('hello');
//isme yeh pehle call ho jayega koi blocking ni hai isme baki matlb joh chij jaha hogi apni position ke hisab se execute hojayegi.
