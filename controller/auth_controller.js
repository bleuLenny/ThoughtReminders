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
    failureRedirect: "/auth/login",
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect("/auth/login");
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

    res.redirect("/auth/login");
  },

  gitLogin: passport.authenticate("github"),
};

module.exports = authController;
