const passport = require('passport');
const LocalStrategy = require('passport-local').LocalStrategy;
const authController = require('../controller/auth_controller');


const localLogin = new LocalStrategy(
    {
        usernameField: "email", //We are logging in with email instead of username
    },
    (email,password,done)=>{
        //Check if user in the database via email and password
    
        //Use a function to retrieve user from database with correct password.
        //if successful, done(null,user)
        //Else, done(null,false,{
            // message: "Login details are incorrect. Please try again."
        // })
    }
)