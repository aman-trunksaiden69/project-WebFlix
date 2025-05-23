const mongoose = require('mongoose');   
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



//User Schema Model-
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLength: [3, 'Username must be at least 3 characters long'],
    },

    email: {
        type: String,
        required: function (){
            return !this.googleId; // If not a Google user, email is required
        },
        unique: true,
        minLength: [3, 'Email must be at least 3 characters long'],
    },

    age: {
        type: Number,
        required: function (){
            return !this.googleId; // If not a Google user, age is required
        },
        //default: null,
    },

    photo: {
        type: String,
        default: '/uploads/default-photo-url.jpg',
    },

    password: {
        type: String,
        required: function (){
            return !this.isGoogleUser;
        },
        select: false,
        default: null,
    },

    googleProfile: {
        type: String,
        default: null,
    },

    token: {
        type: String,
    },

    googleId: {
        type: String,
        required: function() {
          return !this.email; 
        },
    },

}, { timestamps: true });



//Authentication Methods-

//Generating Authentication Tokens method
userSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, { expiresIn: '24h' });
        return token;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

//hash password statics method
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

//compare password method
userSchema.methods.comparePasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
};  

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;