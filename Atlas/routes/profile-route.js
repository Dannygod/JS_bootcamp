const router = require('express').Router();
const e = require('connect-flash');
const Post = require("../models/post-model");
const loginCheck = (req, res, next) => {
    // console.log(req.user);
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        console.log(req.session.returnTo);
        res.redirect("/auth/login");
    }
    else{
        next();
    }
}
router.get('/', loginCheck, async (req, res) => {
    try{
        let findPosts = await Post.find({author: req.user._id})
        res.render("profile", {user: req.user, posts: findPosts});
    } catch(err){
        console.log(err);
        res.send("Error in fetching posts");
    }
});

router.get("/post", loginCheck, (req, res) => {
    res.render("post", {user: req.user});
})

router.post("/post", loginCheck, async (req, res) => {
    console.log(req.body);
    let {title, content} = req.body;
    const newPost = new Post({
        title,
        body: content,
        author: req.user._id,
    });
    try{
        await newPost.save()
        res.redirect("/profile");
    } catch(err){
        // req.flash("error_mes", err.errors.properties.message);
        console.log(err);
        res.send(err);
    }

});
module.exports = router;