const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../Models/blacklisttokenModel');


//Middleware to check if user is authenticated-
module.exports.authUser = async (req, res, next) => {

    // Extract token from cookies or authorization header
    const authHeader = req.headers.authorization;

    const token = req.cookies.token || (authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null);

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized:- token unavailable' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if(isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized:- token blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        return next();
        
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized:- token invalid' });
    }

};
