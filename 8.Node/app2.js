//module
//module mai functions (method) hote hai jinko hm export karte hai apni app mai


const modulee = require('./lib/modulee.js');
//ek "modulee" obj banaya usme module import kiya "reqiure" keyword laga ke 
//require('./lib/greeting.js') 
// "." dot ka matlab hai current directory /then current directory mai lib directory/then usme modulee.js naam ki file jime module hai,usko import karliya humne.
modulee();
//now obj ko call karliya

const average = require('./lib/school.js').average;
//".average" ka matlab hai average naam ka function import kiya apni app mai" school.js" ke module mai se.
console.log(average([70, 55, 90, 89.144]));

console.log(require('./lib/school.js').grades);//yaha pe grades naam ka "object" import kiya apni file mai, "school.js" mai se.

//console.log(module);//module ki properties dekhne ke liye