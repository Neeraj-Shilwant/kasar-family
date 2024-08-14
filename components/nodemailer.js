const nodemailer = require("nodemailer");
const password  = process.env.EMAIL_PASS;
const email  = process.env.EMAIL;
export const transporter = nodemailer.createTransport({
  service:'gmail' ,
  auth: {
    user:email,
    pass: password,
  },
});

export const mailOptions = {
    from: email, // sender address
    
  };
