const passport = require('../middleware/passport');
let { userDatabase } = require('../models/usermodel');

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit:
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/auth/login",
    }),

  registerSubmit: (req, res) => {
    userDatabase.push({
      id: 3,
      name: "test",
      email: req.body.email,
      password: req.body.password
    });
    res.render('auth/login')
  },
  githubLoginSubmit: passport.authenticate("github"),
  githubCallback: passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/auth/login'); //Then redirect user to the login page.
  }
};

module.exports = authController;
