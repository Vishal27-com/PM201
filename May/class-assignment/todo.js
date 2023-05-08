class Todo{
    constructor(title){
        this.title=title;
        this.status=false;
    }
}
class Todos{
    #task
    constructor(){
        this.#task=[];
    }
    get todos(){
        return this.#task;
    }
    set todos(title){
        let todo=new Todo(title);
        this.#task.push(todo)
    }
    deleteTodo(id){
       this.#task=this.#task.filter((item,ind)=>ind!==id)
    }
    updateTodo(id){
        this.#task[id].status=!this.#task[id].status
    }
}
let title=document.getElementById("title");
let form=document.getElementById("form");
let list=document.getElementById("list");
let t1=new Todos();
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    t1.todos=title.value;
    let todolist=t1.todos;
    display(todolist);
});
function display(todos_arr){
    list.innerHTML=''
   todos_arr.map((item,ind)=>{
    let div=document.createElement("div");
    let title=document.createElement("p");
    title.innerText=item.title
    let status_but=document.createElement("button");
    status_but.innerText=item.status?"Done":"Pending";
    status_but.style.backgroundColor=item.status?"green":"yellow";
    status_but.addEventListener("click",()=>{
        t1.updateTodo(ind)
        let todolist=t1.todos;
        display(todolist);
    })
    let delete_but=document.createElement("button");
    delete_but.innerText="X"
    delete_but.style.backgroundColor="red";
    delete_but.addEventListener("click",()=>{
        t1.deleteTodo(ind)
        let todolist=t1.todos;
        display(todolist);
    })
    div.append(title,status_but,delete_but);
    list.append(div)
   })
}



