//const MAKE; 
//cons ko app ko intialize(matlab value assign karna) karna jaruri hai.
//ek bar joh value de di woh chng ni ho sakti.magar aap uski properties chng kar sakte ho bt const ko chng ni kar sakte direct "=" laga ke.
const MAKE = 'Apple';
console.log(MAKE);

//MAKE = 'Samsung';


{
    const MAKE = 'Apple';
}

{
    const MAKE = 'Samsung';
}


const LANGUAGE = {
    name: 'JavaScript',
    version: 'ES5'
};
LANGUAGE.version = 'ES6';// yaha pe property change ki hai .
//error only if you do LANGUAGE = something