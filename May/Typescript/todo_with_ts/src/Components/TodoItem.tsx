import {Flex,Text,Button,Img,
Input
} from "@chakra-ui/react"
import { useState } from "react";
type TodoItemProps={
  id:number;
  title:string;
  status:boolean;
  task:string;
  setTask:Function;
  deleteTodo:Function;
  toggleTodo:Function;
  editTitle:Function;
}
const TodoItem = ({id,title,status,deleteTodo,toggleTodo,task,setTask,editTitle}:TodoItemProps) => {
  const [toggle, setToggle] = useState<boolean>(false)
  
  const toggleHandler=()=>{
    setToggle(!toggle);
    setTask(title)
  }
  const editHandler=()=>{
    editTitle(id,task)
    setToggle(!toggle);
  }
  return (
    <Flex w='300px' mb='10px' justify='space-between' align='center'  fontSize='18px' p='10px' > 
    {
      !toggle?<Text fontWeight='600'>{title}</Text>:<Input type='text' value={task} onChange={(e)=>setTask(e.target.value)}  />
    }
    <Flex gap='10px' align='center'>
      {!toggle?<Img h='25px' cursor='pointer' src='https://cdn-icons-png.flaticon.com/128/84/84380.png'
      onClick={toggleHandler}
      />:
      <Button size='sm' variant='solid' colorScheme="red" onClick={editHandler}>Edit</Button>
      }
    <Button size='sm' variant='solid' colorScheme={status?"green":"yellow"} onClick={()=>toggleTodo(id,!status)}>{status?"Done":"Pending"}</Button>
    <Button size='sm' variant='solid' colorScheme="red" onClick={()=>deleteTodo(id)}>X</Button>
    </Flex>
  </Flex>
  )
}

export default TodoItem