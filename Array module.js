//ARRAY MODULE
// Arrays are a collection of data of similar or same data types. These can be accessed and modified and can come in different forms. Array functions are built-in functions in javascript that help you manipulate arrays. Examples: push(), unshift(), pop(), shift(), indexOf(), includes(), reverse(), sort().

// Create an Array of student
let students = ["Alice", "Bob", "Charlie"];

// Adds a student at the end
students.push("David");
console.log(students); 

// Adds a student at the beginning
students.unshift("Eve");
console.log(students); 

// This removes the last student
students.pop();
console.log(students);

// This removes the first student
students.shift();
console.log(students);