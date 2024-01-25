require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user-model');
const bcrypt = require("bcrypt");

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
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            // console.log(username)
            const user = await User.findOne({ email: username });
            if (!user) {
                console.log("User not found");
                return done(null, false);
            }
            if (user.googleID) {
                console.log("User found with googleID");
                return done(null, false);
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                console.log("Password not valid");
                return done(null, false);
            }
            console.log("User found");
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log(profile);
    // console.log(email);
    User.findOne({googleID: profile.id})
    .then((user) => {
        if(user === null){
            const newUser = new User({
                name: profile.displayName,
                googleID: profile.id,
                thumbnail: profile.photos[0].value,
                email: profile.emails[0].value,
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