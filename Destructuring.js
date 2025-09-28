//DESTRUCTURING
//Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables.
It helps access values by pulling them out directly. There are two main types of Destructuring:
//Array Destructuring and Object Destructuring.

//Array Destructuring 
let numbers = [10, 20, 30];

// Extract values into variables
let [a, b, c] = numbers;

console.log(a); 
console.log(b); 
console.log(c); 

//Object Destructuring 
let person = { name: "Alice", age: 18 };

// Extract values into variables
let { name, age } = person;

console.log(name); 
console.log(age);