const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userModel = require('./Models/userModel');
require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    },

    async ( profile, done ) => {

        try {
            let user = await userModel.findOne({ googleId: profile.id });
      
            if (!user) {
              user = new userModel({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                photo: profile.photos[0].value
              });

              await user.save();
            }
            done(null, user);
          } catch (err) {
            done(err, null);
          }
    }

));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
});