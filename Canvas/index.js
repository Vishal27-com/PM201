let canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext('2d');

// Reactangle
// c.fillRect(100,100,50,200)

// Line
// c.beginPath() // begin the path
// c.moveTo(100,50) // from where we want to move
// c.lineTo(300,50) // to which point
// c.strokeStyle='blue'
// c.stroke()

// Circle
// c.beginPath()
// c.arc(300,200,50,Math.PI*2,false)
// c.strokeStyle='black'
// c.stroke()
// for(let i=0;i<10;i++){
    // let x=Math.random()*window.innerWidth
    // let y=Math.random()*window.innerHeight
    // c.beginPath()
    // c.arc(x,y,50,Math.PI*2,false)
    // c.stroke()
// }

// Animation
// let color_arr=[
//     '#ffaa33',
//     '#99ffaaa',
//     '#00ff00',
//     '#4411aa',
//     '#ff1100'
// ]
// let color_arr=[
//     '#ffffff',
//     '#ffffff',
//     '#ffffff',
//     '#ffffff',
//     '#ffffff',  
// ]
// let mouse={
//     x:0,
//     y:0
// }
// window.addEventListener("mousemove",(event)=>{
//     mouse.x=event.x;
//     mouse.y=event.y;
// })
// function Circle(x,y,r,dx,dy){
//     this.x=x;
//     this.y=y;
//     this.radius=r
//     this.dx=dx
//     this.dy=dy
//     this.color=color_arr[Math.floor(Math.random()*color_arr.length)]
//     this.draw=function () {
//         c.beginPath()
//         c.arc(this.x,this.y,this.radius,Math.PI*2,false)
//         c.stroke()
//         c.fillStyle=this.color
//         c.fill()
//     }

//     this.update=function(){
//         if(this.x+this.radius>innerWidth || this.x-this.radius<0)
//         this.dx=-this.dx
//         if(this.y+this.radius>innerHeight || this.y-this.radius<0)
//         this.dy=-this.dy
//         this.x+=this.dx;
//         this.y+=this.dy
//         // interactivity
//         if(mouse.x - this.x<50 && mouse.x-this.x>-50
//             && mouse.y - this.y<50 && mouse.y-this.y>-50
//             ){
//                 if(this.radius<50)this.radius+=1;
//             }
//             else if(this.radius>2)this.radius-=1
//         this.draw();
//     }
// }
// let circle_arr=[];
// for(let i=0;i<100;i++){
//     let radius=5
//     let x=Math.random()*(innerWidth-radius*2)+radius
//     let y=Math.random()*(innerHeight-radius*2)+radius
//     let dx=(Math.random()-0.5)*2
//     let dy=(Math.random()-0.5)*2
//     var circle=new Circle(x, y, radius, dx, dy); 
//     circle_arr.push(circle);
// }
// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     for(let i=0;i<circle_arr.length;i++){
//         circle_arr[i].update()
//     }
// }
// animate()

