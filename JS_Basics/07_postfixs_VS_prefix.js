//Prefix VS Postfix Notation

/**
Prefix (++x or --x)
The value is updated first, then used.
*/

let x = 5;
let y = ++x; // x becomes 6, then y is set to 6
console.log(x); // 6
console.log(y); // 6

/**
Postfix (x++ or x--)
The value is used first, then updated.
*/

let x2 = 10;
let y2= x1++; // y2 is set to 10, then x2 becomes 11
console.log(x2); // 11
console.log(y2); // 10