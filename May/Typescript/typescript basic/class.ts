class User{
    name:string;
    protected age:number;
    private address:string;
    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address
    }
    greet(message:string):void{
        console.log(message,this.name)
    }
    get Userage():number{
        return this.age
    }
    set Userage(a:number){
        this.age=a;
    }
}
class newUser extends User{
    constructor(name:string, age:number, address:string){
        super(name,age,address)    
    }
}
// index signature

// implements
// interface UserInterface{
//     name:string;
//     age:number;
//     address:string;
// }

// class User implements UserInterface{
//     readonly name:string;
//     age:number;
//     address:string;
//     constructor(name:string,age:number,address:string){
//         this.name=name;
//         this.age=age;
//         this.address=address
//     }
//     greet(message:string):void{
//         console.log(message,this.name)
//     }
//     get Userage():number{
//         return this.age
//     }
//     set Userage(a:number){
//         this.age=a;
//     }
      
// }


