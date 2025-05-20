/**
 * Conditional statements, also known as branching statements, allow you to write
   code that performs various actions based on various conditions.
 */

   // if.... else if .... else :

let pet = 'dog';
let greeting;

   if (pet === 'cat'){
    greeting = 'hi kitty!';
   } else if (pet === 'dog'){
    greeting = 'who is a good boy/girl!';
   } else {
    greeting = 'hi!';
   }

   console.log(greeting);   // prints 'who is a good boy/girl!' in the console .