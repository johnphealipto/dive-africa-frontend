console.log("Loaded functions");

// function name-of-function(arguments) {}

function myFunction() {
  console.log("My First Function");
}

myFunction();

function add(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

add(50, 30);

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// Arrow function () => {}
const subtract = (num1, num2) => {
  return num1 - num2;
};

// console.log(subtract(80, 20));
const result = subtract(80, 20);
console.log(result);

// () => {}
// function() {}
