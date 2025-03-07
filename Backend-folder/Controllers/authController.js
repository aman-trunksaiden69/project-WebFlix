const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');


// Google Login
module.exports.googleLogin = async (req, res, next) => {

  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, email, photo } = req.body;

    // Check if user already exists
    let user = await userModel.findOne({ email });

    if (!user) {
      // Create new user if not exists
      const newuser = new userModel({
        username,
        email,
        photo
      });

      user = await newuser.save();
    }

    // Convert mongoose object to plain data
    user = user.toObject({ getters: true });

    // Generate token
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '24d' });

    // Save token in cookies for server-side use
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none'
    });

    // Send token in response for client-side (localStorage)
    res.status(200).json({
      success: true,
      user,
      token,
      message: 'Google Login successful'
    });
  } catch (error) {
    console.log("Google auth Login error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports.getUser = async (req, res, next) => {
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