
function pressButton(event){
    let id = event.target.id
    let idTab = document.getElementById(id);
        idTab.addEventListener('click', ()=>{
            if(!idTab.classList.contains('active')){
                let currentTabActive = document.querySelector('.active');
                currentTabActive.classList.remove('active');
                currentTabActive.classList.add('inactive');
            }
            idTab.classList.add('active');
            }
        )

    let textDisplayed = document.querySelector('.first-tab')

    let idText = new String(id);
    textModifed = idText.replace('-', ' ')
        
    textDisplayed.innerHTML = `${textModifed} context to be displayed here`;
}

