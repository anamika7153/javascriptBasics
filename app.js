let concert = false
let attendConcert = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(concert){
            resolve("BOB ATTENDED THE CONCERT")
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT")
        }
    },2000)
})
console.log(attendConcert)

// attendConcert.then((data)=> console.log(data)) //we can use any variable inside this
// attendConcert.catch((error)=> console.log(error))  
attendConcert.then((data)=> console.log(data)).catch((error)=>console.log(error))   //will not show uncaught error
// for true ---->then
//
console.log("Hi, I won't wait for anyone")  //will be printed instantaneously , will not wait for 2 sec just like above statement