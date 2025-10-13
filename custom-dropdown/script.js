let selectButton = document.querySelector('.select-picker');
let picker = document.querySelector('.picker');
let arrow = document.querySelector('.arrow');
let selectList = document.querySelector('.select');
let itemSelected = document.querySelectorAll('span'); 

selectButton.addEventListener("click",()=>{
    selectList.style.display = "block";
    arrow.innerText = '^';
})


selectList.addEventListener("click",(optionSelected)=>{
    let optionSel  = optionSelected.target;
    let spanChild = optionSel.firstElementChild;
    let containsClass = optionSel.firstElementChild.classList.contains('icon-selected')
    if(!containsClass){
        let itemSelected = document.querySelectorAll('span'); 

        itemSelected.forEach((item)=>{
            item.classList.remove('bi-check', 'icon-selected');
        })

        spanChild.classList.add('bi-check', 'icon-selected');
    }

    picker.innerText = optionSel.innerText;
    
    selectList.style.display = "none";
    arrow.innerText = 'v';
})