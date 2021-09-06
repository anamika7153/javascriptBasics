const button = document.querySelector('button')
const element = document.querySelector('#selectMe')
const body = document.querySelector('body')

button.addEventListener('click',()=>{
    //element.classList.toggle('aqua')
    //  OR
    // if(element.classList.contains('aqua')){
    //     element.classList.remove('aqua')
    // }else{
    //     element.classList.add('aqua')
    // }
    //element.style.fontSize= "30px"
    
    body.classList.toggle('dark')
})