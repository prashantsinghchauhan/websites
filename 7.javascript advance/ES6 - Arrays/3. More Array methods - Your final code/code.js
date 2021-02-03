const x = [5, 7, , 2];

//find the first element greater than 6
console.log(x.find(value => value > 6));//output: 7
console.log(x.findIndex(value => value > 6));//output: 1 (7 ka index 1 hai)

//find the first element which if added to its index, the sum is smaller than 5
console.log(x.find((value, index) => value + index < 6));//output: 5 (value 5+index 0)

//get the index of a value
console.log(x.indexOf(7));//output:1

//check if a value exists
console.log(x.includes(2));//output: true

//copy in position 1 the chunk between 0 and 1
console.log(x);
x.copyWithin(1, 0, 2);
// isme (pehla position , where to start , where to end ) kaam hai coy karne ka
console.log(x);//output: [5, 5, 7, 2]

//copy in position 2 the chunk between 1 and the end
x.copyWithin(2, 1);// in this you dont have to mention end point it automatically understand if you dont mention end point.
// 2 se stat karo and 1 se leke end tak jitna bhi data ho 2 nd index se copy karke print karo
console.log(x);//output: [5, 5, 5, 7]

//copy in position 3 the first value of the array
x.copyWithin(3);
console.log(x);// output: [5, 5, 5, 5]


//fill x with 4's from position 1 to 1
x.fill(4, 1, 2);// fill krne ke liye fill method 
// isme 4 ko fill kara 1 position pe ,(data,starting position, endposition+1 ) because end position ko ek bada ke likhna padta hai agar 2 tak bharna hai toh 3 likho kyunki 3 likhogey toh 2 tak lega.
console.log(x);// output: [5, 4, 5, 5]

//fill x with {name:'Mark'} from position 2 to the end
//const y = {name:'Mark'};
x.fill({name:'Mark'}, 2);// 2 se shuru krke end tak fill karna hai ,end position mention krne ki jarurat ni apne app automatic lega agar mention nahi karoge toh.
console.log(x);
//check if values x[2] and x[3] are equal
console.log(x[2] === x[3]);// output: true, {name:'Mark'} dono ki value same hai
//true because you are passing a reference only.
console.log({name:'Mark'} === {name:'Mark'});// false because objects values are not allowed for comparing.

