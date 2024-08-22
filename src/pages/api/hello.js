// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions,transporter } from "../../../components/nodemailer";

const handler = async (req, res) =>{
    
    const {Name,Email,Mobilenumber} = req.body;
    const htmlContent = `
    <h1>Welcome to Our Community!</h1>
    <p>Dear ${Name},</p>
    <p>We’re thrilled to have you here. Thank you for joining our community! We believe in creating a space where everyone can share, learn, and grow together.</p>
    <p>If you ever have any questions, don’t hesitate to reach out. We’re here to help you make the most of your experience.</p>
    <p class="footer">Best Regards ,<br/>The IT-IMPACT Team</p>
`;
    try {
      await transporter.sendMail({
        ...mailOptions,
        to:Email,
        subject:"Welcome to the KASAR Family! Let's Grow Together",
        html: htmlContent
      
      });
      return res.status(200).json({status:"Email Sent Successfully ~~!"});
    } catch (error) {
      console.log(error);
      console.log("email : ",Email);
      return res.status(400).json({message:error.message});
    }
  }

export default  handler;