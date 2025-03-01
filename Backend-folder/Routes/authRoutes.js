const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google Auth Route
router.get('/google', (req, res, next) => {
  req.session.redirectTo = req.query.redirect || 'https://webflix-app-pr72.onrender.com/Home'; // Store intended route
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account', }));

// Callback Route 
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/Login' }),
  (req, res) => {
    try {
      const redirectTo = req.session.redirectTo || 'https://webflix-app-pr72.onrender.com/Home';
      delete req.session.redirectTo; // Clear after use
      console.log("User Authenticated! Redirecting to:", redirectTo);
      res.redirect('/Home');
    } catch (error) {
      console.error("Google Callback Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Get Current User Route (Protected)
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

module.exports = router;
