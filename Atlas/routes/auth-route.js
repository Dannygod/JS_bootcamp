const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");

router.get("/login", (req, res) => {
    res.render("login", { user: req.user });
});

router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/auth/login', 
    failureFlash: "Wrong username or password",
    }), (req, res) => {
        console.log(req.session.returnTo);
        if(req.session.returnTo){
            console.log("Redirecting to: " + req.session.returnTo);
            let tmp = req.session.returnTo;
            req.session.returnTo = null;
            res.redirect(tmp);
        } else {
            res.redirect("/profile");
        }
});
router.get("/signup", (req, res) => {
    res.render("signup", { user: req.user });
});
router.post("/signup", async (req, res, next) => {
    console.log(req.body);
    let {name, email, password} = req.body;
    // check if user exists
    const emailExist = await User.findOne({email});
    console.log(emailExist);
    if(emailExist) {
        req.flash("error_mes", "Email already exists");
        res.redirect("/auth/signup");
        return;
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, 10);
    // console.log(hash);
    password = hash;
    let newUser = new User({name, email, password});
    try{
        await newUser.save();
        req.flash("success_mes", "User created. Please login");
        res.redirect("/auth/login");
    } catch(err){
        req.flash("error_mes", err.errors.name.properties.message);
        res.redirect("/auth/signup");
    }
});
router.get("/logout", (req, res) => {
    req.logOut(() => {
        res.redirect("/");
    });
});
router.get("/google", 
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    }
));
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    console.log(req.session.returnTo);
    if(req.session.returnTo){
        console.log("Redirecting to: " + req.session.returnTo);
        let tmp = req.session.returnTo;
        req.session.returnTo = null;
        res.redirect(tmp);
    } else {
        res.redirect("/profile");
    }
});

module.exports = router;