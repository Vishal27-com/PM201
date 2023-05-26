import {Flex} from "@chakra-ui/react"
import { Todo } from "./BasicType"
import TodoItem from "./TodoItem"
import { useState } from "react";
type Todos={
  todos:Todo[];
  setTodos:Function;
}
const TodoList = ({todos,setTodos}:Todos) => {
  const [task,setTask]=useState<string>('');
  const deleteTodo=(id:number)=>{
    setTodos(todos.filter((item)=>item.id!==id))
  }
  const toggleTodo=(id:number,status:boolean)=>{
    setTodos(
      todos.map((item)=>
      item.id===id?{...item,status:status}:item
      )
    )

  }
  const editTitle=(id:number,title:string)=>{
     setTodos(
      todos.map((item)=>
      item.id==id?{...item,title:title}:item
      )
     )
  }
  return (
    <Flex direction='column' justify='center' align='center' >
      {
        todos.map((item)=>
       <TodoItem 
       key={item.id}
       id={item.id}
       title={item.title}
       status={item.status}
       deleteTodo={deleteTodo}
       toggleTodo={toggleTodo}
       task={task}
       setTask={setTask}
       editTitle={editTitle}

       />
        )
      }
    </Flex>
  )
}

export default TodoList