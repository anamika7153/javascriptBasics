// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissors = document.querySelector('#scissors')

function logName(Name="Enter your name", age=18){
    console.log(Name + " You are " + age)
}

logName("Anamika")

const add = function(a=0, b=0) {      //Another way of declaring functions using variable
    const sum = a+b
    return sum
}
console.log(add(12,99))

// const add = (a=0, b=0) => {      //Without keyword function
//     const sum = a*b
//     return sum
// }
// console.log(add(12,99))



//ECMA SCRIPT : just a standard on which a javascript is based
// example : ES-6(version)

