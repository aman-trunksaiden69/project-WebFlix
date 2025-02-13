const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./DB/db');
const userRoutes = require('./Routes/userRoutes');


connectDB();    // Connect to MongoDB
app.use(cors({
  origin: ['https://webflix-app-pr72.onrender.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));  // Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());    //cookie parser


// Static folder for serving uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from React app
  app.use(express.static(path.join(__dirname, '../Frontend-folder/dist')));

  // Catch-all route to handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend-folder/dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('hello from serverside!');
  });
}

//Server Routes-
app.use('/users', userRoutes);

module.exports = app;
