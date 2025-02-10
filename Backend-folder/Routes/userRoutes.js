const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../Controllers/userController');
const authMiddleware = require('../Middleware/authMiddleware');
const ratelimitMiddleware = require('../Middleware/ratelimitMiddleware');
const upload = require('../Utils/upload');



// All Routes here...

// Register route
router.post('/register',
  [
    body('username').isLength({ min: 3 }).withMessage('username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('age').isNumeric().withMessage('Please enter a valid age'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  userController.registerUser
);

//Login route
router.post('/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  userController.loginUser
);

//Edit-profile route
router.post('/editprofile', authMiddleware.authUser, ratelimitMiddleware.uploadLimiter, upload.single('photo'), userController.editProfile
);

//Profile route
router.get('/profile', authMiddleware.authUser, userController.getProfile
);

//Logout route
router.get('/logout', authMiddleware.authUser, userController.logoutUser
);

module.exports = router;