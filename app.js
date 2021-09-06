// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissors = document.querySelector('#scissors')

function logName(Name="Enter your name", age=18){
    console.log(Name + " You are " + age)
}
logName("Anamika")

function add(a=0, b=0) {
    const sum = a+b
    return sum
}
console.log(add(12,99))