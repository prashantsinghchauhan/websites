// agar hum kisi bhi function ko "let" ke sath use krenge toh woh block ke bhar acsessable nahi hoga.
// ek or main baat agar koi function "let" ke sath declare hai or woh "global" hai and most probably functions ke naam same hai, toh woh joh global "let" function hai uska output show krenge. chahe unka preceding block mai normal function kyu na ho or woh normal hi kyu na ho woh follow "let" ko hi krenge.

let greet = function(){
    console.log('hi');
}
greet();//hi

{
    function greet(){
        console.log('hello');
    }
    greet();//hello
    
    {
        let greet = function(){
            console.log('hi there');
        }
    }

}
greet();//hi yeh wala greet "let" ka output dega kyunki uski priority high hai balki iska preceding block mai ek function normal hai joh bina "let" ke hai tab bhi.
// han agar let global na hota toh yeh apne block ka output hi show karta.

{
    let greet1 = function(){
        console.log('hi hello');
    }
}
greet1();//hi
//function "let" ke sath declare hai isliye bhar accessable nahi hai agar normal hota toh call hojata. isko app block ke andar call kr sakte ho,agar function normal ho bina "let"  ke tab call kr sakte ho.

    