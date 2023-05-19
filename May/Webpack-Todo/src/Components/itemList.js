export let list = document.createElement("div");
list.className='list'
export function display(todos) {
  list.innerHTML = "";
  todos.map((item) => {
    let title = document.createElement("p");
    title.innerText = item;
    list.append(title);
  });
}
