// we want to
// trim
// convert it toLowerCase
// wrap in div

let input = "    Javascript    ";

const trim = (str) => str.trim();
const convToLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div> ${str} </div>`;

const result = wrapInDiv(convToLowerCase(trim(input)));

// This is Functional Composition in Functional Programming

// But we have 2 problems here
// 1_ we have to read the expression Right-to-Left: input, trim it, convert to lowerCase & wrap it in div
// 2_ we have many brackets, as we work with complext code, wi'll end up with so many brackets

// Lets solve this problems next
