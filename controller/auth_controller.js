const passport = require('../middleware/passport');
let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
    })
  },

  registerSubmit: (req, res) => {
    // implement
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/auth/login/'); //Then redirect user to the login page.
  }
};

module.exports = authController;