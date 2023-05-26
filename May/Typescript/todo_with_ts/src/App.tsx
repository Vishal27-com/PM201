import {Box} from "@chakra-ui/react"
import TodoInput from "./Components/TodoInput"
import { useState } from "react";
import { Todo } from "./Components/BasicType";
import TodoList from "./Components/TodoList";

const App : React.FC = () => {
  const [task,setTask]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);
  const addTodo=()=>{
    if(task!==''){
      setTodos([...todos,{id:Date.now(),title:task,status:false}])
      setTask("");
    }
    else alert("Please Enter the Task")
  }
 
  return (
    <Box>
     <TodoInput task={task} setTask={setTask} addTodo={addTodo} />
     <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  )
}

export default App