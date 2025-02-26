const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userModel = require('../Models/userModel');
require('dotenv').config();

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error("Missing Google OAuth Credentials in .env file!");
  process.exit(1); // Stop the server if credentials are missing
}

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://webflix-server-rcqi.onrender.com/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        if (!profile) {
          throw new Error("Google OAuth Profile Data is undefined!");
        }

        console.log("Google OAuth Callback Triggered!");
        console.log("Redirect URI Used:", 'https://webflix-server-rcqi.onrender.com/auth/google/callback');
        console.log("Profile Data:", profile);

        let user = await userModel.findOne({ googleId: profile.id });

        if (!user) {
          user = new userModel({
            googleId: profile.id,
            name: profile.displayName || "No Name",
            username: profile.displayName ? profile.displayName.replace(/\s/g, "").toLowerCase() : `user_${Date.now()}`, // Generate default username
            email: profile.emails?.[0]?.value || "No Email",
            photo: profile.photos?.[0]?.value || "No Photo",
            age: 18, // Default age
          });

          await user.save();
          console.log("New user created:", user);
        } else {
          console.log("Existing user found:", user);
        }

        return done(null, user);
      } catch (err) {
        console.error("Error in Google OAuth Strategy:", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
