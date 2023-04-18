// boolean
let present : boolean=true;
// number
let age : number =19;
// bigint
let bank_balance : bigint = 15n;
// null
let job : null = null;
// string
let fullname : string = 'Vishal Gupta'
// array
let fav_sub : Array<string> = ['DSA' , 'Coding', 'Problem-Solving']
// tuple
let sub_with_marks : [string,number] = ['Coding',100];
// any
let data : any = ['nadjfoi',15453,{},[],null]
// function
function sum (a:number,b:number):number {
return a+b;
}
// void
function print_name ():void{
    console.log("Vishal Gupta")
}
// enum 
enum Role{
    fullstack,
    frontend,
    backend
}
let user : Role=Role.fullstack;
console.log(user)

