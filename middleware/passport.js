const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const userController = require('../controller/user_controller');
require('dotenv').config()

const localLogin = new LocalStrategy(
    {
        usernameField: "email", //We are logging in with email instead of username
    },
    (email, password, done) => {
        console.log('Using local strategy')
        const user = userController.getUserByEmailIdAndPassword(email, password);
        return user
            ? done(null, user) //If true send the first parameter to the passport.seralizeUser
            : done(null, false, { //If false
                message: "Your login is not valid. Please try again"
            });
    }
);



const githubLogin = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        userController.findOrCreate({ githubId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
);


passport.serializeUser((user, done) => {
    console.log('Seralizing user.')
    //Creates a session for that user and stores their information temporarily
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

module.exports = passport.use(localLogin).use(githubLogin);