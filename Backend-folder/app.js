require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./DB/db');
const userRoutes = require('./Routes/userRoutes');
const authRoutes = require('./Routes/authRoutes');



connectDB();    // Connect to MongoDB

app.use(morgan('dev'));  // HTTP request logger middleware

app.use(cors({
  origin: [
    'https://webflix-app-pr72.onrender.com',
    'http://localhost:5173'
  ],
  credentials: true,
}));  // Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());    //cookie parser


// Static folder for serving uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('API is running!');
});


//Server Routes-
app.use('/users', userRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
