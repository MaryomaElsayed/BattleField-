// ================== Equality Operators ==================

// === Strict equality (checks type + value)
console.log(10 === 10);  // true: same type and value
console.log(10 === '10'); // false: number !== string

// == Loose equality (checks value only, type conversion happens)
console.log(10 == '10');  // true: value matches after type coercion

// !== Strict inequality (type + value)
console.log(10 !== 10);   // false: same type and value


// ================== String Methods ==================

let firstName = "roma";
let lastName = "yassen";

// *** Concatenation ***
let fullName = firstName.concat(lastName);
console.log(fullName); // romayassen

// *** Append (+= operator) ***
let nameAppend = 'what ';
nameAppend += 'else';
console.log(nameAppend); // what else

// *** Length (counts characters) ***
console.log(firstName.length); // 4

// *** Change Case ***
let upperName = 'ROMA';
console.log(firstName.toUpperCase()); // ROMA
console.log(upperName.toLowerCase()); // roma

// *** Slice (extract part of string) ***
console.log(firstName.slice(1, 3)); // om (starts at index 1, ends before 3)

// *** Includes (checks if substring exists) ***
console.log(firstName.includes('r')); // true

// *** Trim (removes spaces from start & end) ***
let nameWithSpace = "   mmmm   ";
console.log(nameWithSpace.trim()); // mmmm

// ================== Template Literals ==================

// Backticks preserve formatting (multi-line support)
let backTicks = `hellllo
hiiiii
welcome`;
console.log(backTicks);

// Template literal (embedding variables)
let one = 'one';
let two = 'two';
let fullNum = `${one} ${two}`;
console.log(fullNum); // one two
