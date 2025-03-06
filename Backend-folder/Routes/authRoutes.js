const express = require('express');
const authController = require('../Controllers/authController')

const authRoute = express.Router();

authRoute.post('/login', authController.login );
authRoute.get('/get-user', authController.getUser );


module.exports = authRoute;