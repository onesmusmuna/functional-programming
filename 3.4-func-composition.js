// Applying currying in our code

import { pipe } from "lodash/fp";

let input = "    Javascript    ";
const trim = (str) => str.trim();
const convToLowerCase = (str) => str.toLowerCase();

const wrapInDiv = (type) => (str) => `<${type}> ${str} </${type}>`;

const transform = pipe(trim, convToLowerCase, wrapInDiv("div"));

transform(input);
