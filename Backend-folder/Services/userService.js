const userModel = require('../Models/userModel');

// All functions here...

// Register function
module.exports.createUser = async ({ username, email, password, age, photo }) => {
  if (!username || !email || !password || !age || !photo) {
    throw new Error('All fields are required');
  }

  const existingUser = await userModel.findOne({ email: email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const user = await userModel.create({
    username,
    email,
    age,
    photo,
    password
  });

  return user;
};