const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const board = document.querySelector('#board')

const handler = (event) => {
    const action = event.target.id
    // if(action === 'rock') {
    //     board.innerHTML = ("Rock crushes scissors")
    // }else if(action === 'paper') {
    //     board.innerHTML = ("Paper traps rock")
    // }else if(action === 'scissors') {
    // board.innerHTML = ("Scissors cuts paper")
    // }
    switch(action) {
        case "rock" :
            board.innerHTML = "Rock crushes scissors"
            break
        case "paper" :
            board.innerHTML = "Paper traps rock"
            break
        case "scissors" :
            board.innerHTML = "Scissors cuts paper"
            break
    }
}
rock.addEventListener('click',handler)
paper.addEventListener('click',handler)
scissors.addEventListener('click',handler)
