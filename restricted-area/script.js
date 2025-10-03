let textArea = document.getElementById('textarea');
let counter = document.querySelector('.number');
let containerCount = document.querySelectorAll('.counter > span')
let countLetter = 0;

textArea.addEventListener("keydown",(event)=>{
    if(event.key != 'Backspace' && countLetter  < 250){
        countLetter += 1
        console.log(event.key)
        textArea.classList.remove("alert-texarea")
        containerCount.forEach((span)=>{
            span.classList.remove('alert')
        })
    }else{
        if(countLetter > 0){
            countLetter -= 1
        }
        textArea.classList.add("alert-texarea") 
        containerCount.forEach((span)=>{
            span.classList.add('alert')
        })

    }
    counter.innerText = countLetter;

})

