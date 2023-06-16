// String
var hero : string = "Ironman"
// Number
var age :number = 50
// Boolean
var present : boolean =true
// Array
var heroes : string[]=["Thor","Hulk","Strange"]
var ages : number [] =[40,50,45]
// Any
var data : any ={} // it stops type checking for that variable
// Functions
// Parameter type annotations
function nameoffunction(first:string,second:number){
return first+second
}
// Return type annotations
function returntype(first:string,second:number):string{
return first+second
}
// Anonymous functions
ages.map((el)=>{    //here type is automatically 
    console.log(el) // given to parameter (el) this process
})                  // is called contextual typing.
// object types
function objecttypes(user:{name:string,age:number}){
   console.log(user.name,user.age)
}
// optional properties
function addressIsOptional(user:{name:string,age:number,address?:string}){
    console.log(user.name,user.age)
 }
// union types
var union : string | number =4
// Type Aliases
// it means you can make your own type 
type MyType={name:string,age:number}
// Interfaces
// used to define type to object
import "./decorators";
interface User{
    name:string;
    age:number;
    address?:string //optional
}

// Function type expression
function expression(cb:(s:string)=>void){
 cb("Hello world");
}
function cb(s:string){
    console.log(s)
}
expression(cb)