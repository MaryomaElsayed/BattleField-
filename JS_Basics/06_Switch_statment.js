/**
switch is used to perform different actions based on different values.
Syntax:
switch(expression) {
  case value1:
    // code to run if expression === value1
    break;
  case value2:
    // code to run if expression === value2
    break;
  ...
  default:
    // code to run if no case matches
}
*/


// EXAMPLE :

/**
 * <!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8"/>
 <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <title>Funny fact of the day</title>
 </head>
 <body>
 <div id="funny-fact"></div>
 <script>
 */

 let date = new Date();
 let day = date.getDay();
 let msg;

 switch(day) {
    case 0:
        msg = "Sunday: Sloths can hold their breath longer than dolphins!";
        break;
    case 1 :
        msg = "Monday: The Moon is slowly drifting away from Earth — about 4 cm a year!";
        break;
    case 2:
        msg = "Tuesday: A group of turtles is called a 'bale'.";
        break;
    case 3:
        msg = "Wednesday: Camels have three eyelids to protect their eyes from sand.";
        break;
    case 4:
        msg = "Thursday: Elephants can't jump — they're the only mammals that can't!";
        break;
    case 5:
        msg = "Friday: Honey never spoils. Archaeologists found 3000-year-old honey in tombs!";
        break;
    case 6:
        msg = "Saturday: A sloth takes two weeks to digest its food!";
        break;
    default:
        msg = 'hmmm seems there is a error.....';
 }

 let el = document.getElementById('funny-fact');
 el.innerHTML = msg;
 
 /**
  </script>
 </body>
</html>
  */


