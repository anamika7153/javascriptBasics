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