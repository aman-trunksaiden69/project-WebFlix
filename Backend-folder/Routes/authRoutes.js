const express = require('express');
const authController = require('../Controllers/authController');
const { body } = require('express-validator');
const authMiddleware = require('../Middleware/authMiddleware');
const ratelimitMiddleware = require('../Middleware/ratelimitMiddleware');

const authRoute = express.Router();

//All Routes-

//google-login route-
authRoute.post('/google-login',
  [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
  ],
  authController.googleLogin
);

//get-user route-
authRoute.get('/get-user',authMiddleware.authUser,
  ratelimitMiddleware.apiLimiter,
  authController.getUser
);


module.exports = authRoute;