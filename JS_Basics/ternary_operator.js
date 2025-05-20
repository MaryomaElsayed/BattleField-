/**
 * Conditional statements can also be written using the conditional operator. The
conditional operator is also known as the ternary operator. The conditional operator shortens if ... else statements to a single expression, which is often useful
when doing conditional rendering with ReactJS, Vue.js, or Svelte.
To use the conditional operator, write a condition followed by a question mark.
After the question mark comes the expression that will run if the condition is
true. Follow that expression with a colon and then the expression to run if the
condition is false
 */

const dt = Date();
const hours = dt.getHours();

let msg;
msg = hours < 12 ? ('Good Morning!') : ('Welcom!');

console.log(msg);