dotenv.config();
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./DB/db');
const userRoutes = require('./Routes/userRoutes');
const authRoutes = require('./Routes/authRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');



connectDB();    // Connect to MongoDB

app.use(morgan('dev'));  // HTTP request logger middleware

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

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_CONNECT, // MongoDB URI
    ttl: 2 * 24 * 60 * 60, // 2 days expiry
  }),
  cookie: {
    maxAge:2 * 24 * 60 * 60 * 1000, // 2 days
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: 'none',
  },
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
  res.send('CORS is running!');
});


//Server Routes-
app.use('/users', userRoutes);
app.use('/auth', authRoutes);


module.exports = app;
