//ES6 Arrow Function

// function add() {
//     return x+y
// }

// let add = function(x,y) {
//     return x+y
// }
// console.log(add(10,5))


let add  = (x,y) => {     //Arrow Function: doesnt have its own value
    return x+y
}
console.log(add(10,5))

const counter = {
    count:2,
    modified: function() {
        return ++(this.count)    //it is working as method here
    },
    key1: this.count,   //will not work
    key: this.location.href
}
console.log(counter)
console.log(counter.modified())
console.log(counter)
console.log(counter.modified())