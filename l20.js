console.log("Map and Promise");

// Map doesn't manipulate the same array unlike forEach. It updates and return a new array.
let ranks = [1, 2, 3, 4];
console.log(
  ranks.map((e, ind) => {
    console.log(e + 1, ind); // it will return new array with elements 2,3,4 and the indices
    return e * 100; // It will return 100, 200, 300 as the new array  and 'ranks' has not been changed
  })
);

console.log("forEach");
//forEach doesn't return a new array, returns "undefined".
console.log(
  ranks.forEach((e, index) => {
    return e * 100; //as forEach doesn't return anything hence the output will be undefined
  })
);

let newarr = ranks.map((e, ind) => {
  console.log(e);
  if (e % 2 === 0) return e;
});
console.log(newarr);
