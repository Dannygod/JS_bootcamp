require('dotenv').config()
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log(profile);
    User.findOne({googleID: profile.id})
    .then((user) => {{
        if(user === null){
            const newUser = new User({
                name: profile.displayName,
                googleID: profile.id,
                thumbnail: profile.photos[0].value,
            }).save().then((newUser)=>{
                console.log("New User Created");
                done(null, newUser);
            })
        } else {
            console.log("User already exists");
            done(null, user);
        }
    }})     
}))