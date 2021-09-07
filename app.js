const balls = document.querySelectorAll('.ball')
// const balls = document.getElementsByClassName('.ball')
const body = document.querySelector('body')

balls.forEach((ball,iteration) => {
    console.log(iteration)
    const value =iteration * 50
    ball.style = `transform:translateY(${value}px)`
})
