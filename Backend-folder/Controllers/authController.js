const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')


export const login = async (req, res) => {
  try{
   
    const { username, email, photo } = req.body;

    let user;

    user = await userModel.findOne({ email });

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

    const token = jwt.sign(user, process.env.JWT_SECRET);
    res.cookie('access_token', token, {
        httpOnly: true,
    });

    res.status(200).json({ success: true, user: user, message: 'User Login successfully.' });
    

  }catch(error){
    console.log("Login error:", error);
    res.status(500).json({ success: false, error: error.message });
  }

};

export const getUser = async (req, res) => {
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