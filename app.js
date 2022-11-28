//Promise : It is an object that returns a value that we hope to receive in a future but not immediately. very well suited to handle asynchronous operations. 

/* Bob's favourite singer announced to have a concert next month. bob will plan to attend next month. here we have 3 situations
1 bob is waiting for the concert
2 bob will successfully attend
3 bob will fail to attend

JAVASCRIPT PROMISE HAS 3 STATES
-PENDING
-FULFILL
-REJECTED

promise starts in the pending state, ends with either fulfill or reject
/*

*/


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


// async function afunc() {
//     try {
//     let result = await attendConcert;   //cant be used outside async function
//     console.log(result)

//     }
//     catch(e) {
//     console.log(e)

//     }
// }
let asyfuncname = async() => {
    try {
    let result = await attendConcert;   //cant be used outside async function
    console.log(result)

    }
    catch(e) {
    console.log(e)

    }
}
console.log("afunc = ",asyfuncname())
console.log("Hi, I won't wait for anyone")  //will be printed instantaneously , will not wait for 2 sec just like above statement