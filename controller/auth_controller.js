const passport = require('../middleware/passport');
let {userDatabase} = require('../models/usermodel');

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
      failureRedirect: "/login",
    }),

  registerSubmit: (req, res) => {
    userDatabase.push({
      id: 3,
      name: "test",
      email: req.body.email,
      password: req.body.password
    })
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/login'); //Then redirect user to the login page.
  }
};

module.exports = authController;