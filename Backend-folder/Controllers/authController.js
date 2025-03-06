const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')


module.exports.login = async (req, res) => {
  try{
   
    const { username, email, photo } = req.body;

    let user = await userModel.findOne({ email });

    if (!user) {
      
      const newuser = new userModel({
        username,
        email,
        photo
      });

      user = await newuser.save();
    }

    //convert mongoose object into plain data 
    user = user.toObject({ getters: true });

    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '24d' });
    res.cookie('access_token', token, {
        httpOnly: true,
        secure: true,    // cookie is sent over HTTPS
        sameSite: 'none' // For cross-site requests
    });

    res.status(200).json({ success: true, user: user, token, message: 'User Login successfully.' });
    

  }catch(error){
    console.log("Google auth Login error:", error);
    res.status(500).json({ success: false, error: error.message });
  }

};

module.exports.getUser = async (req, res) => {
   try {
    const token = req.cookies.access_token

    if(!token){
      return res.status(403).json({ success: false, message: 'Token not found.' });
    } 

    const decodedtoken = jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({ success: true, decodedtoken });

   } catch (error) {
    res.status(500).json({ success: false, message: error.message, error });
   }
};