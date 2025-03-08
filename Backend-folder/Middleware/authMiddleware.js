const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../Models/blacklisttokenModel');


//Middleware to check if user is authenticated-
module.exports.authUser = async (req, res, next) => {
    try {
        //Extract token from cookies or authorization header
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized: Token unavailable' });
        }

        //Check if token is blacklisted
        const isBlacklisted = await blacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ success: false, message: 'Unauthorized: Token blacklisted' });
        }

        //Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        
        //Conditionally remove password based on isGoogleUser flag
        let user = await userModel.findById(decoded._id);
        if (user?.isGoogleUser) {
            user = await userModel.findById(decoded._id).select('-password');  //Google user ke liye password hatao
        }

        if (!user) {
            return res.status(401).json({ success: false, message: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        return res.status(401).json({ success: false, message: 'Unauthorized: Token invalid' });
    }
};
