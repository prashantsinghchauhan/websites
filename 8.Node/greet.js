//const uppr_case = function(firstname) {
//      return firstname[0].toUpperCase() + firstname.substring(1);
//}; 
//   aap ase bhi kar saktey ho.

const uppr_case = firstname => firstname[0].toUpperCase() + firstname.substring(1);
      
let firstname = process.argv[2];
firstname = uppr_case(firstname);

let lastname = process.argv[3];
lastname = uppr_case(lastname);

console.log(`heloo ${firstname} ${lastname}!`);