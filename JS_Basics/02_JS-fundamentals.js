// Define variable 'a' as a string
let a = "50";

// Define variable 'b' as a number
let b = 50;

// Print the type of 'a' (string)
console.log(typeof(a)); // Output: string
console.log("Value of a:", a); // Output: 50

// Print the type of 'b' (number)
console.log(typeof(b)); // Output: number
console.log("Value of b:", b); // Output: 50

// ----------------------------------------

// Convert string to number

// Define 'money' as a string
let money = "200";
console.log("Original money:", money); // Output: 200
console.log("Type before conversion:", typeof(money)); // Output: string

// Way 1: Using parseInt()
let money1 = parseInt(money);
console.log("money1 using parseInt:", money1); // Output: 200
console.log("Type of money1:", typeof(money1)); // Output: number

// Way 2: Using + operator
let money2 = +money;
console.log("money2 using '+':", money2); // Output: 200
console.log("Type of money2:", typeof(money2)); // Output: number

// Way 3: Using Number()
let money3 = Number(money);
console.log("money3 using Number():", money3); // Output: 200
console.log("Type of money3:", typeof(money3)); // Output: number

// ----------------------------------------

// Convert number to string

let num = 500;
console.log("Original num:", num); // Output: 500
console.log("Type before conversion:", typeof(num)); // Output: number

// Way 1: Using toString()
// let numStr = num.toString();

// Way 2: Using String()
let numStr = String(num);

console.log("numStr after conversion:", numStr); // Output: "500"
console.log("Type of numStr:", typeof(numStr)); // Output: string

// ----------------------------------------

// Convert string to decimal number

let deci = "100.56";
console.log("Original deci:", deci); // Output: 100.56
console.log("Type before conversion:", typeof(deci)); // Output: string

// Using parseFloat()
deci = parseFloat(deci);
console.log("deci after parseFloat:", deci); // Output: 100.56
console.log("Type of deci:", typeof(deci)); // Output: number
