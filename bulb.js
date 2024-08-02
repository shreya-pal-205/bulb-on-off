let Turnon = document.querySelector(".Turn-on");
let Turnoff = document.querySelector(".Turn-off");
let bulb = document.querySelector(".bulb");

Turnon.addEventListener("click",()=>{
    bulb.src = "on.png";
})
Turnoff.addEventListener("click",()=>{
    bulb.src = "off.png";
})





