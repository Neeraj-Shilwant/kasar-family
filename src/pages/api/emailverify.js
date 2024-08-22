import jwt from 'jsonwebtoken';

const verifyEmail = (req, res) => {
  
  const { token,email} = req.query;
  

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'ourSecretKey'); // Use the same secret key as in the token generation
    const decodedemail = decoded.email; // Extract the email from the token


    if(decodedemail==email){
      
      // Redirect to the index page with a success query parameter
      return res.redirect(`/?verified=true&decodedemail=${encodeURIComponent(email)}`);
      // return res.status(200).json({ message: 'Email successfully verified!', success : true});
    }
    else {
     
      // Redirect to the index page with a failure query parameter
      return res.redirect(`/?verified=false&decodedemail=${encodeURIComponent(email)}`);
    }
    
    
  } catch (error) {
    return res.redirect(`/?verified=false&decodedemail=${encodeURIComponent(email)}`);
  }
};

export default verifyEmail;