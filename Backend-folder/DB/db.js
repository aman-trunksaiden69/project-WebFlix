const mongoose = require('mongoose');


const connectDB = async () => {
    mongoose.connect('mongodb+srv://Instagram-Database:IXmJalzzcUkMvJWz@insta.vrl8y.mongodb.net/webflix-database').then(() => {
        console.log('Connected to MongoDB');
      }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
      });
}

module.exports = connectDB;