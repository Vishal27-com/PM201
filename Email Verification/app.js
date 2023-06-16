const express = require('express')
require("dotenv").config();
const jwt=require("jsonwebtoken");
const mailSender=require("./tokenSender");
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const token=jwt.sign({data:"Token Data"},process.env.SECRET_KEY)
const receiver=["vg332627@gmail.com","kantiram209861@gmail.com"]
for(let i=0;i<receiver.length;i++){
    mailSender(token,receiver[i]);
}
app.get('/verify/:token',(req,res)=>{
        const {token}=req.params;
        // verifying the jwt token
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                res.send("Email verification failed !");
            }
            else{
                res.send("Email verified successfully");
            }
        })
})
app.listen(3000, () => {console.log('server started on port 3000')})