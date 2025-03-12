const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
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
      user = new userModel({
        username,
        email,
        photo,
        isGoogleUser: true,
        password: null,
        age: null
      });

      await user.save();
    }

    // Generate token (only with user._id for security)
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '24d' });

    // Save token in cookies for server-side use
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only secure in production
      sameSite: 'none'
    });

    // Send token and user data in response
    res.status(200).json({
      success: true,
      user: { _id: user._id, username: user.username, email: user.email, photo: user.photo },
      token,
      message: 'Google Login successful'
    });

  } catch (error) {
    console.error("Google auth Login error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get User
module.exports.getUser = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return res.status(403).json({ success: false, message: 'Token not found.' });
    }

    // Verify token and get userId
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    // Find user by ID
    const user = await userModel.findById(decodedToken.userId).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    res.status(200).json({ success: true, user });

  } catch (error) {
    console.error("Error in getUser:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
