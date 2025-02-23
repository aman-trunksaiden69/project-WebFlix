const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google Auth Route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback Route
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('https://webflix-app-pr72.onrender.com');
  }
);

// Get Current User
router.get('/user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
