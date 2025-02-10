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
app.use(cors());    // Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());    //cookie parser

// Static folder for serving uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



//Server Routes-
app.get('/', (req, res) => {
    res.send('hello from serverside!');
});

app.use('/users', userRoutes);



module.exports = app;