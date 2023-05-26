import {Flex, Input, Button} from "@chakra-ui/react"
type Props={
    task:string;
    setTask:Function;
    addTodo:()=>void;
}
const TodoInput :React.FC<Props> = ({task,setTask,addTodo}) => {
    
  return (
    <Flex gap='10px' align='center' justify='center' h='60px'>
        <Input type='text' placeholder="Enter your task" w='300px'
        value={task} onChange={(e)=>setTask(e.target.value)}
        />
        <Button variant='solid' colorScheme="whatsapp" onClick={addTodo}>Add</Button>
    </Flex>
  )
}

export default TodoInput