const mongoose = require('mongoose');

  
const googleSchema = new mongoose.Schema({
    googleId: String,
    username: String,
    photo: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('google', googleSchema);