let sideBut=document.getElementById("sideBut")
let sidebar=document.getElementById("sidebar")
let sideClose=document.getElementById("sidebar")

sideBut.addEventListener("click",()=>{
    sidebar.style.width='20vw'
})
sideClose.addEventListener("click",()=>{
    sidebar.style.width='0'
})
