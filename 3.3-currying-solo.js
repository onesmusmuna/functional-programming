// currying is a technique that allows us to convert a function with many args to only One arg

function sum(a, b) {
  return a + a;
}

function add(a) {
  return function (b) {
    return a + b;
  };
}

add(4)(6);

// In currying, instead of separating arguments with Commer, we separate them with parenthesis.

// using arrow function

const add2 = (a) => (b) => a + b;
