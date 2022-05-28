const display = document.getElementById("display");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const back = document.getElementById("back");
const smile = document.getElementById("smile");

clear.addEventListener("click", function () {
  display.innerHTML = "";
});

back.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.slice(0, -1);
});

one.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(one.innerHTML);
});

two.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(two.innerHTML);
});

three.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(three.innerHTML);
});

four.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(four.innerHTML);
});

five.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(five.innerHTML);
});

six.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(six.innerHTML);
});

seven.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(seven.innerHTML);
});

eight.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(eight.innerHTML);
});

nine.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(nine.innerHTML);
});

zero.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(zero.innerHTML);
});

point.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(point.innerHTML);
});

smile.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.concat(smile.innerHTML);
});

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2) {
  return divide(num1, num2);
}
