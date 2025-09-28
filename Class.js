//CLASS
// A class defines the information and actions that objects can use to perform tasks as required by the user. 
//Classes help organize code and make it reusable. Use the constructor method to initialize properties when creating an object.
//Methods inside a class do not need the function keyword. Each object created from a class is called an instance and can have its own data.
//Classes support inheritance, allowing one class to extend another.

 class Add { sum(x, y) { return x + y; } } 

const result = new Add(); 
console.log(result.sum(10, 5));
