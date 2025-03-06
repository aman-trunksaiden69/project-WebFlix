import express from 'express';
import { getUser, login } from '../Controllers/authController.js';

const authRoute = express.Router();

authRoute.post('/login', login );
authRoute.get('/get-user', getUser );


export default authRoute;