// immer is a js library for mutating/coping onbjects
// We use this instead of the spread operator {...obj}
//  because its fast and does a deep copy

// If the obj is big, the spread operator uses a lot of CPU power

import { produce } from "immer";

const book = { title: "River and the Source" };

const newBook = produce(book, (draftBook) => {
  draftBook.published = true;
});

// produce func takes 2 args
// 1. obj to be copied
// 2. changes that wi'll make to our copied book

console.log(newBook); // {title: "River and the Source", published: true}
