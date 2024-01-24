const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
router.get("/login", (req, res) => {
    res.render("login", { user: req.user });
});
router.get("/signup", (req, res) => {
    res.render("signup", { user: req.user });
});
router.post("/signup", async (req, res, next) => {
    console.log(req.body);
    let {name, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    password = hash;
    let newUser = new User({name, email, password});
    try{
        await newUser.save();
        res.status(200).send({
            message: "User created", 
            saveOBJ: newUser
        })
    } catch(err){
        next(err);
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
    res.redirect("/profile");
});

module.exports = router;