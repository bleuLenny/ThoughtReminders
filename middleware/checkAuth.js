module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) { //Checks if user has a session
            return next(); //Lets us move forward.
        };
        res.redirect('/auth/login');
    },
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) { //If the user is not already logged in.
            return next();
        };
        res.redirect('/');
    },
};