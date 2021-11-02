const express = require('express');
// Import passport here
// Import ForwardAuthenticated function here 

const router = express.Router()


//Route for logging in. Sends user to login page

// router.get('/login') 



 // When user clicks the login button

// router.post(
//     "/login",
//     passport.authenticate("local",{ //We login via session 
//         successRedirect: "/reminders", //If login successful, send user to their reminders
//         failureRedirect: "/auth/login", //if login is not successful, send user back to the login page
//     })
// )

//Implement where user  clicks logout button.