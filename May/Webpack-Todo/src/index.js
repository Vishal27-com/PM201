import "./index.css";
import { inputBox,add_but } from "./Components/inputItem";
import { list } from "./Components/itemList";
let root=document.getElementById("root");
let main_div=document.createElement("div");
main_div.className='main_div'
main_div.append(inputBox,add_but,list)
root.append(main_div)






