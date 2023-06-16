const nodemailer=require("nodemailer");
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.SENDER_EMAIL,
        pass:process.env.SENDER_PASS
    }
})

function mailSender(token,receiver_email){
const mailConfig={
    from :process.env.SENDER_EMAIL,
    to:receiver_email,
    subject:"Email Verification",
    text:`Hi! There, You have recently visited 
    our website and entered your email.
    Please follow the given link to verify your email
    http://localhost:3000/verify/${token} 
    Thanks`
}
transporter.sendMail(mailConfig,(error,info)=>{
    if(error){ console.log(error);}
    else{
    console.log("Email sent successfully");
    }
})
}
module.exports=mailSender;