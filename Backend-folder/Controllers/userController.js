const userModel = require('../Models/userModel');
const userService = require('../Services/userService');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../Models/blacklisttokenModel');


//All Route here-

// Register route logic
module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, age, password } = req.body;

    // Hashing password
    const hashedPassword = await userModel.hashPassword(password);

    // Check if user already exists
    const isuserAlreadyExits = await userModel.findOne({ email });
    if (isuserAlreadyExits) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Creating new user
    const user = await userService.createUser({
      username,
      email,
      age,
      password: hashedPassword,
      photo: req.body.photo || null  // Handle photo field properly
    });

    // Generating token
    const token = await user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while registering user' });
  }
};

// Login route logic
module.exports.loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = await user.generateAuthToken();
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',  // For cross-site requests in production
      maxAge: 24 * 60 * 60 * 1000  // 1 day expiry
    });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong during login' });
  }
};

// Profile route logic
module.exports.getProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while fetching profile' });
  }
};

// Edit Profile logic
module.exports.editProfile = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("Original User Data: ", user);

    // Update name and photo if provided  
    if (req.body.username) user.username = req.body.username;
    if (req.file) user.photo = `/uploads/${req.file.filename}`; // Update photo path

    // Save updated user details
    await user.save();

    res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        username: user.username,
        photo: user.photo
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while updating profile' });
  }
};

// Logout route logic
module.exports.logoutUser = async (req, res, next) => {
  try {
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    // Blacklist token
    await blackListTokenModel.create({ token });

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while logging out' });
  }
};