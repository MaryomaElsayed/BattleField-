/**
LOOPING STATEMENTS IN JS:
» for
» for ... in
» for ... of
» do ... while
» while
 */
// The looping statements are also known as "iterative" statements.

// 1) For loops :
/**
The for statement uses three expressions in parentheses after the for keyword
to create a loop:
» Initialization: The initial value of a variable. This variable is usually a counter.
» Condition: A Boolean expression that determines whether to run the loop's
statements.
» Final expression: An expression to be evaluated following each iteration of
the loop. This expression is typically used to increment a counter.
 */

for (let i=1; i <= 10; i++){
    console.log(i);
}

let m = 1;
for (m; m<= 5; m++){
    console.log('mmm');
}