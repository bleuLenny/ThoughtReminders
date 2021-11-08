const express = require("express");
const passport = require("../middleware/passport");
const {forwardAuthenticated} = require("../middleware/checkAuth");
const authController = require("../controller/auth_controller");
const router = express.Router();

router.get("/register", authController.register);
router.post("/register", authController.registerSubmit);

router.get("/login", forwardAuthenticated, authController.login);
router.post("/login", authController.loginSubmit);

router.get('/github', authController.gitLogin);
router.get('/github/callback',  passport.authenticate("github",  { failureRedirect: '/auth/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/reminders');
});

router.get("/logout", authController.logout);

module.exports = router;