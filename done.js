/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
// make a string variable for a color, set it equal to your favorite
var color = "blue";
// alert the message" "My favorite color is " plus the color
alert("My favorite color is "+color);

/* Prompt */
// make a string variable for color, prompt the user for their favorite
color = prompt("what's your favorite color?");
// alert color " is a nice color!"
alert (color+" is a nice color!");

/* Var Alert Prompt Conditional */
// make a string variable for color, prompt the user for their favorite
var color = prompt("what's your favorite color?");
// if user enters "black" alert "Black is not really a color." 
if (color == "black") alert("Black is not really a color.");
// otherwise alert color " is a nice color!"
else alert(color+" is a nice color!");


/* AGE KATAS */

/* Var Alert */
// make an integer variable for age, set it equal to your age
var age = "15";
// make a string variable for name, set it to your name
var name = "Jace";
// alert name is age years old
alert(name+" is "+age+" years old");
/* Var Alert Prompt */
// make an integer variable for age, prompt user for their age
age = prompt("how old are you?");
// make a string variable for name, prompt user for their name
name = prompt("what is your name?");
// alert name is age years old
alert(name+" is "+age+" years old");


/* Var Alert Prompt Conditional */
// make an integer variable for age, prompt user for it
age = prompt("how old are you?")
// make a string variable for name, prompt user for it
name = prompt("what is your name?")
// if age is greater than 16, alert "you don't look that old!"
if (age > 16) alert("you don't look that old!")
// otherwise alert name is age years old
else alert(name+" is "+age+" years old");


/* ICE CREAM KATAS */

/* Var Alert Prompt */
// make a string variable for ice cream flavor, prompt user for it
var flavor = prompt("What flavor do you want?");
// make an integer variable for scoops, prompt user for it
var scoops = prompt("How many scoops?");
// alert "You want " scoops "scoops of " flavor
alert("You want "+scoops+" scoops of "+flavor);

/* Var Alert Prompt Conditional */
// make a string variable for ice cream flavor, prompt user for it
var flavor = prompt("What flavor do you want?");
// make an integer variable for scoops, prompt user for it
var scoops = prompt("How many scoops?");
// if scoop is creater than three, alert ("Max 3 scoops!")
if (scoops > 3) alert("Max 3 scoops!");
// otherwise alert "You want " scoops "scoops of " flavor
else alert("You want "+scoops+" scoops of "+flavor);


/* PET KATAS */

/* Var Alert Prompt */
// make a variable for pet type, prompt user for it 
var type = prompt("What kind of pet do you have?");
// make a variable for pet name, prompt user for it
var name = prompt("What is their name?");
// alert "You have a pet type named pet name 
alert("You have a "+type+" named "+name);

/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var type = prompt("What kind of pet do you have?");
// make a variable for pet name, prompt user for it
var name = prompt("What is their name?");
// alert "You have a pet type named pet name 
alert("You have a "+type+" named "+name);
// if pet is a dog, say "I like dogs, too!"
if (type == "dog") alert("I like dogs too.");
// if it is a cat, say "I'm allergic to cats"
else if (type == "cat") alert("I'm allergic to cats");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("what an interesting pet!");