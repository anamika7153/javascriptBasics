console.log("hi")
var arr = [1,2,3,4]
console.log(arr[2])
var [one,two,three,four,five]=[1,2,3,4]  //ES6-Destructuring
console.log(three)
console.log(four) 
console.log(five)         //undefined

function getScores() {
    return [90,100]
}
let [x,y,z] = getScores();
console.log(x)
console.log(y)
console.log(z)