console.log("MERGED CLASS 2 ES6");

let ranks = [1, 2, 3, 4, 5 ,6];

console.log(
  ranks.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks.forEach((e, index) => {
    return e * 100;
  })
);

let newmaparr = ranks.map((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newmaparr);


let newfilterarr = ranks.filter((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newfilterarr);