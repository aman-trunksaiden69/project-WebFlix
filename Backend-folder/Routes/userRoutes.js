const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../Controllers/userController');
const userModel = require('../Models/userModel');
const authMiddleware = require('../Middleware/authMiddleware');
const upload = require('../Utils/upload');
const passport = require('passport');
const axios = require('axios');
const jwt = require('jsonwebtoken');



// All Routes here...

// Register route
router.post('/user/register',
  [
    body('username').isLength({ min: 3 }).withMessage('username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('age').isNumeric().withMessage('Please enter a valid age'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  userController.registerUser
);

//Login route
router.post('/user/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  userController.loginUser
);

//Edit-profile route
router.post('/user/editprofile', authMiddleware.authUser, upload.single('photo'), userController.editProfile
);

//Profile route
router.get('/user/profile', authMiddleware.authUser, userController.getProfile
);

//Logout route
router.get('/user/logout', authMiddleware.authUser, userController.logoutUser
);



//Google login route-

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile','email'],
}));

router.get('/auth/google/callback', async (req, res) => {
  const code = req.query.code;

  if (code) {
    try {
      // Exchange authorization code for access token
      const { data } = await axios.post('https://oauth2.googleapis.com/token', null, {
        params: { 
          code,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          redirect_uri: 'https://webflix-server-rcqi.onrender.com/auth/google/callback',
          grant_type: 'authorization_code',
        },
      });

      const accessToken = data.access_token;
      const profileData = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(profileData.data);
      // Find or create user based on Google profile
      let user = await userModel.findOne({ googleId: profileData.data.sub });

      const token = await userModel.generateAuthToken(); // Generate JWT token for the user

      if (!user) {
        const profileImage = profileData.data.picture;
        const email = profileData.data.email;
        const username = profileData.data.name;
        const googleId = profileData.data.sub;
      
        // Create new user with Google profile data
        user = new userModel({
          username,
          googleId,
          token,
          email,
          googleProfile: profileImage,
          age: 18, // Default age if not provided
          password: googleId, // You may want to use a secure random value instead
        });
        await user.save();
        upload.single(user.photo);
      }
 

      // Create JWT token for the user

      // Redirect to frontend with the token
    if(accessToken ){
      if(process.env.NODE_ENV === 'production'){
        res.redirect(`https://webflix-app-pr72.onrender.com/login?token=${token}`);
      }else{
        res.redirect(`http://localhost:5173/login?token=${token}`);
      }
      // res.status(200).send({ message: 'Logged in successfully'});
      console.log(user);
    }else{
      res.status(400).send({ message: 'Failed to login' });
    }
      
    } catch (error) {
      console.error('Error during token exchange:', error);
      return res.redirect('/error');
    }
  } else {
    return res.redirect('/');
  }
});



module.exports = router;