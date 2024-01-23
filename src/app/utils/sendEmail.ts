import nodemailer from "nodemailer"
import config from "../config";
//oems jhiu ewuh rvso
export const sendEmail =async (to:string,html:string)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: config.NODE_ENV==="production"?true:false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "mdolihasan@gmail.com",
          pass: "oems jhiu ewuh rvso",
        },
      });
      

    await transporter.sendMail({
        from: 'mdolihasan@gmail.com', // sender address
        to, // list of receivers
        subject: "Reset Your Password Within 10 minutes!", // Subject line
        text: "Hello Sir , Please reset your password", // plain text body
        html:`<p>Please Reset your Password here ${html}</>`, // html body
      });

}