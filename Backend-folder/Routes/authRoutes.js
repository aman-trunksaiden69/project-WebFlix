const express = require('express');
const authController = require('../Controllers/authController')

const authRoute = express.Router();

authRoute.post('/login', authController.googleLogin );
authRoute.get('/get-user', authController.getUser );


module.exports = authRoute;