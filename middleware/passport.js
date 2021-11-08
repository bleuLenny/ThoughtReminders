const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const userController = require('../controller/user_controller');

const localLogin = new LocalStrategy(
    {
        usernameField: "email", //We are logging in with email instead of username
        passwordField: "password"
    },
    (email, password, done) => {
        const user = userController.getUserByEmailIdAndPassword(email, password);
        return user
            ? done(null, user) //If true send the first parameter to the passport.seralizeUser
            : done(null, false, { //If false
                message: "Your login is not valid. Please try again"
            });
    }
);


passport.serializeUser((user, done) => {
    //Creates a session for that user
    //We store information about that user 
    //We receive the user from the localLogin 
    //req.user = { information here }
    done(null, user.id); //We store the user's id since its the most unique id
});

passport.deserializeUser((id, done) => {
    /*
    Everytime a page is refreshed or rendered, the server will call this function and 
    check if we have that user inside the database.
    */
    const user = userController.getUserById(id);
    if (user) {
        return done(null, user);
    }
    done({ message: "User not found" }, null);
});

module.exports = passport.use(localLogin);
