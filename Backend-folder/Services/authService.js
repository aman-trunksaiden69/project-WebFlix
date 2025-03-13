const userModel = require('../Models/userModel');

// All functions here...

//Google Register function
module.exports.createGoogleUser = async ({ username, email, photo, isGoogleUser, password, age }) => {
  if (!username || !email || !photo || !isGoogleUser) {
    throw new Error('All fields are required');
  }

  const existingUser = await userModel.findOne({ email: email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const Googleuser = await userModel.create({
    username,
    email,
    photo,
    isGoogleUser,
    password,
    age
  });

  return Googleuser;
};