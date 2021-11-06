const passport = require("../middleware/passport");
const {database} = require("../models/userModel");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginTest: (req, res, next) => {
    next();
  },

  loginSubmit: passport.authenticate("local", {
    successRedirect: "/reminders",
    failureRedirect: "/login",
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect("/login");
  },

  registerSubmit: (req, res,) => {
    // implement
    userInput = req.body;
    database.push({
      id: Date.now(),
      name: userInput.email.split("@")[0],
      email: userInput.email,
      password: userInput.password,
    });

    res.redirect("/login");
  },

  gitLogin: passport.authenticate("github"),
  gitLoginCB: passport.authenticate("github",  { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/reminders');
  }
};

module.exports = authController;
