import nodemailer from 'nodemailer'

export const sendEmail = async ({email,emailType,userId}:any)=>{
    
    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 465,
            secure: true, 
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });


          const mailOptions ={
            from: "maheshjadhao64904@gmail.com",
            to: email,
            subject: emailType === 'VERIFY'?"Verify your emai":"Reset your password", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          }
        
         const mailResponse = await transporter.sendMail(mailOptions)

         return mailResponse
        
    } catch (error:any) {
        throw new Error(error.message)
        console.log(error)
    }
}