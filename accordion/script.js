let arrowDisplayList = document.querySelectorAll('.arrow');
let responseAccordionList = document.querySelectorAll('.accordion-response');

arrowDisplayList.forEach((button) => {
    button.addEventListener("click",()=>{
        responseAccordionList.forEach((accordion) =>{
            let display = button.classList[1];
            let accordionDisplay = document.querySelector(`.accordion-response.${display}`)

            if(accordionDisplay.style.display == '' || accordionDisplay.style.display == 'none'){
                accordionDisplay.style.display = "block";
                accordion.style.display = "none"
            }else{
                accordionDisplay.style.display = "block";
                accordion.style.display = "none"
            }
        })
    });
});