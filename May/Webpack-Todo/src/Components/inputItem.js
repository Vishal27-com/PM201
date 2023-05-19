let todos=[];
import { display } from "./itemList";
export let inputBox=document.createElement("input");
inputBox.className='input'
export let add_but=document.createElement("button");
add_but.innerText='Add'
add_but.className='addBut'
add_but.addEventListener("click",()=>{
    let title=inputBox.value;
    if(title!=='')todos.push(title)
    display(todos);
})


