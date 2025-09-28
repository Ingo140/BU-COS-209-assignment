//MODULES
// A module in JavaScript is a file that contains code (like functions, objects, or variables) which can be imported and used in other files.It helps organize code into smaller, reusable pieces.Instead of putting all code in one file, you can split functionality across multiple modules.

// My module
const mathModule = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Using the module
console.log(mathModule.add(5, 3));      
console.log(mathModule.subtract(5, 3));