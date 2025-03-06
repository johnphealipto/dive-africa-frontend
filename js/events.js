console.log("Events loaded");

// const testCase = document.getElementById("test-case");
// // testCase.innerHTML = "<h1>Test Case</h1>";
// const strong = document.createElement("strong");
// // const content = document.createTextNode("I am strong");
// // strong.appendChild(content);
// strong.innerHTML = "I am executive";

// // Finally
// testCase.appendChild(strong);

// const myButton = document.getElementById("my-button");

// innerHTML
// innerText

// myButton.addEventListener("click", () => {
//   const result = document.getElementById("result");
//   // result.innerHTML = "Hello World!";
//   // result.innerHTML = "<strong>Hello World!</strong>";
// });

// parseInt

// const addButton = document.getElementById("add-btn");
// addButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const num1 = document.getElementById("num1");
//   const num2 = document.getElementById("num2");
//   const result = document.getElementById("result");

//   // parseInt('40')
//   const addition = parseInt(num1.value) + parseInt(num2.value);
//   result.innerHTML = addition;
// });

// const substractButton = document.getElementById("substract-btn");
// substractButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const num1 = document.getElementById("num1");
//   const num2 = document.getElementById("num2");
//   const result = document.getElementById("result");

//   const minus = parseInt(num1.value) - parseInt(num2.value);
//   result.innerHTML = minus;
// });

// appendChild()
// First - create an element
// Text - create a text node
// Then - append the element to the parent element

const contactForm = document.getElementById("contact");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;

  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${fullName}</td>
    <td>${email}</td>
    <td>${age}</td>
    <td>${message}</td>
  `;

  const tableBody = document.getElementById("table-body");
  tableBody.appendChild(tableRow);

  // console.log(fullName.value, email.value, age.value, message.value);
});
