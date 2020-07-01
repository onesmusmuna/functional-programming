// we can treat function like other variables

// 1_ Assign them as variables
// 2_ Pass them as arguments
// 3_ Return them from other functions

// Assign them as variables
function sayHelloFunc() {
  return "Hello";
}

let printHello = sayHelloFunc;
// printHello is an alias of sayHelloFunc, we can call it, just like calling sayHelloFunc
printHello();
sayHelloFunc();

// ------------------
// Pass them as arguments to another function

function greetFunc(funcArgument) {
  console.log(funcArgument);
}

// ------------------
// Return them from other functions

function sayHello() {
  return function () {
    return "Hello world";
  };
}

// fn will give us the retuned anonymouse function
let fn = sayHello();

// message will give use the string
let message = fn();
