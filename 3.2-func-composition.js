import { compose, pipe } from "lodash/fp";

let input = "    Javascript    ";
const trim = (str) => str.trim();
const convToLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div> ${str} </div>`;

// This solves our brackets problem, DON'T USE THIS
const transform = compose(wrapInDiv, convToLowerCase, trim);
transform(input);

// To solve the reading Right-to-Left problem, we use pipe func

const transformTwo = pipe(trim, convToLowerCase, wrapInDiv);

transformTwo(input);

// We use the pipe func to read the functions the right way: left-to-right
// Use Pipe func always

// pipe create a pipeline:
//  the output of each func, becomes the input of the next
