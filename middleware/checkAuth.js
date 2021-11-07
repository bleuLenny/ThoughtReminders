module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) { //Checks if user has a session
            console.log('Ensure Authentication successful.')
            return next(); //Lets us move forward.
        };
        console.log('Sending user to login page.')
        res.redirect('/login');
    },
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) { //If the user is not already logged in.
            console.log('User is not logged in. Going next.');
            return next();
        };
        console.log('User is already logged in.')
        res.redirect('/');
    },
};