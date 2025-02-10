const rateLimit = require('express-rate-limit');

module.exports.uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 10, // 10 uploads per window per IP
    message: 'Too many upload attempts, please try again later.',
});