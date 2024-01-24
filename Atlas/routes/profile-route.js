const router = require('express').Router();

const loginCheck = (req, res, next) => {
    // console.log(req.user);
    if(!req.isAuthenticated()){
        res.redirect("/auth/login");
    }
    else{
        next();
    }
}
router.get('/', loginCheck, (req, res) => {
    res.render("profile", {user: req.user});
});

module.exports = router;