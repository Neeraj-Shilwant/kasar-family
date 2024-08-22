
import { mailOptions,transporter } from "../../../components/nodemailer";
const jwt = require('jsonwebtoken');

const emailtoken = async (req,res)=>{
    const {Name,Email} = req.body;
    const token = jwt.sign({
        email: Email
    }, 'ourSecretKey', { expiresIn: '10m' }  
    );

    const htmlContent = `
    <h1>Welcome to Our Community!</h1>
    <p>Dear ${Name},</p>
    <h2>Email Verification</h2>
    <p>We’re thrilled to have you here. Thank you for joining our community! Click on the link below for Email Verification : </p>
    <p>Click <a href="https://kasar-family.vercel.app/api/emailverify?token=${token}&email=${Email}">HERE</a> to verify email.</p>
    <p class="footer">Best Regards,<br/>The IT-IMPACT Team</p>
    `;
    
    try {
        await transporter.sendMail({
          ...mailOptions,
          to:Email,
          subject:"Welcome to the KASAR Family! Email verification",
          html: htmlContent
        
        });
        
        return res.status(200).json({status:"Email Verification Sent ~~!"});
      } catch (error) { 
        console.log(error);
        
        return res.status(400).json({message:error.message});
      }
};
export default emailtoken;