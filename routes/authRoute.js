const express = require('express');
const passport = require('passport');
const { forwardAuthenticated } = require('../middleware/checkAuth');
//Forward authenticated checks if a user is already logged in. 
const router = express.Router()


//Route for logging in. Sends user to login page


router.get('/login', forwardAuthenticated, (req, res) => {
    // console.log('User is not logged in.');
    res.render('login');
})

// When user clicks the login button
router.post(
    "/login",
    passport.authenticate("local", { //We login via session 
        successRedirect: "/reminders", //If login successful, send user to their reminders
        failureRedirect: "/auth/login", //if login is not successful, send user back to the login page
    })
)

router.get('/logout', (res, req) => {
    //When there is a get request to this route, we simply just logout using passport's req.logout()
    //Destroy's serializeUser 
    req.logout();
    res.redirect('/auth/login/'); //Then redirect user to the login page.
});

module.exports = router;