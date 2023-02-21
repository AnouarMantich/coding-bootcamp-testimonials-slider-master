const btnLeft=document.querySelector(".btn-left");
const btnRight=document.querySelector(".btn-right");
const imageTanya=document.querySelector(".image-tanya");
const imagejohn=document.querySelector(".image-john");
const tanyaText=document.querySelector(".tanya-text");
const Johnext=document.querySelector(".john-text");
const tanya=document.querySelectorAll(`[data-number="1"]`);
const john=document.querySelectorAll(`[data-number="2"]`);

const num=2;
const buttons=[tanya,john];

function togglePerson(){
    tanya.forEach(att=>{
        att.classList.toggle("hidden");
       })
       john.forEach(att=>{
        att.classList.toggle("hidden");
       })
}



btnLeft.addEventListener("click",togglePerson)
btnRight.addEventListener("click",togglePerson)



