require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    console.log("Serializing user now");
    done(null, user.id);
});

passport.deserializeUser((_id, done) => {
    console.log("Deserializing user now");
    User.findById({_id}).then((user) => {
        console.log("User found");
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log(profile);
    User.findOne({googleID: profile.id})
    .then((user) => {
        if(user === null){
            const newUser = new User({
                name: profile.displayName,
                googleID: profile.id,
                thumbnail: profile.photos[0].value,
            });
            newUser.save().then((newUser) => {
                console.log("New User Created");
                done(null, newUser);
            });
        } else {
            console.log("User already exists");
            done(null, user);
        }
    });
}));