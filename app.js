const bar =document.querySelector(".bar")

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",()=>{
    let scrolTop = document.documentElement.scrollTop;
    bar.style.width =  `${(scrolTop / height) * 100}%`
    console.log((scrolTop / height) * 100);
})