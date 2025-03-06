console.log("Loaded conditional statement");

const isDayTime = true;
const age = 12;
const hour = 12;

const firstName = "John";
const lastName = "Doe";

// if (condition) {}
// if (isDayTime) {
//   console.log("Good day");
// } else {
//   console.log("Good night");
// }

// && - AND
// || - OR

// if (age >= 18 && age < 40) {
//   console.log("Is a young adult");
// } else if (age >= 40) {
//   console.log("Is a senior adult");
// } else {
//   console.log("Is a child");
// }

if (hour === 0) {
  console.log("It's midnight" + firstName);
} else if (hour === 12) {
  console.log("It's noon " + firstName);
} else if (hour > 12 && hour <= 17) {
  console.log("Good afternoon " + firstName);
} else if (hour > 0 && hour < 12) {
  console.log("Good morning " + firstName);
} else {
  console.log("Good evening " + firstName);
}

if (hour === 0 || hour === 12) {
  console.log("Enjoy");
} else {
  console.log("Welcome " + firstName);
}

// switch (expression)
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day");
}
