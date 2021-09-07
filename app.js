const balls = document.querySelectorAll('.ball')
// const balls = document.getElementsByClassName('.ball')
const body = document.querySelector('body')
const arr = [1,2,3,4,5]
// arr.push(6)
// console.log(arr)
// while(arr.length<10) {
//     arr.push("iteration")
//     added = arr.unshift(41)  //adds to the beginning of array and shift removes the starting element
//     present = arr.includes(50)
// }
// console.log(arr)
// console.log(arr.length)
// console.log(added)
// console.log(present)

// for(var i=0;i<arr.length;i++) {
//     console.log(arr[i])
// }
arr.forEach((ele,iteration) => {
    console.log(ele,iteration)
})