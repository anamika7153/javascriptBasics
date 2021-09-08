
const obj = {
    nam: "Anamika Yadav",
    email: "aanyayadav419@gmail.com",
    age: 20
}
console.log(obj.email)
let {nam,age,email,dumb} = obj
console.log(email)
console.log(dumb)
console.log("==================")

let person = {
    firstname: "Rini",
    lastname: "Srivastava",
    age1: 40,
    middlename:"abc"
}
let {age1,firstname,lastname,middlename=""} = person
console.log(age1)
console.log(firstname)
console.log(middlename)
console.log(lastname)