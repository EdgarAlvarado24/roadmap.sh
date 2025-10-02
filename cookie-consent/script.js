let buttonCookies = document.getElementById('button-cookie');
let containerAnouncing = document.querySelector('.container-anouncing')

buttonCookies.addEventListener("click",()=>{
    containerAnouncing.style.setProperty("visibility","hidden");
})