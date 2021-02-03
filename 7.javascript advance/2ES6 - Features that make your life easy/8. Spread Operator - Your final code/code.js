console.log(Math.min(3, 6, 9));// yeh simple tarika hai ab isme min function min value print kardega.
console.log(Math.min([3, 6, 9]));// but isme array mein se min print karwana hai joh ki asey nahi hoga.

//ES5
console.log(Math.min.apply(null, [3, 6, 9]));//isme array ke liye apply methdod call kiya joh do parameter leta hai "this" or "args" "this" ko null mention kar diya and "args" mein array pass kardi, ab output show karega.so es5 mai ase hota hai array show.

//ES6
console.log(Math.min(...[3, 6, 9]));

// es6 mai array ki min value show karne ke liye spread operator"..." use kar .

let x = [3, 4, 17];
console.log(Math.max(1, 3, ...x, 19));// isme function lagaya joh max value print karega isme "x" ko merge asey krenge "...x" spread operator ke sath bhi.

console.log([1, 3, 6, ...x, 5]);

// isme sari values dikhayega ek sath .