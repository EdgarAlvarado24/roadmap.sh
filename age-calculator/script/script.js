var DateTime = luxon.DateTime;

let buttonCalculate = document.querySelector('.button-calculate')
let birthdate = document.querySelector('.birthdate');
let now = DateTime.now().toFormat('dd/MM/yyyy');
let birthdateValue = DateTime.fromISO(birthdate.value).toFormat('dd/MM/yyyy');
let divContainerResponse = document.querySelector('.container-response')

buttonCalculate.addEventListener('click',(e)=>{
    e.preventDefault();

    let ageYear = DateTime.now().year - DateTime.fromISO(birthdate.value).year
    let ageMonth = DateTime.now().month -  DateTime.fromISO(birthdate.value).month

    if(DateTime.now().year > DateTime.fromISO(birthdate.value).year){
        divContainerResponse.innerHTML = `<p class="response"> You are ${ageYear} years ${ageMonth} months old </p>`;
    }else{
        divContainerResponse.innerHTML = `<p class="alert"> Invalid Birthdate </p>`;
    }
})