const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./DB/db');
const userRoutes = require('./Routes/userRoutes');
const userModel = require('./Models/userModel');



connectDB();    // Connect to MongoDB

app.use(morgan('dev'));  // HTTP request logger middleware

app.use(cors({
  origin: [ 'https://webflix-app-pr72.onrender.com','http://localhost:5173' ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
  credentials: true,
}));  // Cross-Origin Resource Sharing

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());    //cookie parser

// Session Configuration
const MongoStore = require('connect-mongo');
const userModel = require('./Models/userModel');
const store = MongoStore.create({
  mongoUrl: process.env.DB_CONNECT,
  collectionName: 'sessions'
}); 

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false, 
  saveUninitialized: false, 
  cookie: { secure: process.env.NODE_ENV === 'production' },
  store: store,
  unset: 'destroy',
}));

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://webflix-server-rcqi.onrender.com/auth/google/callback",
  successRedirect: 'https://webflix-app-pr72.onrender.com/profile',
  failureRedirect: '/login',
}, async (accessToken, refreshToken, profile, cb) => {
  try {
    const user = await userModel.findOne({ googleId: profile.id });
    if (user) {
      return cb(null, user);
    } else {
      const newUser = new userModel({
        username: profile.displayName,
        googleId: profile.id,
      });
      await newUser.save();
      return cb(null, newUser);
    }
  } catch (err) {
    return cb(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});


// Static folder for serving uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('API is running!');
});


//Server Routes-
app.use('/', userRoutes);


module.exports = app;
