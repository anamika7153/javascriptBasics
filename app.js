let ranks = [1, 2, 3, 4];


let newmaparr = ranks.map((e, ind) => {
  console.log(e);
  if (e % 2 === 0) return e;
});
console.log(newmaparr);

console.log("filter");
// its the array method that is used to run a func on every ele in array and return a array with all the ele that match the conditions specified in the func.
ranks.push(6)
let newfilterarr = ranks.filter((e, ind) => {
  console.log(e);
  if (e % 2 === 0) return e;
});
console.log(newfilterarr);