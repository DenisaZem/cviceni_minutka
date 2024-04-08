const sec = Number(prompt("Zadej za kolik sekund minutka zazvoní:"))
const SetTimer = sec*1000

setTimeout(()=>{
    const alarm = document.querySelector(".alarm")
    alarm.classList.add("alarm--ring")
}, SetTimer)