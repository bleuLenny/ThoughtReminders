const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../middleware/checkAuth");
const authController = require('../controller/auth_controller');
const passport = require('../middleware/passport');


router.get("/register", forwardAuthenticated, authController.register);
router.post('/register', authController.registerSubmit);

router.get('/login', forwardAuthenticated, authController.login);
router.post('/login', authController.loginSubmit);
router.get('/logout', ensureAuthenticated, authController.logout);

router.get('/github', authController.githubLoginSubmit,authController.dashboard);
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/auth/login' }),
    function (req, res) {

        res.redirect('/dashboard');
    });

module.exports = router