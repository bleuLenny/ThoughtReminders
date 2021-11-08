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
    isAdmin: function (req, res, next) {
        if (!req.isAuthenticated() || req.user.role !== 'admin') { //If the user is not already logged in.
            res.redirect('/')
        };
        if (req.user.role === 'admin') {
            return next();
        }
    },
};