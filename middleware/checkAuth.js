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
        console.log('CHECK')
        console.log(req.user);
        if (req.user.role === 'admin') {
            console.log('Is an admin')
            return next();
        };
        console.log('Not an admin.')
        res.redirect('/');
    },
};