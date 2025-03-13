const userModel = require('../Models/userModel');
const { validationResult } = require('express-validator');
const authService = require('../Services/authService'); 


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
    let isuserAlreadyExits = await userModel.findOne({ email }).select('-password');

    if (isuserAlreadyExits) {
      return res.status(400).json({ message: 'User already exists' });
    }

    //create user
    const user = authService.createGoogleUser({
      username,
      email,
      isGoogleUser: true,
      password: null,
      photo: photo || null
    });


    // Generate token
     const token = await user.generateAuthToken();

    // Save token in cookies for client-side use
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only secure in production
      sameSite: 'none'
    });

    // Send token and user data in response
    res.status(201).json({ success: true, user, token, message: 'Google Login successful' });

  } catch (error) {
    console.error("Google auth Login error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get User
module.exports.getUser = async (req, res, next) => {

  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.status(200).json({ success: true, user: req.user, message: 'Profile fetched successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while fetching profile' });
  }
};
