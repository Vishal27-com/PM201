// awaited type
type A=Awaited<Promise<string>>
type B=Awaited<Promise<Promise<string>>>
type C=Awaited<boolean | Promise<number>>
// partial type
interface Todo{
    title:string;
    desc:string;
}
function updateTodo(todo:Todo,field:Partial<Todo>){}
// required type
// required type is opposite of partial
// readonly type
// Pick Type(Type, Keys)
 type TodoPrev=Pick<Todo,"title">
const todo:TodoPrev={
    title:""
}
// Omit<Type,keys> opposite of Pick
// Exclude<uniontype,excluded members>
// Extract<type,union>
// NonNullable<type> it will neglect null and undfined
// Parameters<type>
// ContructorParameteres<type>
// ReturnType<type>
// InstanceType<type>
// ThisParameterType<type>
// OmitThisParameter<type>
// ThisType<type>



// record type, index signature



