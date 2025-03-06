// alert("Welcome to my portfolio");
console.log("Script loaded");

console.log(50, 10, 20.5773);
console.log("john");

// operators
// +, -, *, /,

console.log(50 + 10); // addition +
console.log(25 - 3); // subtraction -
console.log(10 * 10); // multiplication *
console.log(25 / 5); // division /

// Variables
// var, let, const (Keywords)
// var (1995 - 2015)
// let, const (2015 - present)

// var fullname = "Oluwole Mariam";
// var age = 20;
// var clock = 5;
// clock = 10;
// var sum = age + clock;
// console.log("Sum", sum);

let part1 = 10;
let part2 = 20;
let part3 = 30;
let total = part1 + part2 + part3;
part1 = 40;
console.log("Total", total);

const name = "Isreal Ogunyemi";
const email = "isreal.doe@mail.com";
const age = 20;
const occupation = "Frontend developer";
const isMarried = true;
const isDayTime = false;

// Concatenation
// console.log(name + clock);

// Template literals
console.log(
  `My name is ${name}, my email is ${email}. I am ${age} years old and my occupation is ${occupation}.`
);

// Data Types
// string
// number
// boolean - true or false
// Objects - collection of properties
// Arrays - collection of values (Object datatype)
// undefined
// null

// Comparison
// == (equality of the values)
// === (equality of the values and the data type)
// > greate than
// < less than
// >= greater than or equal
// <= less than or equal
// != not equal
// !== not equal the data type
console.log(age != 50);

// Naming Conventions
// camelCase: fullName, emailAddress, isMarried, isDayTime
// snake_case: full_name, email_address, is_married, is_day_time
// kebab-case: full-name, email-address, is-married, is-day-time
// PascalCase: FullName, EmailAddress, IsMarried, IsDayTime

// Objects
// Objects are collections of properties
// Properties are key/value pairs

const person = {
  firstName: "John",
  lastName: "Doe",
  middleName: null,
  emailAddress: "john.doe@example.com",
  age: 50,
  occupation: "Frontend developer",
  isMarried: true,
  gender: "male",
  complexion: "dark",
  role: "admin",
};
person.age = person.age + 5;
// console.log("role", person.role);
console.log("age", person["age"]);

// Arrays
// Arrays are collections of values
// Properties are index/value pairs
// index starts from 0

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(days[2]); // selects the value by index
console.log(days.length);

const users = [
  {
    fullName: "Elija O",
    emailAddress: "jdb.jayson@example.com",
    occupation: "Frontend developer",
  },
  {
    fullName: "Isreal O",
    emailAddress: "isreal.doe@example.com",
    occupation: "Frontend developer",
  },
  {
    fullName: "John Doe",
    emailAddress: "john.doe@example.com",
    occupation: "Frontend developer",
  },
];
users.pop();
console.log(users[0]);

// Undefined Data Type
let church;
console.log(church);

// Null Data Type
let car = null;
console.log(car);
