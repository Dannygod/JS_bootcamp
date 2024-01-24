const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render("profile");
});

module.exports = router;